import axios from "axios";

export default class CityService {

    add(values) {
        return axios.post("http://localhost:8080/api/cities/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/cities/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/cities/getAll");
    }

}