import axios from "axios";

export default class UpdatedEmployerService {

    getAll() {
        return axios.get(`http://localhost:8080/api/updatedEmployers/getAll`);
    }

}