import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../auth/AuthContext'
import Login from '../auth/Login'
import ProtectedRoute from '../auth/ProtectedRoute'
import Register from '../auth/Register'
import Navbar from '../components/Navbar'
import { TaskProvider } from '../context/TaskContext'
import About from '../pages/About'
import CreateTask from '../pages/CreateTask'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import TaskList from '../pages/TaskList'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <TaskProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Navigate to="/login" />}></Route>
                        <Route path='/' element={<Home />}>
                            <Route path='login' element={<Login />}></Route>
                            <Route path='register' element={<Register />}></Route>
                        </Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
                        <Route path='/create-task' element={<ProtectedRoute><CreateTask /></ProtectedRoute>}></Route>
                        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
                    </Routes>
                </TaskProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter