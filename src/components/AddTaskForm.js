import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/cardSlice';

const AddTaskForm = ({ status, statusClass, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.random().toString(36).substr(2, 9);
        dispatch(addTask({ id, title, description, status }));
        setTitle('');
        setDescription('');
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className={`add-${statusClass}`}>
            <div className="form-group">
                <label htmlFor="task-title" className="form-label">
                    Title
                </label>
                <input
                    className="input-text"
                    type="text"
                    id="task-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="task-description" className="form-label">
                    Description
                </label>
                <textarea
                    className="input-textarea"
                    id="task-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
            </div>

            <button type="submit" className="btn-submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;