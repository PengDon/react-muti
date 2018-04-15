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
                    rule:'',
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

    validataData(){

    }

    // 登录 
    login = async () => {
       
    }

    handChange(name,e,args){
        this.setState({ showToptips: !this.state.showToptips});
        let value = e.target.value;
        for (const type of args) {
            let tip = validata(name,type,value);
            if(tip !== ""){
                console.log(tip)
                this.setState({ showToptips: !this.state.showToptips ,tipMsg:`${tip}`});
                return false;
            }
        }
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
                            <Input type="tel" placeholder="请输入手机号" onBlur={(e) =>this.handChange('手机号',e,['required','isMoblie'])}/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <Label>VCode</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入图形验证码" onBlur={(e) =>this.handChange('图形验证码',e,['required'])}/>
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
                            <Input type="tel" placeholder="请输入短信验证码" onBlur={(e) =>this.handChange('短信验证码',e,['required'])}/>
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