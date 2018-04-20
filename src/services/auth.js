import Server from '../utils/server';
import '../mock/api';
import qs from 'qs';

class Auth extends Server {
    constructor() {
      super();
    }
    
    async uploadImg(file) {
        let result;
        let formData = new FormData();
		formData.append('file', file);
         
        try {
            result = await this.post('/upload/uploadImg.do',formData);
        } catch (error) {
            throw error;
        }
         return result;
    }

    async getBankAll(text){
        let result;
        let params = {};
        params.key = text;

        try {
            result = await this.post('/bankList',qs.stringify(params));
            console.log(result);
        } catch (error) {
            throw error;
        }
        return result;
    }
}
export default new Auth;