import { Edit, Eye, Trash } from 'lucide-react';
import { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
import TaskContext from '../context/TaskContext';

const reducer = (state, action) => {
    switch (action.type) {
        case "VIEW": return { type: "view", data: action.payload }
        case "EDIT": return { type: "edit", data: action.payload }
        case "DELETE": return { type: "delete", data: action.payload }
        default: return state;
    }
}

const TaskList = () => {
    const { allTasks } = useContext(TaskContext);
    const [state, dispatch] = useReducer(reducer, { type: null, data: null });
    return (
        <div className='container mt-5 bg-primary p-5'>
            <div className='d-flex align-items-center justify-content-between'>
                <h3 className='text-white'>Task List</h3>
                <Link to="/create-task" className='btn btn-info'>Add Task</Link>
            </div>

            <div className='mt-4'>
                <input type='text' className='form-control' placeholder='search task' />
            </div>

            <div className='mt-4 text-white'>
                <div className='row align-items-center py-3 mb-2 rounded-1 bg-dark'>
                    <div className='col-lg-1'>Sr.No.</div>
                    <div className='col-lg-3'>Title</div>
                    <div className='col-lg-4'>Description</div>
                    <div className='col-lg-2'>Due Date</div>
                    <div className='col-lg-2'>Actions</div>
                </div>
                {
                    allTasks ?
                        allTasks.map((task) => (
                            <div key={task.id} className='row align-items-center py-3 mb-2 rounded-1 bg-dark'>
                                <div className='col-lg-1'>{task.id}</div>
                                <div className='col-lg-3'>{task.title}</div>
                                <div className='col-lg-4'>{task.description}</div>
                                <div className='col-lg-2'>{task.duedate}</div>
                                <div className='col-lg-2'>
                                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#popup" onClick={() => dispatch({ type: "VIEW", payload: task })}>
                                        <Eye size={20} />
                                    </span>
                                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#popup" onClick={() => dispatch({ type: "EDIT", payload: task })}>
                                        <Edit size={20} />
                                    </span>
                                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#popup" onClick={() => dispatch({ type: "DELETE", payload: task })}>
                                        <Trash size={20} />
                                    </span>
                                </div>

                            </div>
                        ))
                        :
                        <p>No Tasks to show</p>
                }
            </div>

            <Popup task={state} />
        </div>
    )
}

export default TaskList