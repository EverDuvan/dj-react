import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return <div>
      {tasks.map(task => (
        <div key={task.id} className=""
        style={{
          width: "18rem",
          margin: "1rem",
          padding: "1rem",
          borderRadius: "1rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#f8f8f8",
        }}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <p>{task.done ? "Done" : "Not done"}</p>
        </div>
      ))}
    </div>
}
