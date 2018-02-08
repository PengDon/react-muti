import Util from './util';

/**
 * cookie 工具类
 * 
 * @class Cookie
 */
class Cookie {

    doc = window.document;

    /**
     * 设置 Cookie
     * @param {String} name 名称
     * @param {String} val 值
     * @param {Number} expires 单位（秒）
     * @param {String} domain 域
     * @param {String} path 所在的目录
     * @param {Boolean} secure 跨协议传递
     */
    set(name, val, expires, domain, path, secure) {
        // 对name进行异常处理
        if(name === '' || name == null){
            console.error("cookie must have a name");
            return;
        }
        // 设置的值类型判断
        if (typeof val === 'object') {
            val = JSON.stringify(val);
        }

        let text = String(encodeURIComponent(val)),
            date = expires;
        // 从当前时间开始，多少小时后过期
        if (typeof date === 'number') {
            date = new Date();
            date.setTime(date.getTime() + expires * 1000);
        }
        date instanceof Date
            &&
            (text += '; expires=' + date.toUTCString());
        !!domain && (text += '; domain=' + domain);
        text += '; path=' + (path || '/');
        secure && (text += '; secure');
        this.doc.cookie = name + '=' + text;
    }

    /**
     * 获取 Cookie
     * @param {String} name
     * @return {String}
     */
    get(name) {
        let m = this.doc.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
        let val = (m && m[1]) ? decodeURIComponent(m[1]) : '';
        val = Util.isJsonString(val) ? JSON.parse(val) : val;
        return val;
    }

    del(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = `${name}=0;expires=${new Date(0).toUTCString()}`;
    }
}
export default new Cookie;