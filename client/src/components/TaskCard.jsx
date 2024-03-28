import { useNavigate } from "react-router-dom";

export function TaskCard({ Task }) {
  const navigate = useNavigate();

  return (
    <div
      className=""
      style={{
        display: "flex",
        alignItems: "center",
        width: "18rem",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "grey",
      }}
      onClick={() => navigate(`/tasks/${Task.id}`)}
    >
      <h1>{Task.title}</h1>
      <p>{Task.description}</p>
    </div>
  );
}
