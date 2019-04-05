// okkoma component tika amunanawa

import React, {Component} from 'react'; //this is to remove React. in app export
import CardList from './CardList';
import { robots } from './robots';	//put robots -> {robots} coz robots arn't default
//we can import like {robots, cats, dogs, ...}

import SearchBox from './SearchBox';

class App extends Component{    //changed the function to a class, same App component
    constructor() {
        super()         //if using this.
        this.state = {
            robots: robots, //robots array
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value} )
    }

    render(){
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        //console.log(filterrobots);
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList robots = {filteredrobots} /> {/* pasted from index.js*/}
            </div>
    );
    }
    
}

export default App;