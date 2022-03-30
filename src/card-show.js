import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBar} from './components/search-bar/search-bar';



export class CardShow extends Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField:'',
        };
    }

    handleChange = (e)=> {this.setState({searchField : e.target.value})}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>this.setState({monsters:users}));
    }

    render(){
        const {monsters , searchField } =this.state;
        const filteredMonsters =  monsters.filter(filteredMonster => 
            filteredMonster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        /** this is equ  to below 2 lines  */
        // const monsters = this.state.monsters;        
        // const searchField =this.state.searchField;
        return(
            <div>
            <h1>monsters</h1>
            <SearchBar placeholder='Search Monster' handleChange={this.handleChange}/>
            <CardList monsters={filteredMonsters}>
            </CardList>
            </div>
        );
    }
}