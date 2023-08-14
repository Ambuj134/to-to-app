import React from 'react';
import './Task.css';
import { MdCancel, MdDoneAll } from 'react-icons/md';
import {
  updateTaskStatus,
  fetchAllTasks,
  deleteTaskFormList,
} from '../../Api/taskApi';

const Task = ({ task, tasks, setTasks, index, dark }) => {
  const handleComplete = (e, taskId) => {
    e.preventDefault();
    const selectedTask = tasks.find((task) => task.id === taskId);
    selectedTask.completed = true;
    const response = updateTaskStatus(selectedTask);
    response.then((newTasks) => {
      let response = fetchAllTasks();
      response.then((myTodo) => {
        if (myTodo?.data.length !== 0) {
          setTasks(myTodo?.data);
        }
      });

      // newTasks[index].completed = !newTasks[index].completed;
      // setTasks(newTasks);
    });
  };

  //   const saveToLocal = (name, data) => {
  //     localStorage.setItem(name, JSON.stringify(data));
  //   };
  const handleRemove = (e, taskId) => {
    e.preventDefault();
    console.log('taskId', taskId);
    if (!!taskId) {
      const response = deleteTaskFormList(taskId);
      response.then((newTasks) => {
        let response = fetchAllTasks();
        response.then((myTodo) => {
          if (myTodo?.data.length !== 0) {
            setTasks(myTodo?.data);
          } else {
            setTasks([]);
          }
        });
      });
    }
  };

  return (
    <div
      className={`${
        dark ? 'darkMode-task-container' : 'lightMode-task-container'
      } box-task-container`}>
      <div
        className={`${
          dark ? 'darkMode-box-task' : 'lightMode-box-task'
        } box-task`}>
        <div
          className={`${
            dark ? 'darkMode-task-title' : 'lightMode-task-title'
          } box-task-title`}
          style={{ textDecoration: task.completed ? 'line-through' : '' }}>
          {task.title}
        </div>
        <div
          className={`${
            dark ? 'darkMode-task-description' : 'lightMode-task-description'
          } box-task-description`}
          style={{ textDecoration: task.completed ? 'line-through' : '' }}>
          {task.description}
        </div>
      </div>
      <div className={`${dark ? 'darkMode' : 'lightMode'} box-task-action`}>
        <button
          className={`${
            dark ? 'darkMode-task-completed' : 'lightMode-task-completed'
          } box-task-completed ${
            dark ? 'darkMode-task-btn' : 'lightMode-task-btn'
          } box-task-btn`}
          onClick={(e) => handleComplete(e, task.id)}>
          <MdDoneAll size={20} />
        </button>
        <button
          className={`${
            dark ? 'darkMode-task-remove' : 'lightMode-task-remove'
          } box-task-remove ${
            dark ? 'darkMode-task-btn' : 'lightMode-task-btn'
          } box-task-btn`}
          onClick={(e) => handleRemove(e, task.id)}>
          <MdCancel size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
