import React from "react";
import styled from "styled-components";

import { UserNavBarProps } from "@redocly/developer-portal/dist/engine/src/components/NavBar/types";
import { LoginMenu, SearchBox } from "@redocly/developer-portal/ui";
import { useScrollLock } from "@redocly/developer-portal/dist/engine/src/hooks";
import { NavItem as NavItemModel } from "@redocly/developer-portal/dist/engine/auto-graphql";
import {
  CloseIcon,
  Logo,
  LogoLink,
  MobileLogo,
  MobileMenu,
  MobileMenuIcon,
  MobileMenuItem,
  NavBarWrapper,
  NavControls,
  NavIcon,
  NavItem,
  NavItems,
} from "@redocly/developer-portal/dist/engine/src/components/UserComponents/navbar.elements";
import { UniversalLink } from "@redocly/developer-portal/dist/engine/src/components/UniversalLink/UniversalLink";

export default function NavBarCustom({
  items,
  logo,
  href,
  altText,
  pathPrefix,
  sidebarName,
  standalone,
  location,
  className,
}: UserNavBarProps) {
  const [isMobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuOpened(!isMobileMenuOpened);
  const hideMobileMenu = () => setMobileMenuOpened(false);
  useScrollLock(isMobileMenuOpened);
  React.useEffect(() => {
    hideMobileMenu();
  }, [location.pathname]);
  const isActiveItem = (item: NavItemModel, items: NavItemModel[]) => {
    return (
      sidebarName === item.activateWithSidebar ||
      (location.pathname.slice(0, item.link.length) === item.link &&
        !items.some((item) => item.activateWithSidebar === sidebarName))
    );
  };

  return (
    <NavBarWrapper className={className} standalone={standalone} id="navbar">
      <LogoLink to={href}>
        <Logo src={logo} alt={altText} />
      </LogoLink>
      <NavItems>
        {items.map((item, idx) => {
          if (item.type === "separatorLine") {
            return <NavSeparatorLine key={idx} />;
          }
          if (item.type === "search") {
            return (
              <SearchBoxCustom
                pathPrefix={pathPrefix}
                key={idx}
                location={location}
              />
            );
          }
          return (
            <NavItemCustom key={idx} active={isActiveItem(item, items)}>
              <UniversalLinkCustom item={item}>
                <>
                  {item.icon ? <NavIcon url={item.icon} /> : null}
                  <span style={{ verticalAlign: "middle" }}>
                    {item.label.replace(/^@/, "")}
                  </span>
                </>
              </UniversalLinkCustom>
            </NavItemCustom>
          );
        })}
        <LoginMenu />
      </NavItems>
      <NavControls>
        <MobileMenuIcon onClick={toggleMobileMenu} />
      </NavControls>
      <MobileMenu isShown={isMobileMenuOpened}>
        <CloseIcon onClick={hideMobileMenu} />
        <UniversalLink to={href}>
          <MobileLogo src={logo} alt={altText} />
        </UniversalLink>
        {items.map((item, idx) => {
          if (item.type === "separatorLine") {
            return null;
          }
          if (item.type === "search") {
            return isMobileMenuOpened ? (
              <SearchBoxCustom pathPrefix={pathPrefix} key={idx} />
            ) : null;
          }
          return (
            <MobileMenuItem key={`mobile-menu-${idx}`} onClick={hideMobileMenu}>
              <UniversalLink item={item}>
                {item.label.replace(/^@/, "")}
              </UniversalLink>
            </MobileMenuItem>
          );
        })}
        <LoginMenu mobile={true} />
      </MobileMenu>
    </NavBarWrapper>
  );
}

const NavItemCustom = styled(NavItem)`
  position: relative;
  padding: 0;
  margin: 0.625em 0;
  margin-right: 3em;
  background: none;

  ${({ theme, active }) =>
    active &&
    `
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -0.6em;
    height: 4px;
    margin-top: -4px;
    background: ${theme.navbar.activeItemColor};
  }
  `}
`;

const NavSeparatorLine = styled(NavItemCustom)`
  position: relative;
  height: 2em;
  vertical-align: middle;
  border-left: 1px solid ${({ theme }) => theme.navbar.activeTextColor};
`;

const SearchBoxCustom = styled(SearchBox)`
  input[type="text"] {
    background-color: ${({ theme }) => theme.searchbox?.backgroundColor};

    &::placeholder {
      font-size: 0.8em;
    }
  }
`;

const UniversalLinkCustom = styled(UniversalLink).attrs(
  ({ item: { label, link, target, external } }: { item: NavItemModel }) => ({
    to: link,
    target,
    external,
    "data-dimmed": label.charAt(0) === "@" ? true : undefined,
  })
)`
  opacity: ${({ "data-dimmed": dimmed }) => (dimmed ? 0.5 : 1)};
  content: ${({ link }) => link};
`;
