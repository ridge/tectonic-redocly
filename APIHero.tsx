import { Box, H1, H2 } from "@redocly/developer-portal/ui";
import styled from "styled-components";
import { space } from "styled-system";

export const APIHero = styled(Box)`
  position: relative;
  width: 100%;
  height: 273px;
  overflow: hidden;
  background-color: #0e0c51;
  margin-bottom: 70px;

  ${space}

  ${H1}, ${H2} {
    position: absolute;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    margin: 0;
  }

  ${H1} {
    left: 69px;
    top: 172px;
    font-size: 26px;
  }

  ${H2} {
    left: 69px;
    top: 143px;
    font-size: 17px;
  }

  img {
    position: absolute;
    right: 40px;
    top: 0;
  }
`;
