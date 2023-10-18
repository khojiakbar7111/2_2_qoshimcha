import { Container, Stack } from "@mui/system";
import React from "react";
import { HeaderButtuns } from "./components/header-buttuns";
import { HeaderSearch } from "./components/header-search";
import { HeaderTop } from "./style";
import { Navbar } from "./components/navbar";
export const Header = () => {
  return (
    <HeaderTop>
      <Container>
        <Stack direction="row">
          <HeaderSearch />
          <HeaderButtuns />
        </Stack>
      </Container>
     <Container>
     <Navbar/>
     </Container>
    </HeaderTop>
  );
};
