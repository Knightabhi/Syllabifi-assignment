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
    background: "#FCFBFD",
  },
  label: {},
  textOneOne: {},
  img: {},
  Soneone: {},
  Stow: {},
}));

function CardTwo(props) {
  const classes = useStyles();
  return (
    <Container className={`p-3 rounded ${classes.main}`}>
      <Row>
        <Col className="text-start">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="English"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-middle">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Telagu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-end">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="French &nbsp;"
            labelPlacement="end"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Hindi"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-middle">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Tamil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-end">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="German"
            labelPlacement="end"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Marathi"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-middle">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Kashmiri&nbsp;&nbsp;&nbsp;&nbsp;"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-end">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Spanish"
            labelPlacement="end"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Kanada"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-middle">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Malayalum"
            labelPlacement="end"
          />
        </Col>
        <Col className="text-end">
          <FormControlLabel
            value="top"
            control={
              <VioletCheckbox
                name="checkedG"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Russian"
            labelPlacement="end"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CardTwo;
