import React from 'react';
import EditTaskForm from "./EditTaskForm";

const EditTaskPopup = ({task, status, onClose, onUpdate}) => {
    const handleSave = (updatedTask) => {
        onUpdate(updatedTask);
        onClose();
    };

    return (
        <div className="overlay">
            <div className="popup">
                <button className="close" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h2>Edit task</h2>
                <EditTaskForm task={task} status={status} onSave={handleSave} onClose={onClose} />
            </div>
        </div>
    );
};

export default EditTaskPopup;