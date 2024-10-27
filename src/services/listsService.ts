export type ListType = {
  id: string;
  name: string;
  numberOfActiveTasks: number;
};

export const getAllLists = async (): Promise<ListType[]> => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://todo-workshop-api.azurewebsites.net/api/lists",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error("Login failed");
};
