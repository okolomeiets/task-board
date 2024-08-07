import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskPopup from "./AddTaskPopup";
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveTask } from '../features/cardSlice';

const TaskColumn = ({ status, tasks }) => {
    const dispatch = useDispatch();

    const [, drop] = useDrop({
        accept: 'TASK',
        drop: (item) => {
            dispatch(moveTask({ taskId: item.id, newStatus: status }));
        },
    });

    const [isPopupOpen, setPopupOpen] = useState(false);
    const statusClass = status.replace(/\s+/g, '-').toLowerCase();

    return (
        <div ref={drop} className="column">
            <div className={`column-header ${statusClass}`}>
                <h2 className="column-title">{status}</h2>
                <button className="add-task-btn" onClick={() => setPopupOpen(true)}>
                    <span className="material-symbols-outlined">add_circle</span>
                </button>
            </div>
            <div className="column-body">
                {tasks.map(task => <TaskCard key={task.id} task={task} statusClass={statusClass} status={status}/>)}
            </div>
            {isPopupOpen && <AddTaskPopup status={status} statusClass={statusClass} onClose={() => setPopupOpen(false)} />}
        </div>
    );
};

export default TaskColumn;