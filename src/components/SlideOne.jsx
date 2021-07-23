import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import Math from "./images/math.png";
import Bio from "./images/bio.png";
import Che from "./images/che.png";
import Lr from "./images/lr.png";
import Ph from "./images/phy.png";
import Ot from "./images/other.png";
import CardOne from "./SlideOneCard";
import { useHistory } from "react-router-dom";
import Slider from "./Slider";
import "./slider.css";

const useStyles = makeStyles((theme) => ({
  textZero: {
    height: "28px",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "100%",
    color: "#25252D",
  },
  textOne: {
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "100%",
    color: "#828282, 100%",
  },
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
    transform: "translate(30vw,-6.8vh)",
    width: "fit-content",
  },
  Stwo: {
    transform: "translateX(-8vw)",
  },
  headingCont: {
    marginTop: "9vh",
  },
  butCont: {
    marginTop: "15.4vh",
  },
  slider: {
    width: "fit-content",
    transform: "translateX(25vw)",
  },
}));

export default function SlideOne(props) {
  const classes = useStyles();
  let history = useHistory();
  const handleIncrement = () => {
    console.log("You clicked next.");
  };
  const handleDecrement = () => {
    history.push("/");
    console.log("You clicked back.");
  };
  const id = props.id;

  return (
    <Container className={`shadow ${classes.card} mb-5 mt-5 bg-white rounded `}>
      <Row>
        <div className={`${classes.slider} mt-3`}>
          <Slider id={id} />
        </div>
      </Row>

      <Row className={classes.headingCont}>
        <Col>
          <Typography className={classes.textZero}>
            What subjects do you specialize in?
          </Typography>
        </Col>
      </Row>
      <br />
      <Row>
        <Typography className={classes.textOne}>
          You can add more than 1 subject
        </Typography>
      </Row>
      <br />
      <br />
      <br />
      <Row className="ml-3">
        <Col>
          <CardOne src={Math} title="Mathematics" />
        </Col>
        <Col>
          <CardOne src={Che} title="Chemistry" />
        </Col>
        <Col>
          <CardOne src={Ph} title="Physics" />
        </Col>
      </Row>
      <br />
      <Row className="ml-3">
        <Col>
          <CardOne src={Bio} title="Biology" />
        </Col>
        <Col>
          <CardOne src={Lr} title="Reasoning" />
        </Col>
        <Col>
          <CardOne src={Ot} title="Others" />
        </Col>
      </Row>
      <Row className={classes.butCont}>
        <Col>
          <div className="text-start" onClick={handleDecrement}>
            <Typography className={classes.textTwo}>Previous</Typography>
          </div>
        </Col>
        <Col className={classes.Stwo}>
          <div className="text-end" onClick={props.Skip}>
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
