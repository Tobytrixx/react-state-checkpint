import './App.css';
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

/*declaration of class component with initial state and various functions*/
class App extends Component {
  state = {
    fullname: "Abiodun Olanipekun",
    bio: "Believe!!!",
    imgSrc: "https://pbs.twimg.com/profile_images/1663999227268067328/NoIg4tuM_400x400.jpg",
    profession: "IT Consultanat/Digital Artist",
    shows: false,
    time: 0,
  };
/*Calling the handlesShows method*/
  handleShows = () =>{
    // alert(this.state.time);
    this.setState({
      shows: !this.state.shows,
    });}

  mountTime = () => {
    this.setState((prev)=>({time:prev.time+1}))
  }

  componentDidMount() {
    setInterval(() => { this.mountTime() }, 1000)
  }

  render() {
    let showcard;
    this.state.shows
      ? (showcard = { display: "none" })
      : (showcard = { display: "block" });

    return (
      <>
        <div className="shows"></div>
        <Card style={{ width: "18rem" }}>
          <Card.Img style={showcard} variant="top" src={this.state.imgSrc} />
          <Card.Body>
            <Card.Title style={showcard}>{this.state.fullname}</Card.Title>
            <Card.Text style={showcard}>{this.state.bio}</Card.Text>
            <Card.Text style={showcard}>{this.state.profession}</Card.Text>
            <Button variant="primary" onClick={this.handleShows}>
              Expand / Collapse
            </Button>
            <Card.Text style={showcard}>Component was mounted {this.state.time} seconds ago</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default App;
