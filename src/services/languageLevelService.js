import axios from "axios";

export default class LanguageLevelService {

    add(values) {
        return axios.post("http://localhost:8080/api/languageLevels/add", values);
    }

    delete(values) {
        return axios.delete("http://localhost:8080/api/languageLevels/delete", values);
    }

}
