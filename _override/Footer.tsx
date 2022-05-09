import { UniversalLink } from "@redocly/developer-portal/dist/engine/src/components/UniversalLink/UniversalLink";
import {
  ColumnList,
  ColumnListItem,
  ColumnTitle,
  Footer,
  FooterCopyright,
  FooterInfo,
  FooterProps,
  FooterSeparator,
} from "@redocly/developer-portal/dist/engine/src/components/UserComponents/footer.elements";
import { Box, Flex, mediaCSS } from "@redocly/developer-portal/ui";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-size: ${({ theme }) => theme.footer.fontSize};
  flex-shrink: 0;
  ${({ theme }) => mediaCSS({ fontFamily: theme.typography.fontFamily })}
  background-color: ${({ theme }) => theme.colors.footer.main};

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #d9e0fc;
    }
  }

  @media print {
    color: black;
    ${Footer} {
      display: none;
    }
  }
`;

export default function FooterCustom({
  footer: { columns, copyrightText },
}: FooterProps) {
  const legal = columns.find((column) => column.group === "Legal");

  return (
    <StyledFooter>
      <ConnectBox>
        Connect
        <UniversalLink
          to="https://github.com/ridge"
          target="_blank"
          alt="github"
          title="github"
        >
          <i className="fa-brands fa-github fa-1x"></i>
        </UniversalLink>
        <UniversalLink
          to="https://www.youtube.com/c/RidgeCloud"
          target="_blank"
          alt="youtube"
          title="youtube"
        >
          <i className="fab fa-youtube fa-1x"></i>
        </UniversalLink>
        <UniversalLink
          to="https://www.linkedin.com/company/ridgecloud"
          target="_blank"
          alt="linkedin"
          title="linkedin"
        >
          <i className="fab fa-linkedin fa-1x"></i>
        </UniversalLink>
        <UniversalLink
          to="https://twitter.com/cloud_ridge"
          target="_blank"
          alt="twitter"
          title="twitter"
        >
          <i className="fab fa-twitter fa-1x"></i>
        </UniversalLink>
      </ConnectBox>
      <Footer justifyContent="center" flexWrap="wrap" flex="1" p={0}>
        <Flex
          justifyContent="center"
          flexDirection={{ xs: "column", small: "row" }}
          flexWrap={{ small: "wrap" }}
          maxWidth="900px"
          flex={{ small: "1 1 100%" }}
        >
          {columns.map((column, columnIdx) => {
            if (column === legal) {
              return null;
            }

            return (
              <Box
                key={columnIdx}
                textAlign={{ xs: "center", small: "left" }}
                mb={{ xs: "4em", small: "3em", medium: 0 }}
                flex={{
                  xs: "0 calc(50% - 20px)",
                  small: "0 calc(33.333% - 20px)",
                  medium: 1,
                }}
                mx={12}
              >
                <ColumnTitleCustom>
                  {column.group || column.label}
                </ColumnTitleCustom>
                <ColumnList>
                  {column.items.map((item, itemIdx) => {
                    if (item.type === "separator") {
                      return (
                        <FooterSeparator key={itemIdx}>
                          item.label
                        </FooterSeparator>
                      );
                    }
                    return (
                      <ColumnListItemCustom key={itemIdx}>
                        <UniversalLink
                          to={item.link}
                          target={item.target}
                          external={item.external}
                        >
                          {item.label}
                        </UniversalLink>
                      </ColumnListItemCustom>
                    );
                  })}
                </ColumnList>
              </Box>
            );
          })}
        </Flex>
      </Footer>
      <FooterInfoCustom>
        <span>
          <img
            src="https://www.ridge.co/wp-content/uploads/2021/12/logo_white.svg"
            alt="Ridge Cloud"
          />
          <LegalLinkUL>
            {legal.items.map((item, itemIdx) => (
              <LegalLinkLI key={itemIdx}>
                <UniversalLink
                  to={item.link}
                  target={item.target}
                  external={item.external}
                >
                  {item.label}
                </UniversalLink>
              </LegalLinkLI>
            ))}
          </LegalLinkUL>
        </span>
        <FooterCopyrightCustom>{copyrightText}</FooterCopyrightCustom>
      </FooterInfoCustom>
    </StyledFooter>
  );
}

const ConnectBox = styled.div`
  max-width: 876px;
  margin: 55px auto 30px;
  padding-bottom: 22px;
  border-bottom: 0.5px solid #fff;
  color: #fff;

  a {
    margin-right: 18px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    &:first-of-type {
      margin-left: 59px;
    }
  }
`;

const ColumnTitleCustom = styled(ColumnTitle)`
  font-size: ${({ theme }) => theme.footer.titleFontSize};
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ColumnListItemCustom = styled(ColumnListItem)`
  font-weight: 400;
  line-height: 26px;
  padding-bottom: 0;
`;

const FooterInfoCustom = styled(FooterInfo)`
  justify-content: space-between;
  align-items: flex-end;
  max-width: 900px;
  margin: 0 auto;
  padding: 31px 12px 65px;
  font-size: 100%;

  img {
    margin-bottom: 8px;
  }
`;

const FooterCopyrightCustom = styled(FooterCopyright)`
  font-size: 100%;
`;

const LegalLinkUL = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LegalLinkLI = styled.li`
  position: relative;
  padding: 0 10px 0 0;

  a {
    padding-right: 10px;
  }

  &:after {
    content: "|";
    position: absolute;
    right: 8px;
    top: -2px;
  }

  &:last-of-type:after {
    content: "";
  }
`;
