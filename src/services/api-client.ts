import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4398ab261fc4ae3aadb862fa9e1c965",
  },
});
