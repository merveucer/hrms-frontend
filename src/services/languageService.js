import axios from "axios";

export default class LanguageService {

    add(values) {
        return axios.post("http://localhost:8080/api/languages/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/languages/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/languages/getAll");
    }

}