import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const StyledDiv = styled.div`
background-color:goldenrod;
width:400px;
text-align: center;
float: left;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: whitesmoke;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export class ApiAxios extends React.Component{
    constructor(){
        super();
        this.state ={
            getResults :[],
            postResults :{title:'INITIAL'}
        }
    }

render(){
    var size = 10;
    return(
        <StyledDiv>
            <h2>API calls Using Axios</h2>
            <Button onClick={this.get}>GET</Button>
            <Button onClick={this.post}>POST</Button>
            {this.state.postResults.title}
            {this.state.getResults.slice(0, size).map(x =><div>{x.title}</div>)}
        </StyledDiv>
    );
}
get = ()=>{
axios.get('/posts').then(result =>{
    console.log('getresults',result.data);
    this.setState({getResults : result.data})
})
}
post = ()=>{
    axios.post('/posts',{ 
        title:'POST',
        body:'hgghvkjhb',
        userId:1,
    }).then(result =>{
        console.log('postresults',result.data);
        this.setState({postResults : result.data})
    })
    }
}