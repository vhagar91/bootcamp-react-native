import React from "react";
import RoboList from "./components/RobotList";
import SearchBox from "./components/SearchBox";
import { robots } from "./database/robots";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots,
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
                <h1 > Los Robertos</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <RoboList robots={robotsFiltered} />
            </div>
        )
    }
}
export default App;