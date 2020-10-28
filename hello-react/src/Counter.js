const { Component } = require("react");

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
}

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount deprecated');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 == 0) return false;
        return true;
    }

    componentWillUpdate(nextProps,nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, nextState) {
        console.log('componentDidUpdate');
    }

    componentDidCatch(error, info) {
        this.setState({
            error : true
        });
    }

    handleIncrese = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrese = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        if(this.state.error) return (<h1>에러발생!</h1>)
        console.log('render');
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                { this.state.number === 4 && <Problematic/> }
                <button onClick = {this.handleIncrese}>+</button>
                <button onClick = {this.handleDecrese}>-</button>
            </div>
        );
    }
}

export default Counter;