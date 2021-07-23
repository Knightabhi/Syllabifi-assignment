import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Green from "../images/green.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "10vw",
    height: "25vh",
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
  arrow: {
    color: "rgba(0, 186, 136, 1)",
  },
  textOne: {
    color: "#9DA7BD",
    transform: "translateX(-2vw)",
  },
}));

function NewTasks() {
  const classes = useStyles();
  return (
    <Container className={` ${classes.card} bg-white  pl-2 shadow`}>
      <Row className="w-75 text-start">
        <img src={Green} />
      </Row>
      <Row className="mt-3">
        <Typography variant="caption" className={classes.textOne}>
          New tasks
        </Typography>
      </Row>
      <Row className="mt-2">
        <Col>
          <Typography variant="h4" className={classes.number}>
            12
          </Typography>
        </Col>
        <Col className="mt-1">
          <Typography className={classes.arrow}>
            <AiOutlineArrowRight />
          </Typography>
        </Col>
      </Row>
    </Container>
  );
}

export default NewTasks;
