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
        this.state = {
            tipMsg:'',
            showToptips: false,
            from:{
                phone:{
                    validata:false,
                    value:'',
                },
                vcode:{
                    validata:false,
                    value:'',
                },
                sms:{
                    validata:false,
                    value:'',
                }
            }
        }
    }

    // 登录 
    login = async () => {
        // // 空值校验
        // if (!this.state.loginName || !this.state.loginPwd) {
        //     alert("用户名或密码不能为空");
        //     return;
        // }
        // // 获取接口结果 
        // let result = await api.login(this.state);
        // if (result.success) {
        //     // 跳转到首页
        //     window.location.replace("#/");
        // } else {
        //     alert(result.msg);
        //     this.setState({ loginName: '', loginPwd: '' });
        // }
    }

    handChange(name,args,value){
        validata(name,args,value)
    //     this.setState({ showToptips: !this.state.showToptips ,tipMsg:'手机号不能为空'})
    //     console.log(name);
    //     console.log(value);
    //    console.log(args);
    }

    componentWillMount() {
        this.state.warnTimer && clearTimeout(this.state.warnTimer);
        // let user = Cookie.get('login');
        // if (user.isLogin) {
        //     console.log("已登录，跳转到首页");
        //     // 跳转到首页
        //     window.location.replace("#/");
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
                            <Input type="tel" placeholder="请输入手机号" onBlur={(e) =>this.handChange('手机号','required',e.target.value)}/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <Label>VCode</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入图形验证码" />
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
                            <Input type="tel" placeholder="请输入短信验证码" />
                        </CellBody>
                        <CellFooter>
                            <Button type="vcode">Send</Button>
                        </CellFooter>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button
                        // button to display toptips
                        onClick={e => {
                            if (this.state.showToptips) return;
                            this.setState({ showToptips: !this.state.showToptips })
                            window.setTimeout(e => this.setState({ showToptips: !this.state.showToptips }), 2000)
                        }
                        }>
                        登录
                </Button>
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