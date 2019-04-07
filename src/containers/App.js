// okkoma component tika amunanawa

import React, {Component} from 'react'; //this is to remove React. in app export
import CardList from '../components/CardList';
//import { robots } from './robots';	//put robots -> {robots} coz robots arn't default
//we can import like {robots, cats, dogs, ...}

import SearchBox from '../components/SearchBox';

import './App.css';
import Scroll from '../components/Scroll'


class App extends Component{    //changed the function to a class, same App component
    constructor() {
        super()         //if using this.
        this.state = {      //state of this class to render
            robots: [], //robots array
            searchfield: '' //searchfield
        }
    }

    // function to set state
    onSearchChange = (event) => { 
        this.setState( {searchfield: event.target.value} )
        // event.target.value gives the search term
    }

    // pure function check the component did mount
    componentDidMount(){
        //fetch http request through link
        //receive response 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())         //gettin response
            .then(users => this.setState({robots: users}));    //setState according o the response
    }

    render(){
        //removed this.state from assigning this into this look at the this.state assigning 
        const { robots, searchfield } = this.state;
        //filter robots through searchbox
        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
            //filter out robots robot.name(searchbox)
        })
        //console.log(filterrobots);

        //managing tons of users loading... when slow or.... with loading.
        return !robots.length ?
        <h1 className='tc'>Loading...</h1> :
        (    <div className='tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />  {/* set search change event */}
                <Scroll>    {/* wrap component by another component */}
                    <CardList robots = {filteredrobots} /> {/* pasted from index.js*/}  {/* show filtered robots */}
                </Scroll>
            </div>
        );
        
    }
    
}

export default App;