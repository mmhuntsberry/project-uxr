import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavLink,
  SideNavItems,
  SkipToContent,
  Button
} from "carbon-components-react/lib/components/UIShell";

const GlobalHeader = () => {
  const [isSideNavExpanded, setIsNavExpanded] = useState(false);

  const onClickSideNavExpand = () => {
    setIsNavExpanded(!isSideNavExpanded);
  };

  // for active tabs
  const location = useLocation();

  const isCurrent = linkPath => {
    return location.pathname === linkPath ? true : false;
  };

  useEffect(() => {}, [location]);

  return (
    <>
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          User Research
        </HeaderName>
        <HeaderNavigation aria-label="IBM User Research" isCurrentPage>
          <HeaderMenuItem element={Link} to="/" isCurrentPage={isCurrent("/")}>
            About
          </HeaderMenuItem>
          <HeaderMenuItem
            element={Link}
            to="/faq"
            isCurrentPage={isCurrent("/faq")}
          >
            FAQ
          </HeaderMenuItem>
        </HeaderNavigation>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={() => {}}
          ></HeaderGlobalAction>
        </HeaderGlobalBar>
        <SideNav
          isChildOfHeader
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <SideNavLink element={Link} to="/" isActive={isCurrent("/")}>
              About
            </SideNavLink>
            <SideNavLink element={Link} to="/faq" isActive={isCurrent("/faq")}>
              FAQ
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </Header>
    </>
  );
};

export default GlobalHeader;
