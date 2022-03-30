import React from 'react';
import { BrowserRouter,Link, Route } from 'react-router-dom';
import styled from 'styled-components';


const ChildRender = styled.div`
width:100px;
height:100px;
background-color:lightpink;
text-align:center;
`;


export class LinksRouting extends React.Component{
    constructor(props:any){
        super(props);
        this.state={
            name:'Links'
        }
    }


    menu=[{name:'1',path:'/1'},{name:'2',path:'/2'},{name:'3',path:'/3'} ];

    render(){
        // const navigate =()=>{
        //     this.props.history
        // }
        return(
            <BrowserRouter>
            {this.menu.map((x,i)=><Link to={x.path} key={i}>{x.name}<br/></Link>)}
            <ChildRender>
            <switch>
      <Route path="/1" children={1}/>
      <Route path="/2" children={2} />
      <Route path="/3" children={3} />
      <Route path="/4" children={4} />
      <Route path="/5" children={5} />
      {/* <Button onclick={navigate}></Button> */}
      </switch>
      </ChildRender>
            </BrowserRouter>
           
        );
    }
}