import Server from '../utils/server';

class User extends Server {
    constructor() {
      super();
    }
    
    async queryUserByName(name) {
         let result;
         try {
            result = await this.post('/user/'+name);
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
export default new User;