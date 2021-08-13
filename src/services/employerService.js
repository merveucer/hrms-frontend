import axios from "axios";

export default class EmployerService {

    getAllByIsActivatedAndIsConfirmed(isActivated, isConfirmed) {
        return axios.get(`http://localhost:8080/api/employers/getAllByIsActivatedAndIsConfirmed?isActivated=${isActivated}&isConfirmed=${isConfirmed}`);
    }    

}