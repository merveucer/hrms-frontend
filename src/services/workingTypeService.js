import axios from "axios";

export default class WorkingTypeService {

    getAll() {
        return axios.get("http://localhost:8080/api/workingTypes/getAll");
    }

}
