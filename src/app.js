import React from 'react'
import ReactDOM from 'react-dom'
import Action from './components/action'
import Header from './components/header'
import Addoption from './components/addoption'
import Options from './components/options'

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

ReactDOM.render(<Indecision />, document.getElementById('approot'));
