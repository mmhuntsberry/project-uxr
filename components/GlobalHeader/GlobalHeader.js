import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link } from "carbon-components-react";
import { useRouter } from "next/router";

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
} from "carbon-components-react/lib/components/UIShell";

const GlobalHeader = () => {
  const [isSideNavExpanded, setIsNavExpanded] = useState(false);

  const onClickSideNavExpand = () => {
    setIsNavExpanded(!isSideNavExpanded);
  };

  // for active tabs
  // const location = useLocation();
  const location = useRouter();
  const isCurrent = (linkPath) => {
    return location.pathname === linkPath ? true : false;
  };

  useEffect(() => {
    // const location = useLocation();
  }, [location]);

  return (
    <>
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="IBM">
          User Research
        </HeaderName>
        <HeaderNavigation aria-label="IBM User Research" isCurrentPage>
          <HeaderMenuItem href="/" isCurrentPage={isCurrent("/")}>
            About
          </HeaderMenuItem>
          <HeaderMenuItem href="/faq" isCurrentPage={isCurrent("/faq")}>
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
            <SideNavLink element={Link} href="/" isActive={isCurrent("/")}>
              About
            </SideNavLink>
            <SideNavLink
              element={Link}
              href="/faq"
              isActive={isCurrent("/faq")}
            >
              FAQ
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </Header>
    </>
  );
};

export default GlobalHeader;
