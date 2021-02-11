import React from 'react';
import UseTasks from '../../hooks/useTasks'

const task = () => {
    const { useTasks } = UseTasks('desc')
    console.log(useTasks)

    return (
        <div className="row">
                    
        </div>
    );
};

export default task;