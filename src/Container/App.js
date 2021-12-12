import React , {Component} from "react";
// import {robots} from './robots.js';
import CardList from '../Component/CardList';
import SearchBox from "../Component/SearchBox";
import  './App.css';
import Scroll from '../Component/Scroll';
// import reactDom from "react-dom";




class App extends Component {
    constructor (){
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
           return response.json();
        })
        .then(users =>{
            this.setState({robots:users})
        });
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value})
    }


    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length===0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className = 'tc'>
                    <h1 className = 'f1'>RoborFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange} />
                    <Scroll>
                        <CardList  robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }

}


export default App ;