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
import Auth from '../../services/auth';

class App extends Component {

    constructor(props) {
        super(props);
        this.imgChange = this.imgChange.bind(this);
        this.state = {
            showToptips: false,
            tipMsg: '',
            from: {
                customerImgs: {
                    name: '认证图片',
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

    // 点击选择图片
    imgChange = async(e)=> {
        let maxSize = 1024 * 1024 * 8; // 单张图片最大不能超过8MB
        let localSrc = e.target; // 本地的图片对象
        // 只能上传jpg/png/jpeg格式的图片文件
        if (!/\.(jpg|png|jpeg|JPG|PNG|JPEG)$/.test(localSrc.value)) {
            this.showTip('请上传jpg|png|jpeg格式的图片');
            return false;
        }
        // 单张图片最大不能超过8MB
        if (localSrc.files[0].size > maxSize) {
            this.showTip('单张图片大小不能超过8MB');
            return false;
        }
        
        let result = await Auth.uploadImg(localSrc.files[0]);
        console.log(result);
        
    }

    render() {
        // console.log(this.state.from);
        return (
            <Page className="flex" title="Flex" subTitle="" spacing>

                <CellsTitle>请上传jpg，png,jpeg格式的图片，单张不超过8MB，上传后再次点击可重新上传</CellsTitle>

                <Form>
                    <CellsTitle>身份证照</CellsTitle>
                    <Cell>
                        <div className="img-upload">
                            <img src={srcDefault} alt="" />
                            <input type="file" accept="image/*" onChange={this.imgChange} />
                        </div>
                        <div className="img-upload">
                            <img src={srcDefault} alt="" />
                            <input type="file" accept="image/*" onChange={this.imgChange} />
                        </div>
                    </Cell>
                    <CellsTitle>手持身份证照</CellsTitle>
                    <Cell>
                        <div className="img-upload">
                            <img src={srcDefault} alt="" />
                            <input type="file" accept="image/*" onChange={this.imgChange} />
                        </div>
                    </Cell>
                    <CellsTitle>银行卡照</CellsTitle>
                    <Cell>
                        <div className="img-upload">
                            <img src={srcDefault} alt="" />
                            <input type="file" accept="image/*" onChange={this.imgChange} />
                        </div>
                    </Cell>
                </Form>
                <ButtonArea>
                    <Button>确定</Button>
                </ButtonArea>

                <Toptips type="warn" show={this.state.showToptips}>
                    {this.state.tipMsg}
                </Toptips>
            </Page>
        );
    }
}

export default App;