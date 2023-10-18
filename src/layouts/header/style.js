import { COLORS } from "../../config/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderTop = styled.header`
  padding: 16px 0;
`;
export const HeaderInputBlock = styled.div`
  flex-grow: 1;
  position: relative;
  .search {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    cursor: pointer;
  }
`;
export const HeaderInput = styled.input`
  border: 1px solid ${COLORS.lunarRock};
  background: #fff;
  color: ${COLORS.Black};
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  padding: 18px 24px;
  outline-color: ${COLORS.lunarRock};
  &::placeholder {
    color: ${COLORS.lunarRock};
  }
`;
export const CustomLink = styled.div`
  a {
    color: ${COLORS.Black};
    text-align: right;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    color: ${COLORS.lunarRock};
    text-align: right;
    font-size: 12px;
    font-weight: 700;
  }
`;
export const HeaderBtn = styled(Link)`
  color: ${COLORS.Black};
  font-size: 14px;
  padding-left: 20px;
  padding-right: 50px;
  font-weight: 400;

  &:last-child {
    padding-right: 0;
    padding-left: 16px;
  }
`;

export const HeaderNav = styled.nav`
  margin-top: 25px;
  padding: 12px 0 11px;
  border-top: 1px solid ${COLORS.lunarRock};
`;
export const HeaderNavLink = styled(Link)`
  color: ${COLORS.Black};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
  &:nth-child(9) {
    border-right: 1px solid ${COLORS.lunarRock};
    padding-right: 67px;
  }
`;
