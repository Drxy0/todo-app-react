export type TaskType = {
    id: string;
    name: string;
    isCompleated: boolean;
  };
  
export const getAllTasks = async (listId: string): Promise<TaskType[]> => {
    const token = localStorage.getItem("token");
  
    const response = await fetch(
      "https://todo-workshop-api.azurewebsites.net/api/lists/" +
        listId +
        "/tasks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token,
        },
      }
    );
  
    if (response.ok) {
      return response.json();
    }
  
    throw new Error("Tasks failed");
};

export const createTask = async (listId: string, taskName: string): Promise<TaskType[]> => {
    const token = localStorage.getItem("token");
  
    const response = await fetch(
      "https://todo-workshop-api.azurewebsites.net/api/lists/" +
        listId +
        "/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
            name: taskName
        })
      }
    );
  
    if (response.ok) {
      return response.json();
    }
  
    throw new Error("Tasks failed");
};

export const deleteTask = async (taskId: string): Promise<void> => {
    const token = localStorage.getItem("token");
  
    const response = await fetch(
      "https://todo-workshop-api.azurewebsites.net/api/tasks/" + taskId,
      {
        method: "DEKETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token,
        },
      }
    );
  
    if (response.ok) {
        return;
    }
  
    throw new Error("Tasks failed");
};