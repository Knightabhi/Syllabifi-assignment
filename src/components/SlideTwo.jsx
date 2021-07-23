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

const cont = {
  counter: 1,
};
export default function SlideTwo(props) {
  const [Count, setCount] = useState(cont);
  const classes = useStyles();
  const increment = () => {
    setCount({
      counter: Count.counter + 1,
    });
  };
  const decrement = () => {
    if (Count.counter > 1) {
      setCount((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };
  // useEffect(() => {
  //   increment();
  //   decrement();
  // });
  const id = props.id;
  console.log(Count.counter);
  return (
    <Container className={`shadow ${classes.card} mb-5 mt-5 bg-white rounded `}>
      <div className={classes.pad}>
        <Row>
          <div className={`${classes.slider} mt-3`}>
            <Slider id={id} />
          </div>
        </Row>
        <Row className={`${classes.headingCont} mb-3`}>
          <Col>
            <Typography className={classes.textZero}>
              Set your Prefrences
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col className="text-start">
            <FormControl className={classes.textField}>
              <Typography variant="caption" className="mb-2">
                Set your User Name*
              </Typography>
              <TextField
                id="outlined-start-adornment"
                placeholder="eg. John de"
                label=""
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col className="text-start">
            <Typography variant="caption" className="mb-2">
              Set your daily hours* &nbsp; &nbsp;&nbsp;&nbsp;
            </Typography>
            <FormControl className={`${classes.textFieldOne} mt-1`}>
              <TextField
                id="outlined-start-adornment"
                label=""
                variant="outlined"
                inputProps={{ min: 1, style: { textAlign: "center" } }}
                InputProps={{
                  readOnly: true,
                }}
                value={`${Count.counter}`}
              />
            </FormControl>
            &nbsp; &nbsp;
            <Button
              variant="outlined"
              style={{
                maxWidth: "36px",
                maxHeight: "36px",
                minWidth: "32px",
                minHeight: "32px",
              }}
              className={`${classes.submitone} mt-2`}
              id="minus"
              onClick={decrement}
            >
              -
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="outlined"
              style={{
                maxWidth: "36px",
                maxHeight: "36px",
                minWidth: "32px",
                minHeight: "32px",
              }}
              className={`${classes.submitone} mt-2`}
              id="plus"
              onClick={increment}
            >
              +
            </Button>
          </Col>
        </Row>
        <Row className="text-start mb-2 mt-2  ">
          <Typography>Choose your preferred languages</Typography>
        </Row>
        <Row>
          <CardTwo />
        </Row>
        <Row>
          <Col className="text-start w-75" xs="auto">
            <br />
            <div className="w-75">
              <Typography>
                Do you have a Pen-tablet/i-pad with stylus/ android tablet with
                stylus?
              </Typography>
            </div>
          </Col>
          <Col className="text-end">
            <div className={classes.Sfour}>
              <Button
                type="submit"
                variant="outlined"
                size="small"
                color="primary"
                className={classes.submitTwo}
              >
                Yes
              </Button>
            </div>
          </Col>
          <Col className="text-end">
            <div className={classes.Sfour}>
              <Button
                type="submit"
                variant="outlined"
                size="small"
                color="primary"
                className={classes.submitTwo}
              >
                N0
              </Button>
            </div>
          </Col>
        </Row>
      </div>
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
