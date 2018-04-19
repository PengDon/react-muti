import Rule from './rule';

const Msg = {
    required:(name)=>`${name}不能为空`,
    isString:(value)=>`${value}不是字符串类型`,
    isLoginName:(name)=>`${name}格式不正确`,
    isPassword:(name)=>`${name}格式不正确`,
    isMoblie:(name)=>`${name}格式不正确`,
    isPhone:(name)=>`${name}格式不正确`,
    isNumber:(value)=>`${value}格式不正确`,
    isZN:(value)=>`${value}格式不正确`,
    isCard:()=>`身份证号格式不正确`,
    isBankNo:()=>`银行卡号格式不正确`
};

const validata =(name,type,value,msg)=>{
    let tip = '';
    if(!Rule[type](value)){
        tip = Msg[type](name);
    }
    return tip;
}


export default validata;