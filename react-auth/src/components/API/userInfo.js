import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

async function getAllUser() {
  try {
    const response = await axios.get("/user-info/all");
    return response;
  } catch (error) {
    return error;
  }
}


export default getAllUser;
