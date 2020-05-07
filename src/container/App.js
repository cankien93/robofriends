import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import {setSearchField, requestRobots } from '../action';



const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange: (event)=> {
            dispatch(setSearchField(event.target.value));
            console.log(event.target.value)
        },
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {


    componentDidMount() {
        this.props.onRequestRobots();
    }
    

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const searchfilter = robots.filter(x => {
            return x.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(isPending) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 style={{color:'lightblue'}}>ROBOFRIENDS</h1>
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