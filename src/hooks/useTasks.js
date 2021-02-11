import React, { useState, useEffect, useContext } from 'react';
import {fetchTaskList} from '../firebase/fetch'
import { FirebaseContext, db } from '.././firebase';

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