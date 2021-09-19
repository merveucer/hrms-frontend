import axios from "axios";

export default class CompanyStaffService {

    update(values) {
        return axios.put("http://localhost:8080/api/companyStaffs/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/companyStaffs/getById?id=${id}`);
    }

}