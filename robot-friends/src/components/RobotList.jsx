import React from "react";

import Card from "./Card";

class RoboList extends React.Component {
    render() {
        return (
            this.props.robots.map((robot,index) => {
                return <Card key= {index} id={robot.id} name={robot.name} email={robot.email} />;
            })
        )
    }
}
export default RoboList;