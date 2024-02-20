import React from "react";
import RoboList from "./components/RobotList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFilter: ''
        }
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchFilter: event.target.value });

    }

    render() {
        const robotsFiltered = this.state.robots.filter(robot => {
            return robot.name.includes(this.state.searchFilter);
        });

        return (
            <div className="tc">
                <h1 className="xbox-logo"> Los Robertos</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <RoboList robots={robotsFiltered} />
                </Scroll>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
}
export default App;