import axios from "axios";

export default class UserActivationService {

    getByUserId(userId) {
        return axios.get(`http://localhost:8080/api/userActivations/getByUserId?userId=${userId}`);
    }

}