import axios from "axios";

export default class LinkService {

    add(values) {
        return axios.post("http://localhost:8080/api/links/add", values);
    }

    delete(values) {
        return axios.delete("http://localhost:8080/api/links/delete", values);
    }

}
