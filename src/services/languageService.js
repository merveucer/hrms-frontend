import axios from "axios";

export default class LanguageService {

    getAll() {
        return axios.get("http://localhost:8080/api/languages/getAll");
    }

}