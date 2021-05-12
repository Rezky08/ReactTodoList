import axios from "axios";

export default axios.create({
  baseURL: "https://todos-project-api.herokuapp.com/",
});
