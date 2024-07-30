import React from 'react';

const TaskItem = ({task, toggleComplete, deleteTask, setTaskToEdit}) => {
    return (
        <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={task.completed ? 'line-through' : ''}>
                    {task.title}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => toggleComplete(task.id)} className="text-green-500 hover:text-green-700">
                    {task.completed ? 'Uncomplete' : 'Complete'}
                </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => setTaskToEdit(task)} className="text-blue-500 hover:text-blue-700">
                    Edit
                </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TaskItem;
