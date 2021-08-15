import axios from "axios";

export default class WorkingTimeService {

    getAll() {
        return axios.get("http://localhost:8080/api/workingTimes/getAll");
    }

}