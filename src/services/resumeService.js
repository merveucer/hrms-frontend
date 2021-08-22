import axios from "axios";

export default class ResumeService {

    update(values) {
        return axios.put("http://localhost:8080/api/resumes/update", values);
    }
    
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumes/getById?id=${id}`);
    }

    addCoverLetterToResume(resumeId, coverLetterId) {
        return axios.post(`http://localhost:8080/api/resumes/addCoverLetterToResume?coverLetterId=${coverLetterId}&resumeId=${resumeId}`);
    }    

    deleteCoverLetterFromResume(resumeId) {
        return axios.delete(`http://localhost:8080/api/resumes/deleteCoverLetterFromResume?resumeId=${resumeId}`);
    }    

    getAllResumesDetailsByActivatedCandidate() {
        return axios.get("http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate");
    }

    getByCandidateId(candidateId) {
        return axios.get(`http://localhost:8080/api/resumes/getByCandidateId?candidateId=${candidateId}`);
    }  
    
}