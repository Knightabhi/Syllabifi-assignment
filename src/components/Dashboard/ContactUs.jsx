import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "20.43vw",
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
    fontWeight: 600,
  },
  textTwo: {
    color: "rgba(38, 38, 38, 1)",
  },
  textThree: {
    color: "rgba(38, 38, 38, 1)",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Container className={` ${classes.card} bg-white  pl-2 shadow`}>
      <Row className="w-75 text-start">
        <Typography variant="h6" className={classes.textOne}>
          Contact Us
        </Typography>
      </Row>
      <Row className="mt-3 text-start">
        <Typography variant="body2" className={classes.textTwo}>
          <ImPhone /> +91 9986 756 4364
        </Typography>
      </Row>
      <Row className="mt-1 text-start">
        <Typography variant="body2" className={classes.textTwo}>
          &nbsp; &nbsp;020 - 27656769
        </Typography>
      </Row>
      <Row className="mt-3 text-start">
        <Typography variant="body2" className={classes.textTwo}>
          <MdEmail />
          &nbsp; support@syllabify.com
        </Typography>
      </Row>
      <Row className="mt-3 text-start">
        <Typography variant="body1" className={classes.textThree}>
          Follow us:
        </Typography>
      </Row>
    </Container>
  );
}

export default Contact;
