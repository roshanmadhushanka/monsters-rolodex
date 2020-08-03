import React, {Component} from 'react';
import './App.css';
import MonsterService from "./service/MonsterService";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        MonsterService.getMonsters()
            .then(response => {
                this.setState({monsters: response})
            })
    }

    handleOnChange = (e) => {
        /**
         * Arrow function automatically set the context to "this" where it originally defined.
         * So we don't need to explicitly bind the method with "this"
         */
        this.setState({
            searchField: e.target.value,
        })
    }


    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1> Monster Rolodex </h1>
                <SearchBox placeholder='Search Monster' handleChange={this.handleOnChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
