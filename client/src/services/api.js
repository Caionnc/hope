import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://localhost:5000",
});

//async function setUserRegistration

export default api;