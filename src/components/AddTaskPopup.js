import React from 'react';
import AddTaskForm from "./AddTaskForm";

const AddTaskPopup = ({status, statusClass, onClose}) => {

    return (
        <div className="overlay">
            <div className="popup">
                <button className="close" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h2>New task</h2>
                <AddTaskForm status={status} statusClass={statusClass} onClose={onClose}/>
            </div>
        </div>
    );
};

export default AddTaskPopup;