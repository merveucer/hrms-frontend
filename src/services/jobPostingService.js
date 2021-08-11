import axios from "axios";

export default class JobPostingService {

    getAllActiveOnesSortedByPostingDate() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDate");
    }

    getAllActiveOnesSortedByPostingDateTop6() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDateTop6");
    }

}
