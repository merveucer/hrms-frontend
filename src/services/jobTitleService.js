import axios from "axios";

export default class JobTitleService {

    add(values) {
        return axios.post("http://localhost:8080/api/jobTitles/add", values);
    }

    update(values) {
        return axios.put("http://localhost:8080/api/jobTitles/update", values);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/jobTitles/getAll");
    }

}