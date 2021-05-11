import "./App.css";
import GroupTaskContainer from "./components/groupTaskContainer";
import TaskCard from "./components/taskCard";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
