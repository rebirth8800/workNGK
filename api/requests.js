import apiClient from "./axios.js";

const request = {
    getVacancies: () => {
        return apiClient.get('/vacancies')
    },
    getRefines: () => {
        return apiClient.get('/refines');
    },
    getStudentVacations: () => {
        return apiClient.get('/profile_student_vacation');
    },
    getEmployerVacations: () => {
        return apiClient.get('/profile_employer_vacation');
    },
    getProfileEmployer: () => {
        return apiClient.get('/profile_employer');
    },
    getProfileStudent: () => {
        return apiClient.get('/profile_student');
    },
    getAdminVacation: () => {
        return apiClient.get('/admin_vacations');
    },
    getAdminProfiles: () => {
        return apiClient.get('/admin_profiles');
    }

}
export default request;