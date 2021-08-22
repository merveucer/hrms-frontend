import axios from "axios";

export default class SkillService {

    add(values) {
        return axios.post("http://localhost:8080/api/skills/add", values);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/skills/delete?id=${id}`);
    }

}
