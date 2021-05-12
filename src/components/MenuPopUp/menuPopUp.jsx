import React from "react";
import { handleClickOutside } from "../Functions/clickOutside";

function PopupTrigger() {
  return null;
}

function PopupContent() {
  return null;
}

class menuPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.defaultVisible ? props.defaultVisible : false,
    };
    this.containerRef = React.createRef();
    this.setContainerRef = this.setContainerRef.bind(this);
    this.handleClickOutside = handleClickOutside.bind(this);
  }
  static PopupTrigger = PopupTrigger;
  static PopupContent = PopupContent;
  componentDidMount() {
    document.addEventListener("mousedown", (event) => {
      handleClickOutside(this.containerRef, event, () => {
        this.setState({
          visible: false,
        });
      });
    });
  }
  /**
   * Set the wrapper ref
   */
  setContainerRef(node) {
    this.containerRef = node;
  }

  render() {
    const { children } = this.props;
    const popupTrigger = children.find((child) => child.type === PopupTrigger);
    const popupContent = children.find((child) => child.type === PopupContent);
    return (
      <div>
        <button
          className="menu-popup--container"
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          {popupTrigger?.props.children ? popupTrigger.props.children : null}
          <div
            ref={this.containerRef}
            className={[
              "py-2",
              "bg-white",
              "rounded-sm",
              "menu-popup--content",
              this.state.visible ? "menu-popup--show" : null,
            ].join(" ")}
          >
            {popupContent?.props.children ? popupContent.props.children : null}
          </div>
        </button>
      </div>
    );
  }
}
menuPopUp.PopupTrigger = PopupTrigger;
menuPopUp.PopupContent = PopupContent;
export default menuPopUp;
