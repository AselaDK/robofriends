// okkoma component tika amunanawa

import React, {Component} from 'react'; //this is to remove React. in app export
import CardList from './CardList';
//import { robots } from './robots';	//put robots -> {robots} coz robots arn't default
//we can import like {robots, cats, dogs, ...}

import SearchBox from './SearchBox';

import './App.css';

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
        //filter robots through searchbox
        const filteredrobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
            //filter out robots robot.name(searchbox)
        })
        //console.log(filterrobots);

        //managing tons of users loading... when slow or.... with loading.
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />  {/* set search change event */}
                    <CardList robots = {filteredrobots} /> {/* pasted from index.js*/}  {/* show filtered robots */}
                </div>
        );
        }
    }
    
}

export default App;