import Mock from 'mockjs';
import qs from 'qs';
import Util from '../utils/util';
import BankList from './bankData.json';

const login = {
    phone: '',
    imgCode: '',
    smsCode: ''
}
let result = {
      status:500,
      data:[],
      msg:''
};

// 图形验证码
Mock.mock('/vcode', () => {
    let vcode = Mock.mock({ 'regexp': /\w{4}/ }).regexp;
    console.log("图形验证码====" + vcode);
    // 记录生成的数据
    login.imgCode = vcode;
    return { imgUrl: Mock.Random.dataImage('50x20', vcode) };
});
// 发送短信验证码
Mock.mock('/sendSmsCode', (res) => {
    let args = qs.parse(res.body);
    // 错误情况
    result.msg = '图形验证码不正确，请重新输入！';

    // 如果图形验证码相同
    if (args.imgCode === login.imgCode) {
        let smsCode = Mock.Random.integer(100000, 999999);
        console.log("短信验证码====" + smsCode);
        // 记录生成的数据
        login.phone = args.phone;
        login.smsCode = smsCode;
        console.log(login);
        // 正确情况
        result.status = 200;
        result.msg = '短信发送成功';
    } 
    return result;
});
// 登录
Mock.mock('/login', (res) => {
    let args = qs.parse(res.body);
    // 错误情况
    result.msg = '短信验证码错误，请重新输入！';
    // 如果短信验证码相同
    if(args.smsCode && args.smsCode === login.smsCode){
       result.status = 200;
       result.msg = '登录成功，页面将会跳转';
    }
    return result;
});

Mock.mock('/bankList',(res)=>{
    let args = qs.parse(res.body);
    if(args.key && args.key !== ""){
        result.status = 200;
        result.data = Util.filterArrObj(args.key,BankList,'bankName');
    }
    return result;
});