import { Component } from "react";

class Hello extends Component{
    render(){
        return(
    <div className="virtualDom">
           <h2>ReactRedux</h2>
           <button onClick={props.increment}>INCREMENT</button><br></br>
           <button onClick={props.decrement}>DECREMENT</button><br></br>
           Hello{props.name}!! {props.connectCounter}
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        increment:()=>{
            reduxStore.dispatch({type:INCREMENT});
            console.log(reduxStore.getState())
        },
        decrement:()=>{
            reduxStore.dispatch({type:DECREMENT});
            console.log(reduxStore.getState())
        },
        // push:()=>{
        //     reduxStore.dispatch({type:'push',value:Math.random()});
        //     console.log(reduxStore.getState())
        // },
        // pop:()=>{
        //   reduxStore.dispatch({type:'pop'});
        //     console.log(reduxStore.getState())
            
        // }
    }
    }
    const mapStateToProps = (state)=>{
        return{
            connectCounter:state.counter.count,
        }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(Hello);