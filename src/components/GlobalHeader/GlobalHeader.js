import React from "react";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";

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
  SkipToContent
} from "carbon-components-react/lib/components/UIShell";

const GlobalHeader = () => {
  const onClickSideNavExpand = () => {};
  const isSideNavExpanded = false;
  return (
    <Header aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
      />
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem isCurrentPage="true" href="#">
          Link 1
        </HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        isPersistent={false}
      >
        <SideNavItems>
          <HeaderSideNavItems>
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderSideNavItems>
        </SideNavItems>
      </SideNav>
    </Header>
  );
};

export default GlobalHeader;
