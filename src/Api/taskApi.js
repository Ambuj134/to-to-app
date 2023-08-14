// A mock function to mimic making an async request for data
export function createTask(taskDetails) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/tasks', {
      method: 'POST',
      body: JSON.stringify(taskDetails),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async request for data
export function fetchAllTasks() {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/tasks`);
    const data = await response.json();

    resolve({ data });
  });
}

export function deleteTaskFormList(taskId) {
  console.log('taskIdaaaaaaa', taskId);
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data: { id: taskId } });
  });
}

export function updateTaskStatus(updatedTask) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/tasks/${updatedTask.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(updatedTask),
        headers: { 'content-type': 'application/json' },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
