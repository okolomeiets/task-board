import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

const cardSlice = createSlice({
    name: 'tasks',
    initialState: data.tasks,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        moveTask: (state, action) => {
            const { taskId, newStatus } = action.payload;
            const taskIndex = state.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state[taskIndex].status = newStatus;
            }
        }

    },
});

export const { addTask, editTask, removeTask, moveTask } = cardSlice.actions;

export default cardSlice.reducer;