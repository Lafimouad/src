import React from "react";

import { Row, Col } from "react-flexbox-grid";
import wattpad from "../../assets/imgs/wattpad.png";

function Footer() {
  return (
    <footer>
      <div className="content">
        <Row center="xs" middle="xs">
          <Col xs={4}>
            <img src={wattpad} className="content_logo" alt="Mouadh"/>
        
          </Col>
          <Col xs={8} className="techfolio_copyright">Developed with Love by –– Mouadh Lafi</Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
