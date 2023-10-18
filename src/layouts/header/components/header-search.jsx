import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../config/site-path";
import Logo from "../../../assets/img/logo.svg";
import { COLORS } from "../../../config/colors";
import { HeaderInput, HeaderInputBlock, CustomLink } from "../style";
import { SearchIcon } from "../../../assets/icons/searchIcon";
export const HeaderSearch = () => {
  let searchInput = e => {
    e.preventDefault();
  };
  return (
    <Stack
      pr="64px"
      borderRight={`1px solid ${COLORS.lunarRock}`}
      alignItems={"center"}
      gap="53px"
      maxWidth="1153px"
      width="100%"
      direction="row">
      <Link to={PATHS.home}>
        <img src={Logo} alt="logo" />
      </Link>
      <HeaderInputBlock>
        <form onSubmit={searchInput}>
          <HeaderInput
            type={"search"}
            name="search"
            autoComplete="off"
            placeholder="Что вы хотите найти?"
          />
          <span className="search">
            <SearchIcon />
          </span>
        </form>
      </HeaderInputBlock>
      <CustomLink>
        <a href="tel:+9998901270201">+7 (4932) 11-22-33</a>
        <p>Обратный звонок</p>
      </CustomLink>
    </Stack>
  );
};
