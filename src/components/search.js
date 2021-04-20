import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Container, Button } from "react-bootstrap";

class Search extends React.Component {
  render() {
    return (
      <Container fluid>
        <Form style={{ backgroundColor: "lightgrey" }}>
          <Form.Label className="h5 mt-3">Search</Form.Label>
          <Form.Control
            style={{ width: "300px" }}
            placeholder="enter city"
          ></Form.Control>
          <Button>Search</Button>
        </Form>
      </Container>
    );
  }
}

export default Search;
