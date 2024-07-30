import React, {useState, useEffect} from 'react';

const TaskForm = ({addTask, editTask, taskToEdit}) => {
    const [task, setTask] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit.title);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            if (taskToEdit) {
                editTask(taskToEdit.id, task);
            } else {
                addTask(task);
            }
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                className="flex-1 px-3 py-2 border rounded mr-2"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                {taskToEdit ? 'Edit Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;
