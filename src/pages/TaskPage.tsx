import { useParams } from "react-router-dom";
import { Sidepanel } from "../components/Sidepanel";
import { useEffect, useState } from "react";
import { createTask, getAllTasks, TaskType } from "../services/taskService";
import { deleteTask } from "../services/taskService";

export const TaskPages = () => {
  let { listId } = useParams();
  console.log(listId);

  const [tasks, setTask] = useState<TaskType[]>([]);

  useEffect(() => {
    if (listId === undefined) return;

    getAllTasks(listId).then((result) => setTask(result));
  }, [listId]);

  const completedTasks = tasks.filter((task) => task.isCompleated);
  const inCompletedTasks = tasks.filter((task) => !task.isCompleated);

  const [newTaskName, setNewTaskName] = useState('');
  const createNewTask = () => {
    if (listId === undefined) return;
    createTask(listId, newTaskName).then((result) => {
      if (listId === undefined) return;
      getAllTasks(listId).then((result) => setTask(result));
    });
  };

  const deleteTaskBtn = async (taskId: string) => {
    await deleteTask(taskId);

    if (listId === undefined) return;
    const allTasksFromBackend = await getAllTasks(listId);
    setTask(allTasksFromBackend);
  }

  return (
    <div className="container">
      <Sidepanel />

      <main className="main-content">
        <div className="header">
          <button className="logout-btn">Logout</button>
        </div>

        <section className="incomplete-tasks">
          <h2>Incomplete Tasks</h2>
          <ul>
            {inCompletedTasks.map((task) => (
              <li>
                <span className="task-name">{task.name}</span>
                <span className="task-icons">
                  <button className="complete-btn">&#x2713;</button>
                  <button className="delete-btn">&#x1F5D1;</button>
                </span>
              </li>
            ))}
          </ul>
          <div className="add-task">
            <input value = {newTaskName}
              onChange={event => setNewTaskName(event.target.value)} 
              type="text" placeholder="New task" />
            <button onClick={createNewTask}>Add Task</button>
          </div>
        </section>

        <section className="completed-tasks">
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <li>
                <span className="task-name completed">{task.name}</span>
                <span className="task-icons">
                  <button className="complete-btn">&#x21A9;</button>
                  <button onClick={ () => deleteTaskBtn(task.id)} className="delete-btn">&#x1F5D1;</button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};