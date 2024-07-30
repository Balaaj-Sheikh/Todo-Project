import React from 'react';
import TaskItem from './TaskItem';

const CompletedTasks = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="px-6 py-4 border-b-2 border-gray-300">Task</th>
                    <th className="px-6 py-4 border-b-2 border-gray-300">Status</th>
                    <th className="px-6 py-4 border-b-2 border-gray-300">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedTasks;
