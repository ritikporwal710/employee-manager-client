import axiosInstance from "./Interceptor";

export const getEmployees = async () => {
  const response = await axiosInstance.get("/all-users");
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axiosInstance.post("/user", employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  console.log("id aa raha h ", id);
  const response = await axiosInstance.delete(`/delete-user/${id}`);
  return response.data;
};
