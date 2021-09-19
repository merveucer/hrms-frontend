import axios from "axios";

export default class JobPostingService {

    add(values) {
        return axios.post("http://localhost:8080/api/jobPostings/add", values)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/jobPostings/getById?id=${id}`);
    }
    
    makeActiveOrPassive(id, isActive) {
        return axios.put(`http://localhost:8080/api/jobPostings/makeActiveOrPassive?id=${id}&isActive=${isActive}`)
    }

    confirm(companyStaffId, isConfirmed, jobPostingConfirmationTypeId, jobPostingId) {
        return axios.put(`http://localhost:8080/api/jobPostings/confirm?companyStaffId=${companyStaffId}&isConfirmed=${isConfirmed}&jobPostingConfirmationTypeId=${jobPostingConfirmationTypeId}&jobPostingId=${jobPostingId}`);
    }

    getAllActiveOnesSortedByPostingDateTop6() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDateTop6");
    }

    getAllActiveOnesByEmployerIdSortedByPostingDate(employerId) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllActiveOnesByEmployerIdSortedByPostingDate?employerId=${employerId}`);
    }

    getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=${cityId}&jobTitleId=${jobTitleId}&workingTimeId=${workingTimeId}&workingTypeId=${workingTypeId}`);
    }

    getAllActiveOnesByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId, pageNo, pageSize) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllActiveOnesByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=${cityId}&jobTitleId=${jobTitleId}&pageNo=${pageNo}&pageSize=${pageSize}&workingTimeId=${workingTimeId}&workingTypeId=${workingTypeId}`);
    }

    getAllOnesThatWaitingForPostingConfirmation() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllOnesThatWaitingForPostingConfirmation");
    }

}
