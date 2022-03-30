import React, { Component } from 'react';
import './App.css';
import { reduxStore, INCREMENT, DECREMENT } from './redux-store';
import { Provider } from 'react-redux';


export class ReduxRedux extends Component{
    increment = ()=>{
        const output=reduxStore.dispatch({type:INCREMENT});
        console.log(reduxStore.getState())
        return output;
    }
    decrement =()=>{
        reduxStore.dispatch({type:DECREMENT});
        console.log(reduxStore.getState())
    }
    push=()=>{
        reduxStore.dispatch({type:'push',value:Math.random()});
        console.log(reduxStore.getState())
    }
    pop=()=>{
      reduxStore.dispatch({type:'pop'});
        console.log(reduxStore.getState())
        
    }

    render(){
        return(
            <Provider store={reduxStore}>
            <div className="virtualDom">
           <h2>ReactRedux</h2>
           <h5>Hit the button to see the chenges</h5>
           <button onClick={this.increment}>INCREMENT</button><br></br>
           <button onClick={this.decrement}>DECREMENT</button><br></br>
           <button onClick={this.push}>PUSH</button><br></br>
           <button onClick={this.pop}>POP</button>
            </div>
            </Provider>
        )
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         increment:()=>{
//             reduxStore.dispatch({type:INCREMENT});
//             console.log(reduxStore.getState())
//         },
//         decrement:()=>{
//             reduxStore.dispatch({type:DECREMENT});
//             console.log(reduxStore.getState())
//         },
//         // push:()=>{
//         //     reduxStore.dispatch({type:'push',value:Math.random()});
//         //     console.log(reduxStore.getState())
//         // },
//         // pop:()=>{
//         //   reduxStore.dispatch({type:'pop'});
//         //     console.log(reduxStore.getState())
            
//         // }
//     }
//     }
//     const mapStateToProps = (state)=>{
//         return{
//             connectCounter:state.counter.count,
//         }
//     }

//     export default connect(mapStateToProps,mapDispatchToProps)(Hello);


    