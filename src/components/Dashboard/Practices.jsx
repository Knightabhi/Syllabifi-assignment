import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "52vw",
    height: "54.5vh",
    paddingTop: "3vh",
    paddingBottom: "4.5vh",
    verticalAlign: "middle",
    borderRadius: "10px",
  },
  comp: {
    verticalAlign: "middle",
  },
  compt: {
    verticalAlign: "middle",
    transform: "translateX(-4.5vw)",
  },
}));

function Practices() {
  const classes = useStyles();
  return (
    <Container className={` ${classes.card} bg-white  pl-2 shadow`}>
      <Row className="mb-3 mt-2 text-start">
        <Typography variant="h4">Best Practices </Typography>
      </Row>
      <br />
      <Row className="mb-3 mt-2  border-bottom p-2">
        <Col className="text-start">
          {" "}
          <Typography variant="h6">Tips for Solving questions </Typography>
        </Col>
        <Col className="text-end">
          {" "}
          <Typography variant="h4">+</Typography>
        </Col>
      </Row>
      <Row className="mb-3 mt-2  border-bottom p-2">
        <Col className="text-start">
          <Typography variant="h6">How many seats are available? </Typography>
        </Col>
        <Col className="text-end">
          {" "}
          <Typography variant="h4">+</Typography>
        </Col>
      </Row>
      <Row className="mb-3 mt-2 text-start border-bottom p-2">
        <Col className="text-start">
          <Typography variant="h6">Strategies for error finding </Typography>
        </Col>
        <Col className="text-end">
          {" "}
          <Typography variant="h4">+</Typography>
        </Col>
      </Row>
      <Row className="mb-3 mt-2 text-start border-bottom p-2">
        <Col className="text-start">
          <Typography variant="h6">How to make Video solutions</Typography>
        </Col>
        <Col className="text-end">
          {" "}
          <Typography variant="h4">+</Typography>
        </Col>
      </Row>
    </Container>
  );
}

export default Practices;
