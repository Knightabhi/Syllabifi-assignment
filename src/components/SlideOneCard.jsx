import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const VioletCheckbox = withStyles({
  root: {
    color: "#929296, 100%",
    "&$checked": {
      color: "#8759F2",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#FCFBFD  !important",
    border: "1px solid #EEEAF9",
    boxSizing: "border-box",
    borderRadius: "16",
    width: "18.15vw",
    height: "13.6vh",
    margin: "0 !important",
    padding: "8px !important",
  },
  label: {},
  textOneOne: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "100%",
  },
  img: {
    width: "8vw",
    height: "12vh",
    transform: "translate(-16px,-2px)",
    overflow: "hidden",
    borderRadius: "8px",
  },
  Soneone: {
    transform: "translateX(-50%)",
    marginTop: "4.58vh",
  },
  Stow: {
    transform: "translate(3.3vw,-8vh)",
  },
  checked: {
    border: "1px solid #8759F2",
  },
}));

function CardOne(props) {
  const classes = useStyles();
  const src = props.src;
  const title = props.title;
  const handleChange = () => {
    console.log("good");
    document.getElementById("check").className += `${classes.checked}`;
  };
  return (
    <Container className={`p-2 rounded ${classes.main}`} id="check">
      <Row>
        <Col>
          <div className={classes.img}>
            <img src={src} />
          </div>
        </Col>
        <Col className={classes.label}>
          <div className={classes.Soneone}>
            <Typography className={classes.textOneOne}>{title}</Typography>
          </div>
          <div className={classes.Stow}>
            <FormControlLabel
              control={
                <VioletCheckbox
                  name="checkedG"
                  icon={<CheckBoxOutlineBlankIcon fontSize="medium" />}
                  checkedIcon={<CheckBoxIcon fontSize="medium" />}
                  onChange={handleChange}
                />
              }
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CardOne;
