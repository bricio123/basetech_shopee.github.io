import React from "react";
import { Modal, Button, Navbar } from "react-bootstrap";
import NavBarN from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

function adapatadorHDMIDisplayPort() {
  return (
    <>
      <NavBarN />
      <Container>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJ-ZBUVi-5YLGAvxqE7T_m2L6BmLKfKGP4FTKEtf73Sqx5PA/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
   margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;


  iframe {
    display: flex;
    height: 1400px;
    width: 100%;
  }
`;

export default adapatadorHDMIDisplayPort;



