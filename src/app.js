import React from "react"
import ReactDOM from "react-dom"
import Action from "./components/action"

class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.removeall = this.removeall.bind(this)
        this.deleteone = this.deleteone.bind(this)
        this.whatdo = this.whatdo.bind(this)
        this.addoption = this.addoption.bind(this)
        this.state = {
            options: ['one']
        }
    }

    removeall() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    deleteone(optiontoremove) {
        this.setState((state) => {
            return {
                options: state.options.filter((option)=>{
                    return optiontoremove !== option
                })
            }
        })
    }

    whatdo() {
        var number = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[number])
    }

    addoption(option) {
        this.setState((state) => {
            return {
                options: state.options.concat(option)
            }
        })
    }

    render() {
        return (
            <div>
                <Header title="Indecision App" />
                <Action hasoption={this.state.options.length > 0} options={this.state.options} removeall={this.removeall} whatdo={this.whatdo} />
                <Options options={this.state.options} deleteone={this.deleteone}/>
                <Addoption addoption={this.addoption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class Options extends React.Component {
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
 

class Addoption extends React.Component {
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

ReactDOM.render(<Indecision />, document.getElementById('approot'));
