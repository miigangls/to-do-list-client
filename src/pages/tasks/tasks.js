import React, { useEffect } from 'react';
import { fetchActiveTask
    , fetchCompleteTask
    , fetchDeleteTask
    , fetchAddTask} from '../../firebase/fetch';
import {Text} from '../../components'
import { filter  } from '../../utils'
import UseTasks from '../../hooks/useTasks'
import useComponents from '../../hooks/useComponents'
import UseAut from '../../hooks/useAut'
import State from '../states'



const Task = (props) => {
    const {userId} =  UseAut()
    const { values , handleChange } = useComponents(State.tasks);
    const { useTasks, fetchTasks} = UseTasks({userId, order:values.sort})
    let { data } = useTasks

    useEffect(() => {
        fetchTasks();
    }, [data.length]);

    // Create a new task
    async function onClickAdd (e) {
        e.preventDefault();
        let rest = await fetchAddTask({userId, task: values.task, status: true })
        if(rest.error) console.log('no se puedo agregar la tarea', rest.error)
        fetchTasks()
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
        await fetchDeleteTask({id}) 
        fetchTasks()
    }

    


    data = filter(data, values.filter) // Filter data based on its status

    return (
        <>
        <div className="row">
                <div className="input-row ">
                    <div className="eleven columns">
                        <Text placeholder="Ingresa una nueva tarea"  handleChange= {handleChange} name="task" noFormItem={true} />
                    </div>
                    <div className="one columns">
                        <button onClick={onClickAdd} className="button-primary"><i className="fas fa-plus"></i></button>
                    </div>    
                </div>
        </div>
        <div className="input-filter row">
        <div style={{marginRight: 'auto'}} ></div>
            <div className="align-items" >
                <label className="text-label">Fitrar</label>
                <select  name="filter" onChange={handleChange} className="custom-select custom-select-sm btn my-2">
                    <option value="all" selected>Todas</option>
                    <option value={false}>Completadas</option>
                    <option value={true}>Activas</option>
                </select>
            </div>
        </div>
        <div className="row">
            <div className="list-wrapper">
                <ul>
                    {
                        data.map(({data, id}, i) => {
                            return <li key={id} className={(!data.status)? 'completed' : ''}>
                                <div className="form-check"> 
                                    <label  className="form-check-label"> 
                                    <input checked={(!data.status)? true : false}  onChange={(e)=> onClickStatus(e, {...data, id})}  className="checkbox" type="checkbox" /> 
                                    {`${i + 1}. ${data.task}`} 
                                    <i className="input-helper" ></i>
                                    <a onClick={(e)=> onClickDelete(e, id)} >
                                        <i class="fas fa-trash-alt"></i>    
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