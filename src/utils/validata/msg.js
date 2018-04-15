
const Msg = {
    required:(name)=>`${name}不能为空`,
    maxLength:(length)=>`数据长度不能超过${length}`,
    isString:(value)=>`${value}不是字符串类型`,
    isLoginName:(name)=>`${name}格式不正确`,
    isPassword:(name)=>`${name}格式不正确`,
    isMoblie:(name)=>`${name}格式不正确`,
    isPhone:(name)=>`${name}格式不正确`,
    isNumber:(value)=>`${value}格式不正确`
};

export default Msg;