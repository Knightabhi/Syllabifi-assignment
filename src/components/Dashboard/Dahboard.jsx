import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Money from "./Money";
import Prio from "./Priritoy";
import Ion from "../images/logo.png";
import { CgProfile } from "react-icons/cg";
import { GiSuitcase } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { RiWallet3Fill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import User from "../images/user.png";
import NewTasks from "./NewTasks";
import Contact from "./ContactUs";
import Task from "./Tasks";
import PP from "./PP";
import Leader from "./Leader";
import Practices from "./Practices";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    height: "fit-content",
    overflow: "hidden",
  },
  header: {
    background: "#fff",
    height: "7.3vh",
    width: "99vw",
    overflow: "hidden",
  },
  sidenav: {
    height: "200vh",
    width: "14.6412vw",
    background: "#fff",
    border: "1px solid #DFE1E6",
    transform: "translate(2px,-7.3vh)",
    zIndex: "4",
    overflow: "hidden",
  },
  icon: {
    height: "50px",
    width: "50px",
  },
  head: {
    transform: "translate(-30px,0)",
    fontWeight: "600",
  },
  sidenavlink: {
    color: "#5B5B61",
    fontWeight: "600",
    cursor: "pointer",
    paddingTop: "3%",
    "&:hover": {
      background: "#EEEAF9",
    },
    height: "5vh",
    width: "90%",
    marginLeft: "10%",
    transition: "all 0.4s",
  },
  sidelinkative: {
    fontWeight: "600",
    cursor: "pointer",
    paddingTop: "3%",
    background: "#EEEAF9",
    color: "#8759F2",
    height: "5vh",
    width: "90%",
    marginLeft: "10%",
    transition: "all 0.4s",
  },
  money: {
    position: "absolute",
    left: "76.5vw",
    top: "25vh",
  },
  prio: {
    position: "absolute",
    left: "20.5vw",
    top: "25vh",
  },
  user: {
    background: "#F7F5FC",
    width: "10vw",
    borderRadius: "1000px",
    height: "5vh",
    verticalAlign: "middle",
  },
  headercont: {
    width: "30vw",
    transform: "translate(68vw,1vh)",
  },
  newtask: {
    position: "absolute",
    left: "52.5vw",
    top: "25vh",
  },
  contact: {
    position: "absolute",
    left: "76.5vw",
    bottom: "5vw",
  },
  task: {
    position: "absolute",
    left: "20.5vw",
    top: "57vh",
  },
  pp: {
    position: "absolute",
    left: "76.5vw",
    top: "40vh",
  },
  leader: {
    position: "absolute",
    left: "76.5vw",
    top: "95vh",
  },
  practices: {
    position: "absolute",
    left: "20.5vw",
    top: "143vh",
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.headercont}>
          <Container>
            <Row>
              <Col>
                <Typography>2500 &nbsp; &nbsp; XP </Typography>
              </Col>
              <Col>
                <Typography>2500 &nbsp; &nbsp; XP </Typography>
              </Col>
              <Col>
                <Typography variant="h5">
                  <MdNotificationsActive />
                </Typography>
              </Col>
              <Col>
                <div className={classes.user}>
                  <Typography>Nishata</Typography>
                  <img src={User} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={classes.sidenav}>
        <Container>
          <Row>
            <Col className="pt-1">
              <img src={Ion} className={classes.icon} />
            </Col>
            <Col className="pt-3 text-start">
              <Typography variant="h5" className={classes.head}>
                Company
              </Typography>
            </Col>
          </Row>
          <br />
          <Row className="mb-2 text-start mt-2">
            <Typography variant="body1" className={classes.sidelinkative}>
              <MdDashboard /> &nbsp;Dashboard
            </Typography>
          </Row>
          <Row className="mb-2 text-start">
            <Typography variant="body1" className={classes.sidenavlink}>
              <GiSuitcase />
              &nbsp; Tasks
            </Typography>
          </Row>
          <Row className="mb-2 text-start">
            <Typography variant="body1" className={classes.sidenavlink}>
              <GrDocumentPerformance /> &nbsp;Performance
            </Typography>
          </Row>
          <Row className="mb-2 text-start">
            <Typography variant="body1" className={classes.sidenavlink}>
              <RiWallet3Fill />
              &nbsp; Earning
            </Typography>
          </Row>
          <Row className="mb-2 text-start">
            <Typography variant="body1" className={classes.sidenavlink}>
              <CgProfile /> Profile
            </Typography>
          </Row>
        </Container>
      </div>
      <div className={classes.money}>
        <Money />
      </div>
      <div className={classes.prio}>
        <Prio />
      </div>
      <div className={classes.newtask}>
        <NewTasks />
      </div>
      <div className={classes.contact}>
        <Contact />
      </div>
      <div className={classes.task}>
        <Task />
      </div>
      <div className={classes.pp}>
        <PP />
      </div>
      <div className={classes.leader}>
        <Leader />
      </div>
      <div className={classes.practices}>
        <Practices />
      </div>
    </div>
  );
}

export default Dashboard;
