import axios from "axios";

export default class WorkingTimeService {

    add(values) {
        return axios.post("http://localhost:8080/api/workingTimes/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/workingTimes/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/workingTimes/getAll");
    }

}