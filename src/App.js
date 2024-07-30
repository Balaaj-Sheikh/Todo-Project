import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import axios from 'axios';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTasks(result.data);
        };

        const localTasks = JSON.parse(localStorage.getItem('tasks'));
        if (localTasks) {
            setTasks(localTasks);
        } else {
            fetchTasks();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        const newTask = { id: Date.now(), title, completed: false };
        setTasks([newTask, ...tasks]);
    };

    const editTask = (id, title) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, title } : task)));
        setTaskToEdit(null);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const filteredTasks = tasks.filter(task => !task.completed);

    return (
        <Router>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
                <nav className="mb-4">
                    <Link to="/" className="nav-button">All Tasks</Link>
                    <Link to="/completed" className="nav-button">Completed Tasks</Link>
                </nav>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
                            <TaskList
                                tasks={filteredTasks}
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}
                                setTaskToEdit={setTaskToEdit}
                            />
                        </>
                    } />
                    <Route path="/completed" element={
                        <CompletedTasks
                            tasks={tasks.filter(task => task.completed)}
                            toggleComplete={toggleComplete}
                            deleteTask={deleteTask}
                        />
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
