import DesktopWrapper from "./components/DesktopWrapper";
import EditItem from "./screens/EditItem";
import EditSubscriber from "./screens/EditSubscriber";
import Items from "./screens/Items";
import LogIn from "./screens/LogIn";
import NewSubscriber from "./screens/NewSubscriber";
import Messages from "./screens/Messages";
import Settings from "./screens/Settings";
import Subscribers from "./screens/Subscribers";
import EditMessage from "./screens/EditMessage";
import Distribution from "./screens/Distribution";
import Dashboard from "./screens/Dashboard";

/*

Flows
A Table of Contents, where you can view all of the screens

*/
function App() {
  return (
    <div className="App">
      <DesktopWrapper>
        <LogIn />
      </DesktopWrapper>
      <DesktopWrapper>
        <Dashboard />
      </DesktopWrapper>
      <DesktopWrapper>
        <Settings />
      </DesktopWrapper>
      <DesktopWrapper>
        <Subscribers />
      </DesktopWrapper>
      <DesktopWrapper>
        <EditSubscriber />
      </DesktopWrapper>
      <DesktopWrapper>
        <NewSubscriber />
      </DesktopWrapper>
      <DesktopWrapper>
        <Items />
      </DesktopWrapper>
      <DesktopWrapper>
        <EditItem />
      </DesktopWrapper>
      <DesktopWrapper>
        <Messages />
      </DesktopWrapper>
      <DesktopWrapper>
        <EditMessage />
      </DesktopWrapper>
      <DesktopWrapper>
        <Distribution />
      </DesktopWrapper>
    </div>
  );
}

export default App;
