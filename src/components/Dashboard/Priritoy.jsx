import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Pri from "../images/priri.png";
import { RiFilePaper2Fill } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "30vw",
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
}));

function Prio() {
  const classes = useStyles();
  return (
    <Container className={` ${classes.card} bg-white  pl-2 shadow`}>
      <Row>
        <Col className={`${classes.comp} text-start `}>
          <img src={Pri} />
          <RiFilePaper2Fill />
        </Col>
      </Row>
      <Row className={`${classes.compt} text-start `}>
        <Typography variant="h5" component="h5">
          See What’s on priority?
        </Typography>
      </Row>
      <Row className={classes.comp}>
        <Typography variant="caption">
          Complete 12 rejected questions to earn ₹ 30/q
        </Typography>
      </Row>
    </Container>
  );
}

export default Prio;
