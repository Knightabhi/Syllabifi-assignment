import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Coin from "../images/coin.png";
import { BiRupee } from "react-icons/bi";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "20.43vw",
    height: "9vh",
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

function Money() {
  const classes = useStyles();
  return (
    <Container className={` ${classes.card} bg-white  pl-2`}>
      <Row>
        <Col className={`${classes.comp} text-start `}>
          <img src={Coin} />
        </Col>
        <Col className={`${classes.compt} text-start `}>
          <Typography variant="h6" component="h6">
            {" "}
            255
          </Typography>
        </Col>
        <Col className={classes.comp}>
          INR(
          <BiRupee />)
        </Col>
      </Row>
    </Container>
  );
}

export default Money;
