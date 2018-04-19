import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../assets/style/mgjc.less';
import './app.css';
import {
    Page,
    Button,
    Dialog
} from '../../components/index';
import index_pic from './images/index_pic.jpg';
import uncertified_pic from './images/uncertified_pic.png';
class App extends Component {

    constructor(props) {
        super(props);
        document.title = "取现";
        this.toAuthentication = this.toAuthentication.bind(this);
        this.state = {
            showIos: false,
            style: {
                buttons: [
                    {
                        label: '立即认证',
                        onClick: this.toAuthentication
                    },
                    {
                        type: 'default',
                        label:'取消',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            }
        }
    }

    hideDialog(){
        this.setState({
            showIos:false
        });
    }

    // 跳转到认证页面
    toAuthentication(){
        // js控制页面跳转
        this.props.history.push({ pathname : '/auth'});
    }

    render() {
        return (
            <Page style={{background:`#f5f5f5`}}>
                <img src={index_pic} alt="" onClick={e => this.setState({ showIos: true })} style={{width:`100%`}}/>
                <Dialog type="ios" title={this.state.style.title} buttons={this.state.style.buttons} show={this.state.showIos}>
                    <img src={uncertified_pic} alt="" style={{width:`100%`}}/>
                    还未完成认证，请完成认证后交易
                </Dialog>
            </Page>
        );
    }
}

export default App;
