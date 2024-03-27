export function TaskCard({ Task }) {
  return (
    <div
      className=""
      style={{
        width: "18rem",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>{Task.title}</h1>
      <p>{Task.description}</p>
      <p>{Task.datecompleted ? "Done" : "Not done"}</p>
    </div>
  );
}
