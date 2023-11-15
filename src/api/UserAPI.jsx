import axios from "axios";

class UserAPI {
    constructor() {
        this.baseUrl = "https://localhost:7199";
    }
    async loginUser(credentials) {
        try {
            const url = `${this.baseUrl}/login`;
            const response = await axios.post(url, {
                email: credentials.email,
                password: credentials.password
            });

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getUsers() {
        try {
            const url = `${this.baseUrl}/api/users`;
            const response = await axios.get(url);

            return response.data
        } catch (err) {
            console.log(err);
        }
    }

    async getUser(id) {
        try {
            const url = `${this.baseUrl}/api/users/${id}`;
            const response = await axios.get(url);

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

    async addUser(credentials) {
        try {
            const url = `${this.baseUrl}/api/users`;
            const response = await axios.post(url, {
                email: credentials.email,
                password: credentials.password
            });

            return response;
        } catch(err) {
            console.log(err);
        }
    }

    async deleteUser(id) {
        try {
            const url = `${this.baseUrl}/api/users/${id}`;
            const response = await axios.delete(url);

            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async updateUser(credentials) {
        try {
            const url = `${this.baseUrl}/api/users/${credentials.id}`;
            const response = await axios.put(url, {
                id: credentials.id,
                email: credentials.email,
                password: credentials.password
            })

            return response
        } catch (err) {
            console.log(err);
        }
    }
}



export default UserAPI
