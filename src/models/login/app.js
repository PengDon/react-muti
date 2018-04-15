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
        this.handChange = this.handChange.bind(this);
        this.state = {
            tipMsg:'',
            showToptips: false,
            from:{
                phone:{
                    rules:['required:["手机号"]','isMoblie'],
                    pass:false,
                    value:'',
                },
                vcode:{
                    rules:['required'],
                    pass:false,
                    value:'',
                },
                sms:{
                    rules:['required'],
                    pass:false,
                    value:'',
                }
            }
        }
    }

    validataData(){
        
    }

    // 登录 
    login = async () => {
       console.log(this.state.from);
    }

    handChange = async(e) =>{
        e.preventDefault();
        console.log(this.state.from);
        let key = e.target.name;
        let cutValue = e.target.value;

        this.setState({
            from:{key:{value:cutValue}}
        });
        
        console.log(this.state.from.phone.value)

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
                            <Input type="tel" placeholder="请输入手机号" name="phone" value={this.state.from.phone.value} onInput={this.handChange}/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <Label>VCode</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入图形验证码" value={this.state.from.vcode.value}/>
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
                            <Input type="tel" placeholder="请输入短信验证码" value={this.state.from.sms.value}/>
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