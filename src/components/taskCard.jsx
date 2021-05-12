import React from "react";
import ProgressComponent from "./progress";
import GroupTaskOptions from "./groupTaskOptions";

function Title() {
  return null;
}

function Progress() {
  return null;
}

class TaskCard extends React.Component {
  static Title = Title;
  static Progress = Progress;
  render() {
    const { children } = this.props;
    const title = children.find((child) => child.type === Title);
    const progress = children.find((child) => child.type === Progress);
    return (
      <div className="task-card--container bg-white rounded-md my-3 p-2 flex flex-col gap-6">
        <div className="task-card--title text-left">
          {title?.props.children ? title.props.children : null}
        </div>
        <div className="grid grid-cols-2">
          <ProgressComponent progressColor="green" progressRate="20" />
          <div className="text-right">
            <GroupTaskOptions />
          </div>
        </div>
      </div>
    );
  }
}

TaskCard.Title = Title;
TaskCard.Progress = Progress;
export default TaskCard;
