import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5005/api"
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = err => {
  throw err;
};

const uploadImage = (file) => {
  return service
    .post("projects/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
  service,
  uploadImage
};