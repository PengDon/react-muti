import React, {
    Component
} from 'react';

class AutoFocusInput extends Component {
    componentDidMount() {
        this.input2.focus()
    }

    render() {
        return ( <
            input ref = {
                (ele) => this.input2 = ele
            }
            />
        )
    }
}


class App extends Component {
    render() {
        return (

            <
            div >
            <
            AutoFocusInput / >
            <
            p > 345435 < /p> <
            /div>
        )
    }

}

export default App;