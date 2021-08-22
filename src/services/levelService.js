import axios from "axios";

export default class LevelService {

    getAll() {
        return axios.get("http://localhost:8080/api/levels/getAll");
    }

}