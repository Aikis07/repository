import axios from "axios"

class regUser {
    async postUser(mail, pass, fullname, phone) {
        return axios.post('http://localhost:3000/register', {
            fullName: fullname,
            email: mail,
            password: pass,
            phone: phone,
        })
        .catch(error => {
            return error.response.status
        })
    }
}

export default new regUser()