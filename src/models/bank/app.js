import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../assets/style/mgjc.less';
import {
    Page,
    Article,
    ButtonArea,
    Button,
    CellsTitle,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Input,
    PullToRefresh,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    SearchBar,
    Toptips
} from '../../components/index';
import validata from "../../utils/validata/index";
import Auth from '../../services/auth';

const BankList = [{ "value": "", "label": "请选择开户行" }, { "value": "建设银行", "label": "建设银行" }, { "value": "工商银行", "label": "工商银行" }, { "value": "中国银行", "label": "中国银行" }, { "value": "农业银行", "label": "农业银行" }, { "value": "民生银行", "label": "民生银行" }, { "value": "兴业银行", "label": "兴业银行" }, { "value": "浦发银行", "label": "浦发银行" }, { "value": "招商银行", "label": "招商银行" }, { "value": "平安银行", "label": "平安银行" }, { "value": "交通银行", "label": "交通银行" }, { "value": "广发银行", "label": "广发银行" }, { "value": "邮储银行", "label": "邮储银行" }, { "value": "光大银行", "label": "光大银行" }, { "value": "华夏银行", "label": "华夏银行" }, { "value": "北京银行", "label": "北京银行" }, { "value": "浦东银行", "label": "浦东银行" }, { "value": "长沙银行", "label": "长沙银行" }, { "value": "台州银行", "label": "台州银行" }, { "value": "天津银行", "label": "天津银行" }, { "value": "大连银行", "label": "大连银行" }, { "value": "南京银行", "label": "南京银行" }, { "value": "泉州银行", "label": "泉州银行" }, { "value": "宁波银行", "label": "宁波银行" }, { "value": "包商银行", "label": "包商银行" }, { "value": "东莞商行", "label": "东莞商行" }, { "value": "温州银行", "label": "温州银行" }, { "value": "汉口银行", "label": "汉口银行" }, { "value": "江苏银行", "label": "江苏银行" }, { "value": "东莞农村商业银行", "label": "东莞农村商业银行" }, { "value": "北京农商行", "label": "北京农商行" }];


class App extends Component {

    constructor(props) {
        super(props);
        this.recordBank = this.recordBank.bind(this);
        this.state = {
            showToptips: false,
            tipMsg: '',
            searchText: '',
            searchResults: []
        }
    }

    showTip(tip) {
        if (this.state.showToptips) return;
        this.setState({ showToptips: !this.state.showToptips, tipMsg: `${tip}` });
        window.setTimeout(e => this.setState({ showToptips: !this.state.showToptips }), 2000);
    }
    // 监听输入，根据接口返回数据渲染搜索结果
    async handleChange(text, e) {
        if (text === "") {
            return;
        }
        let searchResults = [];
        searchResults = await Auth.getBankAll(text);
        // let results = SampleData.filter(/./.test.bind(new RegExp(keywords.join('|'),'i')));
        this.setState({
            searchResults: searchResults.data,
            searchText: text,
        });
    }
    // 记录选中的支行
    recordBank(e) {
        console.log(this);
        console.log(e.target.innerText);
         // js控制页面跳转
         this.props.history.push({ pathname: '/auth' });
    }

    render() {
        return (
            <Page className="flex" title="Flex" subTitle="" spacing>
                <SearchBar
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.searchText}
                    placeholder="请输入搜索关键词"
                    lang={{
                        cancel: '取消'
                    }}
                />
                <PullToRefresh>
                    <CellsTitle>bank list</CellsTitle>
                    <Cells>
                        {
                            this.state.searchResults.length > 0 ?
                                this.state.searchResults.map((item, i) => {
                                    return (
                                        <Cell href="javascript:;" key={i} access>
                                            <CellBody onClick={this.recordBank}>{item.bankName}</CellBody>
                                            <CellFooter />
                                        </Cell>
                                    )
                                })
                                : <CellsTitle>no match info</CellsTitle>
                        }
                    </Cells>

                </PullToRefresh>
                <Toptips type="warn" show={this.state.showToptips}>
                    {this.state.tipMsg}
                </Toptips>
            </Page>
        );
    }
}

export default App;