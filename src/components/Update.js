import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update({ onUpdate }) {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const data = {
    id: 1,
    text: "Techainer Bootcamp 2022",
    time: "20/07/2022 19:30",
    reminder: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = data.id;

    onUpdate({ id, text, time, reminder });

    setText("");
    setTime("");
    setReminder("");
    navigate("/");
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          placeholder="Add Task"
          value={text || data.text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          placeholder="Add Time"
          value={time || data.time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder || data.reminder}
          value={reminder || data.reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input
        type="submit"
        value="Update"
        class="btn btn-block"
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
}

export default Update;
