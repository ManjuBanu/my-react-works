import {MyForm} from './form-table';
import { UpdateTime } from './virtual_dom';
import {Mounting} from './mounting';
import {ApiAxios} from './apicall';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from './notFoundPage';
import styled from 'styled-components';
import React from 'react';
import {AboutMe} from './myself';
import {LinksRouting} from './link-routing';
import {ReduxRedux} from './react-redux';
import {CardShow} from './card-show';
import Assesment1 from './assesment1';
import CharBox from './charBox';
import Person from './person';

const RenderPart = styled.div`
width:800px;
float: left;
margin: 40px 10px 40px 10px;
`;

// const navigate =()=>{
//   this.props.history
// }
export class Routing extends React.Component{
    render(){
        return(
            <>
            <Router>
     <ul>
     <li>
          <Link to="/home">Home</Link>
        </li>
       <li>
         <Link to="/links">LinkRouting</Link>
       </li>
        <li>
          <Link to="/myform">MyForm</Link>
        </li>
        <li>
          <Link to="/updatetime">VirtualDom</Link>
        </li>
        <li>
          <Link to="/mounting">Mounting</Link>
        </li>
        <li>
          <Link to="/apiAxios">API Call</Link>
        </li>
        <li>
          <Link to="/reactRedux">ReduxJs</Link>
        </li>
        <li>
          <Link to="/cardShow">CardShow</Link>
        </li>
        <li>
          <Link to="/assesment1">Assesment1</Link>
        </li>
        <li>
          <Link to="/assesment2">Assesment2</Link>
        </li>
        <li>
          <Link to="/person">Person</Link>
        </li>
      </ul>
     
    <RenderPart>
      <switch>
      <Route path='/home' component={AboutMe}/>
      <Route path="/links" component={LinksRouting}/>
      <Route path="/myform" component={MyForm} />
      <Route path="/updatetime" component={UpdateTime} />
      <Route path="/mounting" component={Mounting} />
      <Route path="/apiAxios" component={ApiAxios} />
      <Route path='/reactRedux' component={ReduxRedux}/>
      <Route path='/cardShow' component={CardShow}/>
      <Route path='/assesment1' component={Assesment1}/>
      <Route path='/assesment2' component={CharBox}/>
      <Route path='/person' component={Person}/>
      {/* <button onclick={navigate}></button>  */}
      </switch>
    </RenderPart>
      </Router>
     </>
        );
    }
}
// {/* <Route component={NotFound} />  */}
