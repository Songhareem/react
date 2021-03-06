import { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleCange = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();

        // 상태값을 onCreate를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" value={this.state.name} onChange={this.handleCange} name="name"/>
                <input placeholder="전번" value={this.state.phone} onChange={this.handleCange} name="phone"/>
                <div>{this.state.name} {this.state.phone}</div>

                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;