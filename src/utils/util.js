/**
 * 公共方法类
 * 
 * @export
 * @class Util
 */
// util 的私有属性

class Util {
    

    /**
     * Creates an instance of Util.
     * @memberof Util
     */
    constructor() {
       this.doc = window.document;
    }

    /**
     * 获取uuid，默认为5位数
     * 
     * @param {Number} n  [正整数，取值区间5-25]
     * @static
     * @memberof Util
     */
    static UUID(n) {
        return Math.random().toString(36).substring(2, n > 5 ? n + 2 : 7);
    }

    /**
     * 序列化
     * 
     * @param {any} value 
     * @static
     * @memberof Util
     */
    static serialize(value) {
        if (typeof value === 'string') {
            return value;
        }
        return JSON.stringify(value);
    }

    /**
     * 反序列化
     * 
     * @param {any} value 
     * @static 
     * @memberof Util
     */
    static deserialize(value) {
        if (typeof value !== 'string') {
            return undefined;
        }
        try {
            return JSON.parse(value);
        } catch (e) {
            return value || undefined;
        }
    }

    /**
     * 获取URL地址栏参数
     * 
     * @param name 
     * @static 
     * @memberof Util
     */
    static getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = window.location.search.substr(1).match(reg),
            qs = '';
        if (r != null) {
            qs = decodeURIComponent(r[2]);
        }
        return qs;
    }

    /**
     * HTML5存储 [本地存储 localStorage 和 Session存储 sessionStorage] 
     * 
     * @static
     * @memberof Util
     */
    static storage() {
        let ls = window.sessionStorage || window.localStorage;
        if (!ls) {
            return null
        };
        return {
            set: (key, value) => {
                ls.setItem(key, Util.serialize(value));
            },
            get: (key) => {
                return Util.deserialize(ls.getItem(key));
            },
            remove: (key) => {
                ls.removeItem(key);
            },
            clear: () => {
                ls.clear();
            }
        }
    }

    /**
     * Cookie
     * 
     * @static
     * @memberof Util
     */
    static cookie() {
        return {
            /**
             * 获取 Cookie
             * @param {String} name
             * @return {String}
             */
            get: (name) => {
                let m = this.doc.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
                return (m && m[1]) ? decodeURIComponent(m[1]) : '';
            },
            /**
             * 设置 Cookie
             * @param {String} name 名称
             * @param {String} val 值
             * @param {Number} expires 单位（秒）
             * @param {String} domain 域
             * @param {String} path 所在的目录
             * @param {Boolean} secure 跨协议传递
             */
            set: (name, val, expires, domain, path, secure) => {
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
        }
    }

    /**
     * 页面滚动方法【移动端】
     * 
     * @type {{lock, unlock}} lock：禁止页面滚动, unlock：释放页面滚动
     * @static
     * @memberof Util
     */
    static pageScroll() {
        let fn = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };
        let islock = false;
        return {
            lock: () => {
                if (islock) {
                    return;
                }
                islock = true;
                this.doc.addEventListener('touchmove', fn);
            },
            unlock: () => {
                islock = false;
                this.doc.removeEventListener('touchmove', fn);
            }
        }
    }

}
export default Util;