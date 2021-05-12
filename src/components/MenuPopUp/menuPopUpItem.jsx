import React from "react";

function PopupMenuItemTitle() {
  return null;
}
function PopupMenuItemIcon() {
  return null;
}

class menuPopUpItem extends React.Component {
  static PopupMenuItemTitle = PopupMenuItemTitle;
  static PopupMenuItemIcon = PopupMenuItemIcon;
  render() {
    const { children } = this.props;
    const popupMenuItemIcon = children.find(
      (child) => child.type === PopupMenuItemIcon
    );
    const popupMenuItemTitle = children.find(
      (child) => child.type === PopupMenuItemTitle
    );
    return (
      <div className="menu-popup--content-item block p-3 flex flex-row gap-3 items-center px-4">
        <span className="w-1/6">
          {popupMenuItemIcon?.props.children
            ? popupMenuItemIcon.props.children
            : null}
        </span>
        <span className="w-5/6 text-left">
          {popupMenuItemTitle?.props.children
            ? popupMenuItemTitle.props.children
            : null}
        </span>
      </div>
    );
  }
}

menuPopUpItem.PopupMenuItemTitle = PopupMenuItemTitle;
menuPopUpItem.PopupMenuItemIcon = PopupMenuItemIcon;
export default menuPopUpItem;
