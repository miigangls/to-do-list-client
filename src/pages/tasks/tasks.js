import React from 'react';
import UseTasks from '../../hooks/useTasks'
import UseAut from '../../hooks/useAut'

const task = () => {
    const {userId} =  UseAut()
    const { useTasks } = UseTasks({userId, order:'desc'})
    let {data} = useTasks
       
    async function onClick (e, data) {
        e.preventDefault();
            console.log('tarea compledad',data)
    }
    return (
        <div className="row">
            <div className="list-wrapper">
                <ul>
                    {
                        data.map(({data, id})=> {
                            return <li key={id}>
                                <div className="form-check"> 
                                    <label  className="form-check-label"> 
                                    <input  onChange={(e)=> onClick(e, data)}  className="checkbox" type="checkbox" /> 
                                    {data.task} 
                                    <i className="input-helper" ></i>
                                    </label> 
                                </div> 
                            </li>
                        })
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default task;