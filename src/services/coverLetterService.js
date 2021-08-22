import axios from "axios";

export default class CoverLetterService {

    add(values) {
        return axios.post("http://localhost:8080/api/coverLetters/add", values);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/coverLetters/delete?id=${id}`);
    }

    getAllByCandidateId(candidateId) {
        return axios.get(`http://localhost:8080/api/coverLetters/getAllByCandidateId?candidateId=${candidateId}`);
    }    

}
