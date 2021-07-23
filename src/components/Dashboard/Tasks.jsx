import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "52vw",
    height: "80vh",
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

function Task() {
  const classes = useStyles();
  return (
    <Container className={` ${classes.card} bg-white  pl-2 shadow`}></Container>
  );
}

export default Task;
