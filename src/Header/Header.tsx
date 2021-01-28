import React, { useState, useCallback } from "react";
import StyledHeader from "./StyledHeader";
import Toolbar from "./ToolBar/ToolBar";
import Configuration from "./Configuration/Configuration";
import NewPixelArt from "./NewPixelArt/NewPixelArt";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("ToolBar");

  const tabs = ["ToolBar", "Configuration"];

  const renderContent = useCallback(() => {
    switch (selectedTab) {
      case "ToolBar":
        return <Toolbar />;
      case "Configuration":
        return <Configuration />;
    }
  }, [selectedTab]);

  return (
    <header>
      <StyledHeader.TabContainer>
        <NewPixelArt />
        {tabs.map((name) => (
          <StyledHeader.Tab
            isActive={selectedTab === name}
            key={name}
            onClick={() => setSelectedTab(name)}
          >
            {name}
          </StyledHeader.Tab>
        ))}
      </StyledHeader.TabContainer>
      <StyledHeader.TabContent>{renderContent()}</StyledHeader.TabContent>
    </header>
  );
};

export default Header;
