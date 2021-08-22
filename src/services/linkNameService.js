import axios from "axios";

export default class LinkNameService {

    getAll() {
        return axios.get("http://localhost:8080/api/linkNames/getAll");
    }

}
