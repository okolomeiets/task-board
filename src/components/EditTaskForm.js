import React, { useState } from 'react';

const EditTaskForm = ({task, onClose, onSave}) => {
    const [editedTask, setEditedTask] = useState({
        title: task.title,
        description: task.description,
        status: task.status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({...editedTask, id: task.id});
        onClose();

    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="task-title" className="form-label">
                    Title
                </label>
                <input
                    className="input-text"
                    type="text"
                    id="task-title"
                    name="title"
                    value={editedTask.title}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="task-description" className="form-label">
                    Description
                </label>
                <textarea
                    className="input-textarea"
                    id="task-description"
                    name="description"
                    value={editedTask.description}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn-submit">Apply Changes</button>
        </form>
    );
};

export default EditTaskForm;