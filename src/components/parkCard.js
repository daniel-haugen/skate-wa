import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Container, Button, CardDeck, Card } from "react-bootstrap";


class ParkCard extends React.Component {
  render() {
    return (
    <Card>
      <Card.Title>Lower Woodland</Card.Title>
      <Card.Text>Address:</Card.Text>
      <Card.Img src="http://www.skatedesign.com/images/seattle_4866.jpg"></Card.Img>
      <Card.Text>Greenlake is a shitty park</Card.Text>
      <Card.Text>Difficulty: Beginner to Advanced</Card.Text>
      <Card.Text>Street/Vert: Both street section and bowl section.</Card.Text>
    </Card>
    )
  };
}

export default ParkCard;
