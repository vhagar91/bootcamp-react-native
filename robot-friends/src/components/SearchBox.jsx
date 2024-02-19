import React from "react";

class SearchBox extends React.Component {
    render() {
        return (
            <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" onChange={this.props.searchChange} placeholder="Search Robot"></input>
            </div>
        )
    }
}
export default SearchBox;