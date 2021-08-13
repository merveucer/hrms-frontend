import axios from "axios";

 export default class CandidateService {

    getAllResumesDetailsByActivatedCandidate() {
        return axios.get("http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate");
    }

}