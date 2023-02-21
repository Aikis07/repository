import axios from "axios"

class loginUser {
    async authUser(mail, password) {
        return axios.post('http://localhost:3000/login', {
            email: mail,
            password: password,
        })
            .catch(error => {
                return error.response.status
            })
    }
}

export default new loginUser()