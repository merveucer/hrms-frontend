import axios from "axios";

export default class EmployerService {

    update(values) {
        return axios.put("http://localhost:8080/api/employers/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }

    confirm(companyStaffId, employerId, isConfirmed, userConfirmationTypeId) {
        return axios.put(`http://localhost:8080/api/employers/confirm?companyStaffId=${companyStaffId}&employerId=${employerId}&isConfirmed=${isConfirmed}&userConfirmationTypeId=${userConfirmationTypeId}`);
    }

    getAllByIsConfirmedAndUserConfirmationTypeIdSortedByCompanyName(isConfirmed, userConfirmationTypeId) {
        return axios.get(`http://localhost:8080/api/employers/getAllByIsConfirmedAndUserConfirmationTypeIdSortedByCompanyName?isConfirmed=${isConfirmed}&userConfirmationTypeId=${userConfirmationTypeId}`);
    }

    getAllOnesThatWaitingForAccountConfirmation() {
        return axios.get("http://localhost:8080/api/employers/getAllOnesThatWaitingForAccountConfirmation")
    }

    getAllOnesThatWaitingForUpdateConfirmation() {
        return axios.get("http://localhost:8080/api/employers/getAllOnesThatWaitingForUpdateConfirmation")
    }

    getOneThatWaitingForUpdateConfirmationById(id) {
        return axios.get(`http://localhost:8080/api/employers/getOneThatWaitingForUpdateConfirmationById?id=${id}`);
    }

}