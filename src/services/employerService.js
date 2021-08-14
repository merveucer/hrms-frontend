import axios from "axios";

export default class EmployerService {

    getById(id) {
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }

    getAllByIsActivatedAndIsConfirmed(isActivated, isConfirmed) {
        return axios.get(`http://localhost:8080/api/employers/getAllByIsActivatedAndIsConfirmed?isActivated=${isActivated}&isConfirmed=${isConfirmed}`);
    }

}