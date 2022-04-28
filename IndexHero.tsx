import { GradientBackground, H1, H2 } from "@redocly/developer-portal/ui";
import styled from "styled-components";
import { space } from "styled-system";

export const IndexHero = styled(GradientBackground)`
  flex-direction: column;
  padding: 85px 0 140px;

  ${space}

  ${H1}, ${H2} {
    color: ${({ theme }) => theme.colors.navbar.contrastText};
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
`;
