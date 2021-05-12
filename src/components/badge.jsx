import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <div className={`badge badge--${this.props.color}`}>
        {this.props.children ? this.props.children : null}
      </div>
    );
  }
}

export default Badge;
