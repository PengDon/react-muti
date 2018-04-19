import Server from '../utils/server';

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

    async queryUser() {
        let result;
        try {
            result = await this.get('/user');
        } catch (error) {
            throw error;
        }
        return result;
    }
}
export default new Auth;