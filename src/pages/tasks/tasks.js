import React, { useEffect } from 'react';
import { fetchActiveTask, fetchCompleteTask, fetchDeleteTask } from '../../firebase/fetch';
import { filter  } from '../../utils'
import UseTasks from '../../hooks/useTasks'
import useComponents from '../../hooks/useComponents'
import UseAut from '../../hooks/useAut'
import State from '../states'
import { A } from 'hookrouter';

const Task = (props) => {
    const {userId} =  UseAut()
    const { values , handleChange } = useComponents(State.filters);
    const { useTasks, fetchTasks} = UseTasks({userId, order:values.sort})
    let {data} = useTasks
    useEffect(() => {
        fetchTasks();
    }, [data.length]);

    async function onClick (e, data) {
        e.preventDefault();
        if(data.status) {
            await fetchCompleteTask({id: data.id, userId, task: data.task, status: false }) 
        } else {
            await fetchActiveTask({id: data.id, userId, task: data.task, status: true }) 
        }
        fetchTasks()
    }

    async function onClickDelete (e, id) {
        e.preventDefault();
        await fetchDeleteTask({id}) 
        fetchTasks()
    }

    data = filter(data, values.filter)

    return (
        <>
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
                                    <input checked={(!data.status)? true : false}  onChange={(e)=> onClick(e, {...data, id})}  className="checkbox" type="checkbox" /> 
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