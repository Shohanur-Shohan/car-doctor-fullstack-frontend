import axios from "axios";

//get all services
export const allServices = async () => {
  const res = await axios.get(`${import.meta.env.VITE_URL}/services`);
  const result = res?.data;
  return result;
};

//get single service
export const singleService = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_URL}/service-details/${id}`
  );
  const result = res?.data;
  return result;
};

//book a service
export const bookAService = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_URL}/booked`, data);
  const result = res?.data;
  return result;
};

//user specific service
export const usersServiceOrders = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_URL}/booking/${email}`);
  const result = res?.data;
  return result;
};

//delete service
export const deleteService = async (id) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_URL}/delete-booked/${id}`
  );
  const result = res?.data;
  return result;
};
