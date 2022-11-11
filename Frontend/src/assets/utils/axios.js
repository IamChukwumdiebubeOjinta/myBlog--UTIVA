import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/"
axios.defaults.headers.authorization = localStorage.getItem("token")


export default axios;