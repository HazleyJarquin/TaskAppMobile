import { useQuery } from "react-query";
import axios from "axios";
import { API_USERS_BASE_URL } from "../shared/api.config";

const getAllUsers = async () => {
  const response = await axios.get(`${API_USERS_BASE_URL}/elements`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const useGetAllUsers = () => {
  return useQuery(["getAllUsers"], {
    async queryFn() {
      return getAllUsers();
    },
  });
};
