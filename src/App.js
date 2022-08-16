import "./App.css";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Update from "./components/Update";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [listTasks, setListTasks] = useState([
    {
      id: 1,
      text: "Techainer Bootcamp 2022",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Traing yolov5 2d detection model",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Code React",
      time: "20/07/2022 19:30",
      reminder: false,
    },
    {
      id: 4,
      text: "React App",
      time: "20/07/2022 19:30",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 4;
    const newTask = { id, ...task };
    setListTasks([...listTasks, newTask]);
  };

  const deleteTask = (id) => {
    const newListTasks = listTasks.filter((task) => task.id !== id);
    setListTasks(newListTasks);
  };

  const tonggleReminder = (id) => {
    const newListTasks = listTasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setListTasks(newListTasks);
  };

  //Get task to Edit
  const onEdit = (id) => {
    let dataU = listTasks.filter((task) => task.id === id);
  };

  const updateTask = (newData) => {
    const newListTasks = listTasks.map((task) =>
      newData.id === task.id ? newData : task
    );
    console.log(newListTasks);
    setListTasks(newListTasks);
  };

  return (
    <div className="container">
      <Header title="Techainer Bootcamp" year="2022" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTask onAdd={addTask} />
              <Tasks
                tasks={listTasks}
                onDelete={deleteTask}
                onTonggle={tonggleReminder}
                onEdit={onEdit}
              />
              <Link to="/about">About page</Link>
            </>
          }
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/edit" element={<Update onUpdate={updateTask} />} />
      </Routes>
    </div>
  );
}

export default App;
