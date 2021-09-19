import axios from "axios";

export default class LinkNameService {

    add(values) {
        return axios.post("http://localhost:8080/api/linkNames/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/linkNames/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/linkNames/getAll");
    }

}
