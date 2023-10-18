import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { PeopleIcon } from "../../../assets/icons/people-icon";
import { Like } from "../../../assets/icons/like";
import { CountIcon } from "../../../assets/icons/countIcon";
import { HeaderBtn } from "../style";
export const HeaderButtuns = () => {
  return (
    <Stack  alignItems={"center"} pl="68px" direction="row">
      <PeopleIcon />
      <HeaderBtn>Личный кабинет</HeaderBtn>
      <Like />
      <HeaderBtn>Избранное</HeaderBtn>
      <CountIcon />
      <HeaderBtn>Корзина</HeaderBtn>
    </Stack>
  );
};
