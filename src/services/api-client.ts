import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17ce9a055d184887a949038505b98b9f",
  },
});
