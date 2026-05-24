import axios from "axios";

const API = "http://localhost:8080/api/appointments";

export default getAppointments = async () => {
  const response = await axios.get(API);
  return response.data;
};

export default createAppointment = async (data) => {
  const response = await axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};


export default deleteAppointment = async (id) => {
  const response = await axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

export default completeAppointment = async (id) => {
  const response = await axios.put(
    `${API}/${id}/complete`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
};

export default cancelAppointment = async (id) => {
  const response = await axios.put(
    `${API}/${id}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
};