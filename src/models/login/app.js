import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../assets/style/mgjc.less';
import './app.css';
import {
    Page,
    ButtonArea,
    Button,
    CellsTitle,
    CellHeader,
    CellBody,
    Form,
    FormCell,
    Input,
    Label,
    VCode,
    CellFooter,
    Agreement,
    Toptips
} from '../../components/index';
import Cookie from '../../utils/cookie';
import head_banner from './images/head_banner.jpg';
import phone_icon from './images/phone_icon.png';
import vcode_icon from './images/vcode_icon.png';
import smscode_icon from './images/smscode_icon.png';
import validata from "../../utils/validata/index";
import Login from '../../services/login';
import '../../mock/api';

/**
 * 简版登录实现
 */
class App extends Component {

    constructor(props) {
        super(props);
        // 设置标题
        document.title = '登录';
        // 绑定this对象到指定方法
        this.handChange = this.handChange.bind(this);
        this.sendSmsCode = this.sendSmsCode.bind(this);
        this.changeVCode = this.changeVCode.bind(this);
        this.state = {
            smsTxt: '获取验证码',
            smsState: false,
            tipMsg: '',
            showToptips: false,
            vcodeSrc: '',
            from: {
                phone: {
                    name: '手机号',
                    rules: ['required', 'isMoblie'],
                    pass: false,
                    value: '',
                },
                vcode: {
                    name: '图形验证码',
                    rules: ['required'],
                    pass: false,
                    value: '',
                },
                sms: {
                    name: '短信验证码',
                    rules: ['required'],
                    pass: false,
                    value: '',
                }
            }
        }
    }

    componentWillMount(){
        this.changeVCode();
    }

    // 点击获取最新图片验证码
    changeVCode = async(e)=> {
        let vcodeSrc = await Login.getVCode();
        this.setState({
            vcodeSrc: vcodeSrc.imgUrl
        });
    }

    // 显示提示信息
    showTip(tip) {
        if (this.state.showToptips) return;
        this.setState({ showToptips: !this.state.showToptips, tipMsg: `${tip}` });
        window.setTimeout(e => this.setState({ showToptips: !this.state.showToptips }), 2000)
    }

    /**
     * 检查指定key的数据
     * 
     * @param {any} key 
     * @returns 
     */
    checkData = async (key) => {
        let bool = true;
        let obj = this.state.from;
        // 遍历规则
        for (let type of obj[key].rules) {
            let tip = validata(obj[key].name, type, obj[key].value);
            if (tip !== "" && !obj[key].pass) {
                bool = false;
                console.log(obj[key].name + "-----验证----" + (bool === true ? '通过' : '失败'));
                this.showTip(tip);
                return bool;
            }
        }
        obj[key].pass = bool;
        return bool;
    }

    // 是否通过校验
    isPass = async () => {
        let bool = true;
        let obj = this.state.from;
        // 遍历对象keys数组
        for (let key of Object.keys(obj)) {
            if (await !this.checkData(key) || !obj[key].pass) {
                bool = false;
                return bool;
            }
        }
        return bool;
    }

    // 登录 
    login = async () => {
        // 验证通过，继续执行
        if (this.isPass()) {
            // 调用登录接口
            let args = [this.state.from.phone.value, this.state.from.sms.value];
            let result = await Login.login(...args);
            if (result.status === 200) {
                // js控制页面跳转
                this.props.history.push({ pathname: '/home' });
            }
        }
    }

    // 监听内容变化
    handChange = async (e) => {
        e.preventDefault();
        // 对象浅拷贝
        let obj = { ...this.state.from };
        let cutValue = e.target.value;
        // 如果当前输入的值大于设置的最大值，则进行处理
        if (cutValue.length > e.target.maxLength) {
            cutValue = cutValue.slice(0, e.target.maxLength);
        }
        // 更新对应input的值
        obj[e.target.name].value = cutValue;
        // 更新状态
        this.setState({
            from: obj
        });
    }


    /**
     * 发送短信验证码
     * 
     * @param {any} e 
     */
    sendSmsCode = async (e) => {
        // 1. 检查手机号是否输入、是否正确
        if (await this.checkData('phone') && await this.checkData('vcode') && !this.state.smsState) {
            // 2. 调用发送短信接口
            let args = [this.state.from.phone.value, this.state.from.vcode.value];
            let result = await Login.getSmsCode(...args);
            if (result.status === 200) {
                // 3. 发送成功触发60s倒计时
                if (!this.state.smsState) {
                    this.smsCountDown();
                }
            }else{
                let obj = { ...this.state.from };
                obj['vcode'].value = '';
                this.showTip(result.msg);
                this.setState({
                    from:obj
                });
            }
        }

    }

    // 短信倒计时
    smsCountDown() {
        this.setState({
            smsState: true
        });
        let count = 60;
        let smsInter = setInterval(() => {
            count--;
            if (count <= 0) {
                clearInterval(smsInter);
                this.setState({
                    smsState: false,
                    smsTxt: `获取验证码`
                });
            } else {
                this.setState({
                    smsTxt: `${count}s后获取验证码`
                });
            }
        }, 1000);
    }

    render() {
        return (
            <Page className="input" title="Input" subTitle="登录">
                <img src={head_banner} alt="" style={{ width: `100%` }} />
                <CellsTitle style={{ background: `#f5f5f5`, color: `#a0a0a0`, padding: `20px 0 20px 20px` }}>一键取现，方便快捷</CellsTitle>
                <Form>

                    <FormCell>
                        <CellHeader>
                            <img src={phone_icon} alt="" style={{ display: `block`, width: `30px`, marginRight: `16px` }} />
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="手机号码" name="phone" value={this.state.from.phone.value} onInput={this.handChange} maxLength="11" />
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <img src={vcode_icon} alt="" style={{ display: `block`, width: `30px`, marginRight: `16px` }} />
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="图形验证码" name="vcode" value={this.state.from.vcode.value} onInput={this.handChange} maxLength="4" />
                        </CellBody>
                        <CellFooter>
                            <VCode src={this.state.vcodeSrc} onClick={this.changeVCode} />
                        </CellFooter>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <img src={smscode_icon} alt="" style={{ display: `block`, width: `30px`, marginRight: `16px` }} />
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="短信验证码" name="sms" value={this.state.from.sms.value} onInput={this.handChange} maxLength="6" />
                        </CellBody>
                        <CellFooter>
                            <Button type="vcode" onClick={this.sendSmsCode}>{this.state.smsTxt}</Button>
                        </CellFooter>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.login}>登录</Button>
                </ButtonArea>

                <Toptips type="warn" show={this.state.showToptips}>
                    {this.state.tipMsg}
                </Toptips>
            </Page>
        );
    }
}

export default App;