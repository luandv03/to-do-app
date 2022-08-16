import { Link } from "react-router-dom";

function Task({ task, onDelete, onTonggle, onEdit }) {
  return (
    <div className={task.reminder ? "task reminder" : "task"}>
      <h3>{task.text}</h3>
      <p>{task.time}</p>
      <div className="actions">
        <button className="btn-action" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <button className="btn-action" onClick={() => onTonggle(task.id)}>
          Reminder
        </button>
        <button className="btn-action" onClick={() => onEdit(task.id)}>
          <Link to="/edit">Edit</Link>
        </button>
      </div>
    </div>
  );
}

export default Task;
