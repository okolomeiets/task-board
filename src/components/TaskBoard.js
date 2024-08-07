import React from 'react';
import TaskColumn from './TaskColumn';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskBoard = () => {
    const tasks = useSelector((state) => state.card);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const STATUSES = ["To Do", "In Progress", "Review", "Completed"];

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tasksByStatus = filteredTasks.reduce((groups, task) => {
        const group = groups[task.status] || [];
        group.push(task);
        groups[task.status] = group;
        return groups;
    }, {});

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="board">
                {STATUSES.map(status =>
                    tasksByStatus[status] && <TaskColumn key={status} status={status} tasks={tasksByStatus[status]} />
                )}
                {filteredTasks.length === 0 && <div>No results</div>}
            </div>
        </DndProvider>
    );
};

export default TaskBoard;