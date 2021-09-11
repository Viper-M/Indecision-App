class Count extends React.Component {
    constructor(props){
        super(props)
        this.addone = this.addone.bind(this)
        this.minusone = this.minusone.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    addone(){
        this.setState((state)=>{
            return {
                count: state.count + 1 
            }
        })
    }
    minusone(){
        this.setState((state)=>{
            return {
                count: state.count - 1 
            }
        })
    }
    reset(){
        this.setState((state)=>{
            return {
                count: 0 
            }
        })
    }
    componentDidMount(){
        var string = localStorage.getItem('count')
        var count = parseInt(string, 10);
        console.log(count)

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    componentDidUpdate(props,state){
        if(state.count !== this.state.count){
            localStorage.setItem('count', this.state.count )
        }
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addone}>+1</button>
                <button onClick={this.minusone}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Count/>,approot)