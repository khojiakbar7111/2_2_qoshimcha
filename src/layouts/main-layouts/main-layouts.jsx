import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import styled from "styled-components";
export const MainLayouts = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
        <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
 
`
