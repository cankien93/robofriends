import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users }));
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) 
    }

    render(){
        const {robots, searchfield} = this.state;
        const searchfilter = robots.filter(x => {
            return x.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchchange={this.onSearchChange} />
                    <Scroll>
                        <CardList  robots={searchfilter} />
                    </Scroll>
                </div>   
            );
        }
    }
};

export default App;