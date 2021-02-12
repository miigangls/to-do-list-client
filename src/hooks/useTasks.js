import React, { useState, useEffect } from 'react';
import {fetchTaskList} from '../firebase/fetch'

const useTaskList = (props) => {
    const [useTasks, setTasks] = useState({message:'',data: []});
    useEffect(() => {
        const fetchTasks = async () => {
            let data = await fetchTaskList(props)
            setTasks(data)
        }
        fetchTasks();
    }, []);
    return {
        useTasks
    }
}

export default useTaskList;