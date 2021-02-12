import React from 'react';
import { fetchAddTask } from '../../firebase/fetch';
import useComponents from '../../hooks/useComponents'
import UseAut from '../../hooks/useAut'
import UseTasks from '../../hooks/useTasks'
import {Text} from '../../components'

const STATE_INICIAL = {
    task: '',
}

const AddTask = (props) => {
    const {userId} =  UseAut()
    const {fetchTasks} = UseTasks({userId, order:'desc'})
    const { values, handleChange } = useComponents(STATE_INICIAL);
    
    const { task } = values;
    async function onClick (e) {
        e.preventDefault();
        let rest = await fetchAddTask({userId,task, status: true })
        if(rest.error) console.log('no se puedo agregar la tarea', rest.error)
        fetchTasks()
    }
    return (
        <div className="row">
                <div className="input-row ">
                    <div className="eleven columns">
                        <Text placeholder="Ingresa una nueva tarea"  handleChange= {handleChange} name="task" noFormItem={true} />
                    </div>
                    <div className="one columns">
                        <button onClick={onClick} className="button-primary"><i className="fas fa-plus"></i></button>
                    </div>    
                </div>
        </div>
    );
};

export default AddTask;