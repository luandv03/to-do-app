import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Enter text");
      return;
    }

    onAdd({ text, time, reminder });

    setText("");
    setTime("");
    setReminder("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          placeholder="Add Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Add Task" class="btn btn-block" />
    </form>
  );
}

export default AddTask;
