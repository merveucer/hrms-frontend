import axios from "axios";

export default class JobPostingService {

    add(values) {
        return axios.post("http://localhost:8080/api/jobPostings/add", values)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/jobPostings/getById?id=${id}`);
    }

    getAllActiveOnesSortedByPostingDate() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDate");
    }

    getAllActiveOnesSortedByPostingDateTop6() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDateTop6");
    }

    getAllActiveOnesByEmployerId(employerId) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllActiveOnesByEmployerId?employerId=${employerId}`);
    }

}
