const Rule = {
    /**
     * 不为空
     * 
     * @param {any} value 
     * @returns Boolean
     */
    required: (value) => {
        return (value !== null) && (value !== "");
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
     * @param {any} value 
     * @returns 
     */
    isString: (value) => {
        return (value !== null) && (value !== undefined) && (typeof value === 'string') && (value.constructor === String);
    },
    /**
     * 登录名格式验证 (可以由字母、数字、_等组成，长度在5-16位)
     * 
     * @param {any} value 
     * @returns 
     */
    isLoginName: (value) => {
        return /^[a-zA-Z0-9-_\u4e00-\u9fa5]{6,16}$/.test(value);
    },
    /**
     * 密码格式验证 验证用户密码(正确格式为：长度在6~16 之间，任意字符)
     * 
     * @param {any} value 
     * @returns 
     */
    isPassword: (value) => {
        return /^.{6,16}/.test(value);
    },
    /**
     * 手机号码格式验证
     * 
     * @param {any} value 
     * @returns 
     */
    isMoblie: (value) => {
        return /^1[345678]\d{9}$/.test(value);
    },
    /**
     * 电话号码格式验证
     * 
     * @param {any} value 
     * @returns 
     */
    isPhone: (value) => {
        return /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3578]\d{9}$)/.test(value);
    },
    /**
     * 正整数格式验证
     * 
     * @param {any} value 
     * @returns 
     */
    isNumber: (value) => {
        return /^\d+$/g.test(value);
    },
};


export default Rule;