import apiClient from "./axios.js";

const request = {
    getVacancies: () => {
        return apiClient.get('/vacancies')
    },
    getFilters: () => {
        return apiClient.get('/filters');
    },
    getSorts: () => {
      return apiClient.get('/sorts');
    },
    getStudentVacations: () => {
        return apiClient.get('/profile/student/vacancies');
    },
    getEmployerVacations: () => {
        return apiClient.get('/profile/employer/vacancies');
    },
    getProfileEmployer: () => {
        return apiClient.get('/profile/employer');
    },
    getProfileStudent: () => {
        return apiClient.get('/profile/student');
    },
    getAdminVacation: () => {
        return apiClient.get('/admin/vacancies');
    },
    getAdminProfiles: () => {
        return apiClient.get('/admin/profiles');
    }

}
export default request;