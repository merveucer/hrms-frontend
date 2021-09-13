import axios from "axios";

export default class FavoriteJobPostingService {

    add(values) {
        return axios.post("http://localhost:8080/api/favoriteJobPostings/add", values);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/favoriteJobPostings/delete?id=${id}`);
    }

    getAllByCandidateId(id) {
        return axios.get(`http://localhost:8080/api/favoriteJobPostings/getAllByCandidateId?candidateId=${id}`);
    }

    getAllActiveJobPostingsByCandidateIdSortedByDateOfAddToFavorites(id) {
        return axios.get(`http://localhost:8080/api/favoriteJobPostings/getAllActiveJobPostingsByCandidateIdSortedByDateOfAddToFavorites?candidateId=${id}`);
    }

}
