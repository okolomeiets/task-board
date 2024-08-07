import React from 'react';
import { useState } from 'react';
import EditTaskPopup from "./EditTaskPopup";
import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '../features/cardSlice';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task, status, statusClass }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const handleRemove = () => {
        dispatch(removeTask(task.id));
    };
    const [isPopupOpen, setPopupOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <div ref={drag} className={`card ${statusClass} ${isDragging ? 'dragging' : ''}`}>
            <div className="card-wrapper">
                <div className="card-header">
                    <h3 className="card-title">{task.title}</h3>
                    <div className="card-actions">
                        <button className="add-task-btn" onClick={() => setPopupOpen(true)}>
                            <span className="material-symbols-outlined">edit</span>
                        </button>
                        <span className="material-symbols-outlined" onClick={handleRemove}>delete</span>
                    </div>
                </div>
                <div className="card-body">{task.description}</div>
            </div>
            {isPopupOpen && <EditTaskPopup
                task={task}
                status={status}
                onClose={() => setPopupOpen(false)}
                onUpdate={(updatedTask) => {
                    dispatch(editTask(updatedTask));
                }}
            />}
        </div>
    );
}

export default TaskCard;