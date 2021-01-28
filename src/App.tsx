import DesktopWrapper from "./components/DesktopWrapper";
import FoodPreferences from "./screens/subscribers/FoodPreferences";
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
import Actions from "./screens/Actions";
import EditAction from "./screens/EditAction";
import Logs from "./screens/Logs";
import SubscriberLogIn from "./screens/subscribers/LogIn";
import UserSettings from "./screens/subscribers/UserSettings";
import Flow from "./app/Flow";

/*

Flows
A Table of Contents, where you can view all of the screens

*/
function App() {
  return (
    <div className="App">
      <Flow
        title="Subscriber: Update Food Preferences"
        screens={[
          { title: "Subscriber Logs In", component: <SubscriberLogIn /> },
          {
            title: "Subscriber Chooses Food Preferences",
            component: <FoodPreferences />,
          },
        ]}
      />
      {/* <DesktopWrapper>
        <SubscriberLogIn />
      </DesktopWrapper>
      <DesktopWrapper>
        <FoodPreferences />
      </DesktopWrapper>
      <DesktopWrapper>
        <UserSettings />
      </DesktopWrapper>
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
      <DesktopWrapper>
        <Actions />
      </DesktopWrapper>
      <DesktopWrapper>
        <EditAction />
      </DesktopWrapper>
      <DesktopWrapper>
        <Logs />
      </DesktopWrapper> */}
    </div>
  );
}

export default App;
