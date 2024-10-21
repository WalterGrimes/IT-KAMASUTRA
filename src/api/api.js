import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c9984965-98ca-41b8-bb84-36ee43794',
    },
});


export const usersAPI = {
    getUsers (page = 1,pageSize = 5)  {
        return instance
            .get(`users?page=${page}&count=${pageSize}`,)
            .then(Response => {
               return  Response.data
            
            });
    }
}

export const headerAPI = {
    getLogin() {
        return fetch('')
            .then(response => response.json())
            .catch(error => console.error('API error:', error));
    }
};

 