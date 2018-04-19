import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../assets/style/mgjc.less';
import {
    Page,
    Cells,
    CellsTitle,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from '../../components/index';

const ListDemo = (props) => (
    <Page className="cell" title="List" subTitle="列表">
        <CellsTitle>List with description</CellsTitle>
        <Cells>
            <Cell>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
        </Cells>

        <CellsTitle>List with Icon & Description</CellsTitle>
        <CellsTitle>List with link</CellsTitle>
        <Cells>
            <Cell href="javascript:;" access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter/>
            </Cell>
            <Cell access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter/>
            </Cell>
        </Cells>

        <CellsTitle>List with title & link</CellsTitle>
        <Cells>
            <Cell href="javascript:;" access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
        </Cells>
    </Page>
);

class App extends Component {

    constructor(props) {
        super(props);
        document.title = "银行网点";
        this.state = {
            cnt:ListDemo()
        }
    }

    render() {
        return (
            <div>{this.state.cnt}</div>
        );
    }
}

export default App;
