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

  @media print {
    color: black;
    ${Footer} {
      display: none;
    }
  }
`;

export default function FooterCustom({
  footer: { columns, copyrightText },
  siteVersion,
}: FooterProps) {
  return (
    <StyledFooter>
      {columns.length ? (
        <Footer
          justifyContent="center"
          flexWrap="wrap"
          flex="1"
          p={{ xs: "3em 0 1em 0", small: "5.625em 0 3.9375em 0" }}
        >
          <Flex
            justifyContent="center"
            flexDirection={{ xs: "column", small: "row" }}
            flexWrap={{ small: "wrap" }}
            maxWidth="1200px"
            flex={{ small: "1 1 100%" }}
            px="20px"
          >
            {columns.map((column, columnIdx) => (
              <Box
                key={columnIdx}
                textAlign={{ xs: "center", small: "left" }}
                mb={{ xs: "4em", small: "3em", medium: 0 }}
                flex={{
                  xs: "0 calc(50% - 20px)",
                  small: "0 calc(33.333% - 20px)",
                  medium: 1,
                }}
                mx={10}
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
            ))}
          </Flex>
        </Footer>
      ) : null}
      {copyrightText || siteVersion ? (
        <FooterInfo>
          <FooterCopyright>
            {copyrightText} {siteVersion ? `| ${siteVersion}` : null}
          </FooterCopyright>
        </FooterInfo>
      ) : null}
    </StyledFooter>
  );
}

const ColumnTitleCustom = styled(ColumnTitle)`
  font-size: ${({ theme }) => theme.footer.titleFontSize};
  text-transform: uppercase;
  font-weight: 700;
`;

const ColumnListItemCustom = styled(ColumnListItem)`
  font-weight: 400;
  padding-bottom: 1em;
`;
