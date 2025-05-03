import React, { useContext, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value,
                userid: user.id,
                modifiedon: Date()
            }
        ))
    }

    const handleSubmit = () => {
        addTask(formData)
    }

    return (
        <>
            <h3 className='text-white'>Create Task</h3>
            <div className='mt-3 card'>
                <div className='card-body'>

                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input type='text' name='title' className='form-control' onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <textarea className='form-control' name='description' rows={6} onChange={handleChange} ></textarea>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Due Date</label>
                        <input type='datetime-local' className='form-control' name='duedate' onChange={handleChange} />
                    </div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Add Task</button>
                </div>
            </div>
        </>
    )
}

export default TaskForm