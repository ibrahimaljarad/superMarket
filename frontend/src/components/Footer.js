import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="tex-center py-3">Copyright &Copy; SuperMarket</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
