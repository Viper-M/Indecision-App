class Visibility extends React.Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            Visibility: false
        }
    }
    toggle(){
        this.setState((state)=>{
            return {
            Visibility: !state.Visibility
            }
        })
    }
render(){
    return (
        <div>
        <h1>Visibility</h1>

        {this.state.Visibility ? <button onClick={this.toggle}>show details</button> : <button onClick={this.toggle}>hide details</button>}

        {this.state.Visibility && <p>salllllllllllld</p>}
        
    </div>
    );
}
}

ReactDOM.render(<Visibility/>,document.getElementById('approot'));
