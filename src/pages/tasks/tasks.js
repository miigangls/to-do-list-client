import React, { useEffect, useState } from 'react';
import { fetchActiveTask
    , fetchCompleteTask
    , fetchDeleteTask
    , fetchAddTask} from '../../firebase/fetch';
import {Text} from '../../components'
import { filter  } from '../../utils'
import UseTasks from '../../hooks/useTasks'
import UseComponents from '../../hooks/useComponents'
import UseAuthenticated from '../../hooks/useAuthenticated'
import State from '../states'


const Task = () => {
    const [sort, setSort] = useState(true)
    const {userId} =  UseAuthenticated()
    const { useValues , handleChange, handleClear  } = UseComponents(State.tasks);
    let { useTasks, fetchTasks} = UseTasks({userId, order: useValues.sort})
    let { data } = useTasks

    useEffect(() => {
        fetchTasks()
    }, [useTasks.data.length]);
    
    
    // Create a new task
    async function onClickAdd (e) {
        e.preventDefault();
        if(!useValues.task) return
        let rest = await fetchAddTask({userId, task: useValues.task, status: true })
        if(rest.error) console.log('no se puedo agregar la tarea', rest.error)
        fetchTasks()
        handleClear('task')
    }

    
    // change task status
    async function onClickStatus(e, data) {
        e.preventDefault();
        if(data.status) {
            await fetchCompleteTask({id: data.id, userId, task: data.task, status: false }) 
        } else {
            await fetchActiveTask({id: data.id, userId, task: data.task, status: true }) 
        }
        fetchTasks()
    }

    // Delete a task.
    async function onClickDelete (e, id) {
        e.preventDefault();
        let rest =  await fetchDeleteTask({id}) 
        if(rest.error) console.log('no se puedo agregar la tarea', rest.error)
        fetchTasks()
    }


    async function onClientSort(e) {
        e.preventDefault()
        if(sort) {  
            data = data.sort((a, b) => {
                if(a.key > b.key) return 1;
                if(a.key < b.key) return -1;
                return 0;
            });
        }
        else {
            data = data.sort((a, b) => {
                if(a.key > b.key) return -1;
                if(a.key < b.key) return 1;
                return 0;
            });
        } 
        setSort(!sort)
    }

    data = filter(data, useValues.filter) // Filter data based on it's status

    

    return (
        <>
        <div className="row">
            <form onSubmit={onClickAdd}>
                <div className="input-row ">
                    <div className="eleven columns">
                        <Text placeholder="Ingresa una nueva tarea" value={useValues.task}  handleChange= {handleChange} name="task" noFormItem={true} />
                    </div>
                    <div className="one columns">
                        <button onClick={onClickAdd} className="button-primary"><i className="fas fa-plus"></i></button>
                    </div>    
                </div>
            </form>
                
        </div>
        <div className="input-filter row">
            <div style={{marginRight: 'auto'}} ></div>
            <div className="align-items" >
                <div className="item">
                    <label className="text-label">Fitrar</label>    
                    <select  defaultValue={useValues.filter}  name="filter" onChange={handleChange} className="custom-select custom-select-sm btn my-2">
                        <option value="all">Todas</option>
                        <option value={false}>Completadas</option>
                        <option value={true}>Activas</option>
                    </select>
                </div>
                <label className="text-label">Ordenar</label>
                <div className="item" onClick={onClientSort}> <i className={`fas ${(sort) ? 'fa-sort-amount-down-alt': 'fa-sort-amount-up-alt'}`}></i></div>
            </div>
            
        </div>
        <div className="row">
            <div className="list-wrapper">
                <ul>
                    {
                        data.map((data, i) => {
                            let {status, id, task, key} = data
                            return <li key={id} className={(!status)? 'completed' : ''}>
                                <div className="form-check"> 
                                    <label  className="form-check-label"> 
                                    <input checked={(!status)? true : false}  onChange={(e)=> onClickStatus(e, {...data, id})}  className="checkbox" type="checkbox" /> 
                                    {`${key}. ${task}`} 
                                    <i className="input-helper" ></i>
                                    <a onClick={(e)=> onClickDelete(e, id)} >
                                        <i className="fas fa-trash-alt"></i>    
                                    </a>
                                    </label> 
                                </div> 
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    );
};

export default Task;