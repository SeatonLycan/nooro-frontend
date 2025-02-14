import type { Task, NewTask} from '../../../types/task';

const API_URL = 'http://localhost:3001/api/tasks';

export const getTasks = async () => {
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const createTask = async (taskData: NewTask) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    return response.json();
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

export const updateTask = async (taskId: number, updatedTask: Task) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    return response.json();
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, { method: 'DELETE' });

    return response;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};