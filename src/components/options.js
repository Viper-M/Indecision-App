import React from "react";

export default class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => {
                        return <div> {option} <button onClick = {(e) => {
                            this.props.deleteone(option)
                        }}> Remove</button> </div>
                    })
                }
            </div>
        );
    }
}