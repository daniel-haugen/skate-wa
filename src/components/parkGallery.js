import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Container, Button, CardDeck } from "react-bootstrap";
import ParkCard from './parkCard'

class ParkGallery extends React.Component {
  render() {
    return (
      <Container fluid>
      <CardDeck>
        <ParkCard />
        <ParkCard />
        <ParkCard />
        <ParkCard />
        <ParkCard />
      </CardDeck>
      </Container>
    );
  }
}

export default ParkGallery;
