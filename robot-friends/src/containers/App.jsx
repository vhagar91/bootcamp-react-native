import { useState, useEffect } from "react";
import RoboList from "../components/RobotList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    const [count, setCount] = useState(0);

    const onSearchChange = (event) => {
        console.log(event.target.value);
        setSearchFilter(event.target.value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => setRobots(users));
    },[count]) // Only changes if count change

    const robotsFiltered = robots.filter(robot => {
        return robot.name.includes(searchFilter);
    });

    return (
        <div className="tc">
            <h1 className="xbox-logo"> Los Robertos</h1>
            <button onClick={()=> setCount(count +1)}>Click Me</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <RoboList robots={robotsFiltered} />
                </ErrorBoundry>
            </Scroll>
        </div>
    )



}
export default App;