import axios from "axios";

const API_URL = process.env.REACT_APP_FINAL_SEQUENCE_API_URL;
const instance = axios.create({
  baseURL: API_URL
});

instance.defaults.headers.post["Content-Type"] =
  "application/json; charset=utf-8";

class LivingProofAPI {
  static async fetchLivingProofList() {
    const response = await instance.get("/living-proofs");
    //TODO: error 制御
    return response.data;
  }

  static async fetchLivingProofDetail(id) {
    const response = await instance.get(`/living-proofs/${id}`);
    //TODO: error 制御
    return response.data;
  }
}

export default LivingProofAPI;
