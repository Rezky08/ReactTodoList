import React from "react";
import SidebarComponent from "./sideBar.jsx";
import { ReactComponent as LogoIcon } from "./Icons/Logo.svg";

function ContentMain() {
  return null;
}

class layout extends React.Component {
  static ContentMain = ContentMain;
  render() {
    const { children } = this.props;
    return (
      <div className="App flex flex-column">
        <div className="w-16">
          <SidebarComponent>
            <SidebarComponent.Icon>
              <LogoIcon className="mx-auto mt-5" />
            </SidebarComponent.Icon>
          </SidebarComponent>
        </div>
        <div className="w-5/6 px-12 py-5 text-left">
          {children?.type === ContentMain ? children.props.children : null}
        </div>
      </div>
    );
  }
}

layout.ContentMain = ContentMain;

export default layout;
