import React from 'react';
import manju from './manju.jpg';

let counter =0;
const count=counter+1;
export class Mounting extends React.Component<{}, {name:any, imgshow:any, divshow:any,cycleshow:boolean}>{
    
    constructor(props:any){
        super(props);
        this.state = {
            name: "my name" ,
            imgshow: false,
            divshow:false,
            cycleshow:false,
        }
console.log("constructor ::" + count);

    }
   
    clickMe = ()=>{
        const name= Math.random();
        this.setState({name:"App"+name,
        imgshow : !this.state.imgshow,
        divshow : !this.state.divshow
        })
    }

    lifeCycleClick = ()=>{
        const name= Math.random();
        this.setState({name:"App"+name,
        cycleshow : !this.state.cycleshow
        })
    }

    // static getDerivedStateFromProps(){
    //     counter=counter++,
    //     console.log("getDerivedStateFromProps :: "+ counter);
    //     return this;
    // }
    shouldComponentUpdate(_nextProps: any,_NextState: any){
        console.log("shouldComponentUpdate :: "+ counter+1);
        return true;  //if it return false remaining methods won't run
    }
render(){
    console.log("render")
    return(
        <React.Fragment>
        <div className="mountingDiv">
            {this.state.imgshow && 
            <>
            <h2>I am here !!!</h2>
            <img src={manju} className="mypic" alt="logo" 
            />
            
            </>
                }
                <br/>
            <button onClick={this.clickMe}>ME?</button>
            {this.state.divshow && 
            <div className="mountingDiv1">
                {this.state.cycleshow &&
            <>
            <h3>LifeCycle</h3>
            <p>Let's see Component Life Cycle in console</p>
            </>}
            <button onClick={this.lifeCycleClick}>CLF Click</button>
          </div>}
        </div>
        </React.Fragment>
    );
}
componentDidMount(){
    console.log("ComponentDidMount  ")
}

getSnapshotBeforeUpdate(_prevProps: any,_prevState: any ){
console.log("getSnapshotBeforeUpdate :: " +count);
return null;
}

componentDidUpdate(_prevProps: any,_prevState: any, _snapShot: any){
    console.log("componentDidUpdate :: " +count); 
}
componentWillUnmount(){
    console.log("componentWillUnmount :: " +count); 
}

componentDidCatch(_error: any , _info: any){
    console.log("componentDidCatch :: " +count); 
}
}
