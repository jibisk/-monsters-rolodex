import React from "react";
//import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            monsters : [],
            searchField : ''
        }

//this.handleChange = this.handleChange.bind(this);

    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
}

// handleChange(e){
//     this.setState({ searchField :  e.target.value  });
// }

handleChange = (e) => {
    this.setState({ searchField :  e.target.value  });
}

   render(){
// destructuring
    const { monsters, searchField } = this.state;

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter( monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

       return(
        <div className = "App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
            placeholder="Search Monsters" 
            handleChange={ this.handleChange } 
        />
        <CardList monsters = { filteredMonsters } /> 
        </div>
       )
   }
}

// function App() {
//     return ( 
//         <div className = "App">
//         <header className = "App-header" >
//         <img src = { logo }
//         className = "App-logo"
//         alt = "logo" / >
//         <p> Hello Jibi </p> 
//         <a className = "App-link"
//         href = "https://reactjs.org"
//         target = "_blank"
//         rel = "noopener noreferrer" >
//         Learn React </a> 
//         </header>
//         </div>



                // <header className = "App-header">
                // <img src = { logo }
                // className = "App-logo"
                // alt = "logo" />
                // <p> { this.state.string } </p> 
                // <a className = "App-link"
                // href = "https://reactjs.org"
                // target = "_blank"
                // rel = "noopener noreferrer">
                // Learn React </a> 
                // <button onClick={ () =>{ this.setState({  string: 'hello ccccccc' }) } }>Chnage Text</button>
                // </header>

//     );
// }

export default App;