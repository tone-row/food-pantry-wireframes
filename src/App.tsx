import FoodPreferences from "./screens/subscribers/FoodPreferences";
import EditItem from "./screens/EditItem";
import Items from "./screens/Items";
import LogIn from "./screens/LogIn";
import NewSubscriber from "./screens/NewSubscriber";
import Messages from "./screens/Messages";
import Settings from "./screens/Settings";
import Subscribers from "./screens/Subscribers";
import EditMessage from "./screens/EditMessage";
import Distribution from "./screens/Distribution";
import ThisWeeksInventory from "./screens/ThisWeeksInventory";
import Actions from "./screens/Actions";
import EditAction from "./screens/EditAction";
import Logs from "./screens/Logs";
import Flow from "./app/Flow";
import NewItem from "./screens/NewItem";
import DesktopWrapper from "./components/DesktopWrapper";
import PastInventory from "./screens/PastInventory";
import React from "react";
import Preferences from "./screens/Preferences";
import PreferencesPreference from "./screens/PreferencesPreference";
import Packing from "./screens/Packing";
import Pantries from "./screens/Pantries";
import Users from "./screens/Users";

/*

Flows
A Table of Contents, where you can view all of the screens

*/
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Food Pantry App</h1>
      <h2>Dashboard, during Inventory cycle</h2>
      <DesktopWrapper>
        <ThisWeeksInventory />
      </DesktopWrapper>
      <h2>Dashboard, during Preferences cycle</h2>
      <DesktopWrapper>
        <PreferencesPreference />
      </DesktopWrapper>
      <h2>Dashboard, during Packing cycle</h2>
      <DesktopWrapper>
        <Packing />
      </DesktopWrapper>
      <DesktopWrapper>
        <PastInventory />
      </DesktopWrapper>
      <DesktopWrapper>
        <Pantries />
      </DesktopWrapper>
      <DesktopWrapper>
        <Users />
      </DesktopWrapper>
      {/* <Flow
        title="Adding a new item"
        role="Admin"
        screens={[
          { title: "Log in", component: <LogIn /> },
          {
            title: "Navigate to items",
            component: <Dashboard />,
          },
          {
            title: "Click New",
            component: <Items />,
          },
          {
            title: "Enter information & click save",
            component: <NewItem />,
          },
        ]}
      /> */}
    </div>
  );
}

export default App;
