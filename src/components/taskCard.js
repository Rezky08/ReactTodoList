import React from "react";
import ProgressComponent from "./progress";

function Title() {
  return null;
}

function Progress() {
  return null;
}

class taskCard extends React.Component {
  static Title = Title;
  static Progress = Progress;
  render() {
    const { children } = this.props;
    const title = children.find((child) => child.type === Title);
    const progress = children.find((child) => child.type === Progress);
    return (
      <div className="task-card--container bg-white rounded-md my-3 p-2">
        <div className="task-card--title text-left">
          {title?.props.children ? title.props.children : null}
        </div>
        <div className="task-card--progress">
          <ProgressComponent />
          {progress?.props.children ? progress.props.children : null}
        </div>
      </div>
    );
  }
}

taskCard.Title = Title;
taskCard.Progress = Progress;
export default taskCard;
