import axiosInstance from "./Interceptor";

export const getEmployees = async () => {
  const response = await axiosInstance.get("/api/all-users");
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axiosInstance.post("/api/user", employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axiosInstance.delete(`/api/user/${id}`);
  return response.data;
};
