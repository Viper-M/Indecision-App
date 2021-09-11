import React from "react";

class Action extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button disabled={!this.props.hasoption} onClick={this.props.whatdo}>What shoud I do?</button>
                <br />
                <br />
                <button onClick={this.props.removeall}>Reset All</button>
            </div>
        );
    }
}

export default Action