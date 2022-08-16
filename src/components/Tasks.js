import Task from "./Task";

function Tasks({ tasks, onDelete, onTonggle, onEdit }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onTonggle={onTonggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default Tasks;
