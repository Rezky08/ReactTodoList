import React from "react";
import BadgeComponent from "./badge";
import ButtonGhostIconComponent from "./buttonGhostIcon";
import { ReactComponent as PlusCircleIcon } from "./Icons/PlusCircle.svg";

function Badge() {
  return null;
}

function Content() {
  return null;
}

function Timeline() {
  return null;
}

class GroupTaskContainer extends React.Component {
  static Badge = Badge;
  static Content = Content;
  static Timeline = Timeline;
  render() {
    const { children } = this.props;
    const badge = children.find((child) => child.type === Badge);
    const content = children.find((child) => child.type === Content);
    const timeline = children.find((child) => child.type === Timeline);

    return (
      <div
        className={`group-task--container group-task--${this.props.color} p-3`}
      >
        <BadgeComponent color={this.props.color}>
          {badge?.props.children ? badge.props.children : null}
        </BadgeComponent>
        <span className="group-task--timeline">
          {timeline?.props.children ? timeline.props.children : null}
        </span>
        <div className="group-task--content">
          {content?.props.children ? content.props.children : null}
        </div>
        <ButtonGhostIconComponent>
          <ButtonGhostIconComponent.Icon>
            <PlusCircleIcon />
          </ButtonGhostIconComponent.Icon>
          <ButtonGhostIconComponent.Text>
            New Task
          </ButtonGhostIconComponent.Text>
        </ButtonGhostIconComponent>
      </div>
    );
  }
}

GroupTaskContainer.Badge = Badge;
GroupTaskContainer.Content = Content;
GroupTaskContainer.Timeline = Timeline;
export default GroupTaskContainer;
