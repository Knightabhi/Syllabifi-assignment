import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CardTwo from "./SlideTwoCard";
import { useEffect } from "react";
import Slider from "./Slider";

const useStyles = makeStyles((theme) => ({
  textZero: {
    height: "28px",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "100%",
    color: "#25252D",
  },
  textOne: {},
  textTwo: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "100%",
    textTransform: "capitalize",
    color: "#8759F2",
    cursor: "pointer",
  },
  card: {
    width: "67.43vw",
    height: "85.18vh",
    paddingLeft: "4.83vw",
    paddingRight: "4.83vw",
    marginTop: "7.53vh",
  },
  submit: {
    background: "#8759F2",
    marginTop: "25px",
    width: "6vw",
  },
  Sone: {
    paddingLeft: "0",
  },
  Sthree: {
    transform: "translate(30vw,-19.5vh)",
    width: "fit-content",
  },
  Stwo: {
    transform: "translateX(-8vw)",
  },
  headingCont: {
    marginTop: "9vh",
  },
  butCont: {
    marginTop: "18.4vh",
  },
  textField: {
    width: "23.43vw",
    borderColor: "#362381, 20%",
    border: "1px",
  },
  textFieldOne: {
    width: "6vw",
    borderColor: "#362381, 20%",
    border: "1px",
  },
  submitone: {
    background: "#FFFFFF",
    width: "32px !important",
    height: "32px !important",
  },
  submitTwo: {
    marginTop: "25px",
    color: "#8759F2",
    border: "1px solid #8759F2",
    height: "5vh",
  },
  pad: {
    paddingLeft: "9.83vw",
    paddingRight: "9.83vw",
  },
  navi: {
    transform: "translateY(-12.5vh)",
  },
  slider: {
    width: "fit-content",
    transform: "translateX(15vw)",
  },
}));

function Sample(props) {
  const id = props.id;
  const classes = useStyles();
  return (
    <Container className={`shadow ${classes.card} mb-5 mt-5 bg-white rounded `}>
      <Row>
        <div className={`${classes.slider} mt-3`}>
          <Slider id={id} />
        </div>
      </Row>
      <Row className={`${classes.headingCont} mb-3`}>
        <Col>
          <Typography className={classes.textZero}>Sample</Typography>
        </Col>
      </Row>
      <Row className={classes.butCont}>
        <Col>
          <div
            className={`${classes.navi} text-start`}
            onClick={props.Decrement}
          >
            <Typography className={classes.textTwo}>Previous</Typography>
          </div>
        </Col>
        <Col className={classes.Stwo}>
          <div className={`${classes.navi} text-end`} onClick={props.Skip}>
            <Typography className={classes.textTwo}>Skip</Typography>
          </div>
          <div className={classes.Sthree}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.Increment}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Sample;
