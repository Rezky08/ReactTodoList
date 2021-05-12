import React from "react";

function Icon() {
  return null;
}

class sideBar extends React.Component {
  static Icon = Icon;

  render() {
    const { children } = this.props;
    const icon = children.type === Icon ? children : null;
    return (
      <div className="sidebar--container h-screen">
        <div className="sidebar--icon w-full flex flex-row">
          {icon?.props.children ? icon.props.children : null}
        </div>
      </div>
    );
  }
}

sideBar.Icon = Icon;

export default sideBar;
