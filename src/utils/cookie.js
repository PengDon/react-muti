/**
 * cookie 工具类
 * 
 * @class Cookie
 * @example 
 * let cookie = new Cookie('key');
 * cookie.set('value',expiredays);
 * cookie.get();
 * cookie.del();
 */
class Cookie {
    constructor(key) {
        this.key = key;
    }
    /**
     * 设置Cookie
     * @param value 值
     * @param expiredays 有效时间
     */
    set(value, expiredays) {
        let cookieValue;
        if (typeof (value) === 'object') {
            cookieValue = JSON.stringify(value);
        } else {
            cookieValue = value;
        }
        let data = new Date();
        data.setDate(data.getDate() + expiredays);
        document.cookie = `${this.key}=${escape(cookieValue)
            }${(expiredays == null) ? '' : `;expires=${data.toGMTString()}`}path=/`;
    }

    get() {
        let m = window.document.cookie.match('(?:^|;)\\s*' + this.key + '=([^;]*)');
        return (m && m[1]) ? decodeURIComponent(m[1]) : '';
    }

    del() {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = `${this.key}=0;expires=${new Date(0).toUTCString()}`;
    }
}
export default new Cookie;