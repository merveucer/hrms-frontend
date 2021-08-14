import axios from "axios";

export default class ResumeService {

    getAllResumesDetailsByActivatedCandidate() {
        return axios.get("http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate");
    }

}