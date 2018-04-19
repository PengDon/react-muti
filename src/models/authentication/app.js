import React, { Component } from 'react';
import '../../assets/style/mgjc.less';
import './app.css';
import {
    Page,
    Article,
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Flex,
    FlexItem,
    Icon,
    Input,
    Label,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    Popup,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    SearchBar,
    VCode,
    Agreement,
    Toptips
} from '../../components/index';
import validata from "../../utils/validata/index";
import srcDefault from './images/zm_default.png';

const BankList = [{ "value": "", "label": "请选择开户行" },{ "value": "建设银行", "label": "建设银行" }, { "value": "工商银行", "label": "工商银行" }, { "value": "中国银行", "label": "中国银行" }, { "value": "农业银行", "label": "农业银行" }, { "value": "民生银行", "label": "民生银行" }, { "value": "兴业银行", "label": "兴业银行" }, { "value": "浦发银行", "label": "浦发银行" }, { "value": "招商银行", "label": "招商银行" }, { "value": "平安银行", "label": "平安银行" }, { "value": "交通银行", "label": "交通银行" }, { "value": "广发银行", "label": "广发银行" }, { "value": "邮储银行", "label": "邮储银行" }, { "value": "光大银行", "label": "光大银行" }, { "value": "华夏银行", "label": "华夏银行" }, { "value": "北京银行", "label": "北京银行" }, { "value": "浦东银行", "label": "浦东银行" }, { "value": "长沙银行", "label": "长沙银行" }, { "value": "台州银行", "label": "台州银行" }, { "value": "天津银行", "label": "天津银行" }, { "value": "大连银行", "label": "大连银行" }, { "value": "南京银行", "label": "南京银行" }, { "value": "泉州银行", "label": "泉州银行" }, { "value": "宁波银行", "label": "宁波银行" }, { "value": "包商银行", "label": "包商银行" }, { "value": "东莞商行", "label": "东莞商行" }, { "value": "温州银行", "label": "温州银行" }, { "value": "汉口银行", "label": "汉口银行" }, { "value": "江苏银行", "label": "江苏银行" }, { "value": "东莞农村商业银行", "label": "东莞农村商业银行" }, { "value": "北京农商行", "label": "北京农商行" }];


const stepTwo = (
    <Page className="flex" title="Flex" subTitle="" spacing>
        <CellsTitle>请上传jpg，png,jpeg格式的图片，单张不超过8MB，上传后再次点击可重新上传</CellsTitle>

        <Form>
            <CellsTitle>身份证照</CellsTitle>
            <Cell>
                <img src={srcDefault} alt="" />
                <img src={srcDefault} alt="" />
            </Cell>
            <CellsTitle>手持身份证照</CellsTitle>
            <Cell>
                <img src={srcDefault} alt="" />
            </Cell>
            <CellsTitle>银行卡照</CellsTitle>
            <Cell>
                <img src={srcDefault} alt="" />
            </Cell>
        </Form>
        <ButtonArea>
            <Button>确定</Button>
        </ButtonArea>
    </Page>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.state = {
            showToptips: false,
            fullpage_show:false,
            tipMsg: '',
            searchText: '',
            seearchResults: [],
            from:{
                customerName:{
                    name: '用户姓名',
                    rules: ['required','isZN'],
                    pass: false,
                    value: '',
                },
                certNo:{
                    name: '身份证号',
                    rules: ['required','isCard'],
                    pass: false,
                    value: '',
                },
                cardNumber:{
                    name: '银行储蓄卡号',
                    rules: ['required'],
                    pass: false,
                    value: '',
                },
                bankName:{
                    name: '开户银行名称',
                    rules: ['required'],
                    pass: false,
                    value: '',
                },
                subBankName:{
                    name: '开户支行名称',
                    rules: ['required'],
                    pass: false,
                    value: '',
                },
                cardMobile:{
                    name: '银行预留手机号',
                    rules: ['required','isMoblie'],
                    pass: false,
                    value: '',
                },
                customerImgs:{
                    name: '认证图片',
                    rules: ['required'],
                    pass: false,
                    value: '',
                }
                ,
                customerImgs:{
                    name: '联系地址',
                    rules: ['required'],
                    pass: false,
                    value: '',
                }
            }
        }
    }
    
    hideSubBankList(){
        this.setState({
            fullpage_show: false
        });
    }
    showTip(tip) {
        if (this.state.showToptips) return;
        this.setState({ showToptips: !this.state.showToptips, tipMsg: `${tip}` });
        window.setTimeout(e => this.setState({ showToptips: !this.state.showToptips }), 2000)
    }

    checkData = async (key) => {
        let bool = true;
        let obj = this.state.from;
        // 遍历规则
        for (let type of obj[key].rules) {
            let tip = validata(obj[key].name, type, obj[key].value);
            // console.log(tip);
            if (tip !== "") {
                bool = false;
                console.log(obj[key].name+"-----验证----"+(bool===true?'通过':'失败'));
                obj[key].pass = bool;
                this.showTip(tip);
                return bool;
            }
        }
        obj[key].pass = bool;
        return bool;
    }

    isPass() {
        let bool = true;
        let obj = this.state.from;
        // 遍历对象keys数组
        for (let key of Object.keys(obj)) {
            if (!this.checkData(key) || !obj[key].pass) {
                bool = false;
                return bool;
            }
        }
        return bool;
    }

    handChange = async (e) => {
        e.preventDefault();
        // 对象浅拷贝
        let obj = { ...this.state.from };
        let cutValue = e.target.value;
        // 如果当前输入的值大于设置的最大值，则进行处理
        if(cutValue.length > e.target.maxLength){
            cutValue = cutValue.slice(0,e.target.maxLength);
        }
        // 更新对应input的值
        obj[e.target.name].value = cutValue;
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
    
    next(e){
        // 验证通过，继续执行
        if (this.isPass()) {
 
        }
    }

    handleChange(text, e){
        let keywords = [text];
        // let results = SampleData.filter(/./.test.bind(new RegExp(keywords.join('|'),'i')));
        let results = [];
        if(results.length > 3) results = results.slice(0,3);
        this.setState({
            results,
            searchText:text,
        });
    }
    
    

    render() {
        // console.log(this.state.from);
        return (
            <Page className="flex" title="Flex" subTitle="" spacing>
                <CellsTitle>step one</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>用户姓名</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" name="customerName" placeholder="请输入姓名" onInput={this.handChange} maxLength="10"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>身份证号码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" name="certNo" placeholder="请输入身份证号码" onInput={this.handChange} maxLength="18"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>储蓄卡号</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" name="cardNumber" placeholder="开户人须和用户姓名一致" onInput={this.handChange}/>
                        </CellBody>
                    </FormCell>
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>开户银行</Label>
                        </CellHeader>
                        <CellBody>
                            <Select name="bankName" data={BankList} onInput={this.handChange}/>
                            {/* <Input type="hidden" placeholder="请选择开户行" onClick={this.changeBank}/> */}
                        </CellBody>
                    </FormCell>
                    <Cell access>
                        <CellHeader>
                            <Label>开户支行</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" name="subBankName" readOnly placeholder="请选择开户支行" onClick={e=>this.setState({fullpage_show: true})} onInput={this.handChange}/>
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <FormCell>
                        <CellHeader>
                            <Label>预留手机号码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" name="cardMobile" placeholder="请输入银行预留手机号" onInput={this.handChange} maxLength="11"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>联系地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" name="adress" placeholder="请输入联系地址" onInput={this.handChange} maxLength="18"/>
                        </CellBody>
                    </FormCell>
                </Form>

                <ButtonArea>
                    <Button
                        onClick={this.next}>
                        下一步
                </Button>
                </ButtonArea>
                
                <Popup
                    show={this.state.fullpage_show}
                    onRequestClose={e=>this.setState({fullpage_show: false})}
                >
                <SearchBar
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.searchText}
                    placeholder="请输入搜索关键词"
                    lang={{
                        cancel: '取消'
                    }}
                />

                <Panel style={{display: this.state.searchText ? null: 'none', marginTop: 0}}>
                    <PanelHeader>
                        支行列表
                    </PanelHeader>
                    <PanelBody>
                        {/* {
                            this.state.searchResults.length > 0 ?
                                this.state.results.map((item,i)=>{
                                    return (
                                        <MediaBox key={i} type="appmsg" href="javascript:void(0);">
                                            <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                                            <MediaBoxBody>
                                                <MediaBoxTitle>{item}</MediaBoxTitle>
                                                <MediaBoxDescription>
                                                    You may like this name.
                                                </MediaBoxDescription>
                                            </MediaBoxBody>
                                        </MediaBox>
                                    )
                                })
                                : <MediaBox>Can't find any！</MediaBox>
                        } */}
                    </PanelBody>
                    <PanelFooter href="javascript:void(0);">
                    </PanelFooter>
                </Panel>
                </Popup>

                <Toptips type="warn" show={this.state.showToptips}>
                    {this.state.tipMsg}
                </Toptips>
            </Page>
        );
    }
}

export default App;