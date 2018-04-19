import Server from '../utils/server';
import qs from 'qs';

class Login extends Server {
    constructor() {
        super();
    }

    async getVCode(){
        let result;
        try {
            result = await this.post('/vcode');
        } catch (error) {
            throw error;
        }
        return result;
    }
    
    async getSmsCode(phone,vcode) {
        let result;
        let params = {};
        params.phone = phone;
        params.imgCode = vcode;

        try {
            // qs.stringify 包装post请求参数
            result = await this.post('/sendSmsCode',qs.stringify(params));
        } catch (error) {
            throw error;
        }
        return result;
    }
    
    // 登录
    async login(phone,smsCode){
        let result;
        let params = {};
        params.phone = phone;
        params.smsCode = smsCode;
        console.log(qs.stringify(params));
        try {
            result = await this.post('/login',qs.stringify(params));
        } catch (error) {
            throw error;
        }
        return result;
    }

}

export default new Login;