import axios from "axios";

export default class EducationService {

    add(values) {
        return axios.post("http://localhost:8080/api/educations/add", values);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/educations/delete?id=${id}`);
    }

}
