    import axios from "axios";

    const api = "http://localhost:5555"
    // const api = "https://66e526db5cc7f9b6273c6ab5.mockapi.io"

    const getProject = () => axios.get(`${api}/projects/all`)
    const addProject = (projectData) => axios.post(`${api}/projects/add`, projectData)
    const editProject = (id, projectData) => axios.put(`${api}/projects/edit/${id}`, projectData)
    const deleteProject = (id) => axios.delete(`${api}/projects/projects/${id}`)


    export { getProject, addProject, editProject, deleteProject } 