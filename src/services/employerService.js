import axios from "axios";

export default class EmployerService {

    update(values) {
        return axios.put("http://localhost:8080/api/employers/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }

    getAllByIsConfirmedAndUserConfirmationTypeId(isConfirmed, userConfirmationTypeId) {
        return axios.get(`http://localhost:8080/api/employers/getAllByIsConfirmedAndUserConfirmationTypeId?isConfirmed=${isConfirmed}&userConfirmationTypeId=${userConfirmationTypeId}`);
    }

}