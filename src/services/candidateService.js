import axios from "axios";

export default class EmployerService {

    update(values) {
        return axios.put("http://localhost:8080/api/candidates/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/candidates/getById?id=${id}`);
    }

}