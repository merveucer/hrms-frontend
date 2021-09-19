import axios from "axios";

export default class LevelService {

    add(values) {
        return axios.post("http://localhost:8080/api/levels/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/levels/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/levels/getAll");
    }

}