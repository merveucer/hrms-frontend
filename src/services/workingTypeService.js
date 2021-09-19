import axios from "axios";

export default class WorkingTypeService {

    add(values) {
        return axios.post("http://localhost:8080/api/workingTypes/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/workingTypes/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/workingTypes/getAll");
    }

}
