import React from 'react';
import './App.css';


export class UpdateTime extends React.Component<{}, { localDate: any, locatTime: any }>{
    constructor(props: any) {
        super(props);
        this.state = {
         localDate:new Date().toLocaleDateString(),
         locatTime:new Date().toLocaleTimeString(),
        };
        this.onTimeChange = this.onTimeChange.bind(this);
    }

 onTimeChange:any = () =>{ setInterval(() => {

     console.log('triggered');
        this.setState({
            localDate:new Date().toLocaleDateString(),
         locatTime:new Date().toLocaleTimeString(),
        })
    }  
    ,2000);
}


    render(){
        return(
            <div className="virtualDom">
            <h1>VIRTUAL DOM </h1>
            <h3>It will only render the changes</h3>
            <p>{this.state.localDate}</p>
            <p onChange={this.onTimeChange()} >{this.state.locatTime}</p>
            </div>
        )
    }
}



// export  function UpdateTime() {
//     const localDate = new Date().toLocaleDateString();
//     const locatTime =new Date().toLocaleTimeString();
//     return(
//     <div className="virtualDom">
//     <h1>VIRTUAL DOM </h1>
//     <h3>It will only render the changes</h3>
//     <p>{localDate}</p>
//     <p>{locatTime}</p>
//     </div>
// );
//     }
// setInterval(UpdateTime,2000);




    