import React, { useState, useEffect } from 'react';
import {fetchTaskList} from '../firebase/fetch'

const useTaskList = orden => {

    const [useTasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            let data = await fetchTaskList(orden)
            setTasks(data)
        }
        fetchTasks();
    }, []);
    return {
        useTasks
    }
}

export default useTaskList;