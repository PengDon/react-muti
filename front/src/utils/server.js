import axios from 'axios';

class Server {

    axios(method, url, params) {
        return axios({
            method: method,
            url: url,
            data: params
        });
    }

    get(url, params) {
        return axios.get(url, { params: params })
            .then(res => {
                return typeof res.data === "object" ? res.data : JSON.parse(res.data);
            })
            .catch(error => {
                return error;
            });
    }

    post(url, params) {
        return axios.post(url, params)
            .then(res => {
                return typeof res.data === "object" ? res.data : JSON.parse(res.data);
            })
            .catch(error => {
                return error;
            });

    }
}
export default Server;