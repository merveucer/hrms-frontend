import axios from "axios";

export default class ExperienceService {

    add(values) {
        return axios.post("http://localhost:8080/api/experiences/add", values);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/experiences/delete?id=${id}`);
    }

}
