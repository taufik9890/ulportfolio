import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10}>
            <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Portfolio />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
