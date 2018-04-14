const rule = {
    /**
     * 不为空
     * 
     * @param {any} value 
     * @returns Boolean
     */
    required: (value) => {
        console.log(value);
        return (value != null) && (value != "");
    },
    /**
     * 在最大长度内
     * 
     * @param {any} value 
     * @param {any} length 
     * @returns Boolean
     */
    maxLength: (value, length) => {
        return (value.length <= length);
    },
    /**
     * 是字符串类型
     * 
     * @param {any} object 
     * @returns 
     */
    isString: (object) => {
        return (object != null) && (object != undefined) && (typeof object == 'string') && (object.constructor == String);
    },
    /**
     * 登录名格式验证 (可以由字母、数字、_等组成，长度在5-16位)
     * 
     * @param {any} loginName 
     * @returns 
     */
    isLoginName: (loginName) => {
        return /^[a-zA-Z0-9-_\u4e00-\u9fa5]{6,16}$/.test(loginName);
    },
    /**
     * 密码格式验证 验证用户密码(正确格式为：长度在6~16 之间，任意字符)
     * 
     * @param {any} psw 
     * @returns 
     */
    isPassword: (psw) => {
        return /^.{6,16}/.test(psw);
    },
    /**
     * 手机号码格式验证
     * 
     * @param {any} mobile 
     * @returns 
     */
    isMoblie: (mobile) => {
        return /^1[345678]\d{9}$/.test(mobile);
    },
    /**
     * 电话号码格式验证
     * 
     * @param {any} phone 
     * @returns 
     */
    isPhone: (phone) => {
        return /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3578]\d{9}$)/.test(phone);
    },
    /**
     * 正整数格式验证
     * 
     * @param {any} number 
     * @returns 
     */
    isNumber: (number) => {
        return /^\d+$/g.test(number);
    },
};


export default rule;