import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import {setSearchField } from '../action';



const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange: (event)=> dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users }));
    }
    

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const searchfilter = robots.filter(x => {
            return x.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchchange={onSearchChange} />
                    <Scroll className='ma3'>
                        <CardList  robots={searchfilter} />
                    </Scroll>
                </div>   
            );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);