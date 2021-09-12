import React from "react";

export default class Addoption extends React.Component {
    constructor(props) {
        super(props)
        this.addoption = this.addoption.bind(this)
    }
    addoption() {
        var option = document.getElementById('input').value

        this.props.addoption(option)
        document.getElementById('input').value = ''
    }
    render() {
        return (
            <div>
                <input id="input" />
                <button onClick={this.addoption}>Add</button>
            </div>
        );
    }
}