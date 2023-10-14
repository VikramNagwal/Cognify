import React, { useState } from 'react';
import './checklist.css';

const Checklist = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleTask = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  return (
    <div className="checklist">
      <h2>Task Checklist</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={completedTasks.includes(task.id) ? 'completed' : ''}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
