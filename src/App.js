import "./App.css";
import SidebarComponent from "./components/sideBar.jsx";
import GroupTaskContainer from "./components/groupTaskContainer.jsx";
import TaskCard from "./components/taskCard.jsx";
import { ReactComponent as LogoIcon } from "./components/Icons/Logo.svg";

function App() {
  return (
    <div className="App flex flex-column">
      <div className="w-16">
        <SidebarComponent>
          <SidebarComponent.Icon>
            <LogoIcon className="mx-auto mt-5" />
          </SidebarComponent.Icon>
        </SidebarComponent>
      </div>
      <div className="w-5/6 px-12 py-5">
        <h1 className="text--title">Product Roadmap</h1>
        <div className="grid grid-cols-4 w-full py-4">
          <GroupTaskContainer color="pink">
            <GroupTaskContainer.Badge>Group Task</GroupTaskContainer.Badge>
            <GroupTaskContainer.Timeline>
              January - March
            </GroupTaskContainer.Timeline>
            <GroupTaskContainer.Content>
              <TaskCard>
                <TaskCard.Title>
                  Re-designed the zero-g doggie bags. No more spills!
                </TaskCard.Title>
                <TaskCard.Progress>Test</TaskCard.Progress>
              </TaskCard>
            </GroupTaskContainer.Content>
          </GroupTaskContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
