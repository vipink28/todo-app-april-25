import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);

    //addTask
    const addTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        try {
            const response = await fetch(`http://localhost:5001/tasks`, config);
            alert("Task added successfully")

        } catch (error) {
            console.log(error)
        }
    }

    //get all tasks

    const getAllTasks = async (id) => {
        try {
            const response = await fetch(`http://localhost:5001/tasks?userid=${id}`, { method: "GET" })
            const tasks = await response.json();
            setAllTasks(tasks);
            setRecentTasks(tasks.slice(-3))
            setLatestTask(tasks[tasks.length - 1])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            getAllTasks(user.id)
        }
    }, [user])

    return (
        <TaskContext.Provider value={{
            addTask,
            allTasks,
            recentTasks,
            latestTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;