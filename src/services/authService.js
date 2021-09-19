import axios from "axios";

export default class AuthService {

    registerCompanyStaff(values, confirmPassword) {
        return axios.post(` http://localhost:8080/api/auth/registerCompanyStaff?confirmPassword=${confirmPassword}`, values)
    }

    registerCandidate(values, confirmPassword) {
        return axios.post(` http://localhost:8080/api/auth/registerCandidate?confirmPassword=${confirmPassword}`, values)
    }

    registerEmployer(values, confirmPassword) {
        return axios.post(` http://localhost:8080/api/auth/registerEmployer?confirmPassword=${confirmPassword}`, values)
    }

}