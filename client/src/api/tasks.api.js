import axios from 'axios';

const taskApi = axios.create(
    {
        baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/"
    }
)

export const getAllTasks = () => {
    return taskApi.get("/");
}

export const createTask = (task) => {
    return taskApi.post("/", task);
}

export const updateTask = (id, task) => {
    return taskApi.put(`/${id}/`, task);
}

export const deleteTask = (id) => {
    return taskApi.delete(`/${id}/`);
}

export const getTask = (id) => {
    return taskApi.get(`/${id}/`);
}