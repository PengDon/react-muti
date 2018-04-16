import React, { Component } from 'react';
import '../../assets/style/mgjc.less';
import {
    Page,
    ButtonArea,
    Button,
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
import vcodeSrc from './images/vcode.jpg';
import validata from "../../utils/validata/index";

/**
 * 简版登录实现
 */
class App extends Component {

    constructor(props) {
        super(props);
        // 设置标题
        document.title = 'login';
        this.handChange = this.handChange.bind(this);
        this.state = {
            tipMsg: '',
            showToptips: false,
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

    showTip(tip) {
        if (this.state.showToptips) return;
        this.setState({ showToptips: !this.state.showToptips, tipMsg: `${tip}` });
        window.setTimeout(e => this.setState({ showToptips: !this.state.showToptips }), 2000)
    }

    checkData = async (key) => {
        let bool = true;
        let obj = this.state.from;
        console.log("验证开始---------");
        // 遍历规则
        for (let type of obj[key].rules) {
            let tip = validata(obj[key].name, type, obj[key].value);
            console.log(tip);
            if (tip !== "") {
                bool = false;
                this.showTip(tip);
                return bool;
            }
        }
        obj[key].pass = bool;
        console.log("验证----"+bool);
        console.log(this.state.from);
        return bool;
    }

    isPass() {
        let bool = true;
        let obj = this.state.from;
        // 遍历对象keys数组
        for (let key of Object.keys(obj)) {
            if (!this.checkData(key) || !obj[key].pass) {
                bool = false;
                console.log(obj[key].pass);
                return bool;
            }
        }
        return bool;
    }

    // 登录 
    login = async () => {
        // 验证通过，继续执行
        if (this.isPass()) {

        }
    }

    handChange = async (e) => {
        e.preventDefault();
        // 对象浅拷贝
        let obj = { ...this.state.from };
        // 更新对应input的值
        obj[e.target.name].value = e.target.value;
        // 更新状态
        this.setState({
            from: obj
        });
        // this.setState({ showToptips: !this.state.showToptips});
        // let value = e.target.value;
        // for (const type of args) {
        //     let tip = validata(name,type,value);
        //     if(tip !== ""){
        //         console.log(tip)
        //         this.setState({ showToptips: !this.state.showToptips ,tipMsg:`${tip}`});
        //         return false;
        //     }
        // }
    }

    render() {
        return (
            <Page className="input" title="Input" subTitle="登录">
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>手机号</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入手机号" name="phone" value={this.state.from.phone.value} onInput={this.handChange} maxLength="11"/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <Label>VCode</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入图形验证码" name="vcode" value={this.state.from.vcode.value} onInput={this.handChange} maxLength="4"/>
                        </CellBody>
                        <CellFooter>
                            <VCode src={vcodeSrc} />
                        </CellFooter>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <Label>短信验证码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入短信验证码" name="sms" value={this.state.from.sms.value} onInput={this.handChange} maxLength="6"/>
                        </CellBody>
                        <CellFooter>
                            <Button type="vcode">Send</Button>
                        </CellFooter>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.login}>登录</Button>
                </ButtonArea>

                <Toptips type="warn"
                    show={this.state.showToptips}
                >
                    {this.state.tipMsg}
                </Toptips>
            </Page>
        );
    }
}

export default App;