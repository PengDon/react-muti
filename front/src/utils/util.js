
const class2type = {};
const toString = class2type.toString;
const hasOwn = class2type.hasOwnProperty;

class Util {

    type = (obj) =>{
        if(obj == null){
            return `${obj} `;
        }
        return typeof obj === 'object' || obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
    }

    /**
     * 判断是否是空对象
     * 
     * @memberof Util
     */
    isEmptyObject = (obj) => {
        let name;
        for (name in obj) {
            return false;
        }
        return true;
    }


    /**
     * 判断是否是字符串
     * 
     * @memberof Util
     */
    isString = (obj) => {
       return typeof obj === 'string';
    }
    /**
     * 是否是函数
     * 
     * @memberof Util
     */
    isFunction = (obj) => {
        return typeof obj === 'function';
    }

    /**
     * 判断是否是json字符串
     * 
     * @return {boolean} 
     */
    isJsonString = (obj) => {
        let bool = true;
        if(this.isString(obj)){
           try {
               JSON.parse(obj);
           } catch (error) {
               bool = false;
           }
        }
        return bool;
    }
}
export default new Util;