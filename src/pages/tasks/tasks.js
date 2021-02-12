import React from 'react';
import UseTasks from '../../hooks/useTasks'
import UseAut from '../../hooks/useAut'

const task = () => {
    const {userId} =  UseAut()
    const { useTasks } = UseTasks({userId, order:'desc'})

    return (
        <div className="row">
                    
        </div>
    );
};

export default task;