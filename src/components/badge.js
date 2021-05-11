import React from "react";

class badge extends React.Component {
  render() {
    return (
      <div className={`badge badge--${this.props.color}`}>
        {this.props.children ? this.props.children : null}
      </div>
    );
  }
}

export default badge;
