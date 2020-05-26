import React, { useState } from "react";

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
  Button
} from "carbon-components-react/lib/components/UIShell";

const GlobalHeader = () => {
  const [isSideNavExpanded, setIsNavExpanded] = useState(false);
  const onClickSideNavExpand = () => {
    setIsNavExpanded(!isSideNavExpanded);
  };

  return (
    <Header aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
      />
      <HeaderName href="#" prefix="IBM">
        User Research
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem isCurrentPage={true} href="/">
          About
        </HeaderMenuItem>
        <HeaderMenuItem href="/faq">FAQ</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Sign up"
          onClick={() => console.log("click")}
        >
          {/* <Button>Sign up</Button> */}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        isPersistent={false}
      >
        <SideNavItems>
          <HeaderSideNavItems>
            <HeaderMenuItem href="/">About</HeaderMenuItem>
            <HeaderMenuItem href="#">FAQ</HeaderMenuItem>
          </HeaderSideNavItems>
        </SideNavItems>
      </SideNav>
    </Header>
  );
};

export default GlobalHeader;
