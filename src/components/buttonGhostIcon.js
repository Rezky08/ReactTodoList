import React from "react";

function Icon() {
  return null;
}
function Text() {
  return null;
}

class buttonGhostIcon extends React.Component {
  static Icon = Icon;
  static Text = Text;
  render() {
    const { children } = this.props;
    const icon = children.find((child) => child.type === Icon);
    const text = children.find((child) => child.type === Text);
    return (
      <button
        className="button-ghost grid grid-cols-3 gap-2 min-w-min inline-block align-middle"
        onClick={this.props.handleClick}
      >
        <span className="button-ghost--icon col-span-1 ">
          {icon.props.children ? icon.props.children : null}
        </span>
        <span className="button-ghost--text col-span-2">
          {text.props.children ? text.props.children : null}
        </span>
      </button>
    );
  }
}

buttonGhostIcon.Icon = Icon;
buttonGhostIcon.Text = Text;

export default buttonGhostIcon;
