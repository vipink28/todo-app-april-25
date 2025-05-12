import TaskForm from "./TaskForm";

const Popup = ({ task }) => {
    const { type, data } = task;
    return (
        <div className="modal" tabIndex="-1" id="popup">
            <div className="modal-dialog">
                <div className="modal-content bg-primary text-white">
                    <div className="modal-header" data-bs-theme="dark">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            type === "view" ?
                                <div className="p-2">
                                    <h3>{data?.title}</h3>
                                    <p>{data?.description}</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0">Modified On: {data?.modifiedon}</p>
                                        <p className="mb-0">Due Date: {data?.duedate}</p>
                                    </div>
                                </div>
                                : type === "edit" ?
                                    <TaskForm isUpdate={true} data={data} />
                                    :
                                    <div>Delete</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup