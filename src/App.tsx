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
import Dashboard from "./screens/Dashboard";
import Actions from "./screens/Actions";
import EditAction from "./screens/EditAction";
import Logs from "./screens/Logs";
import SubscriberLogIn from "./screens/subscribers/LogIn";
import UserSettings from "./screens/subscribers/UserSettings";
import Flow from "./app/Flow";
import NewItem from "./screens/NewItem";
import SignUp from "./screens/SignUp";

/*

Flows
A Table of Contents, where you can view all of the screens

*/
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Example Flows for Food Pantry App</h1>
      <Flow
        title="Sign Up"
        role="External Person"
        screens={[{ title: "Person signs up", component: <SignUp /> }]}
      />
      <Flow
        title="Updating food preferences"
        role="Subscriber"
        screens={[
          { title: "Subscriber Logs In", component: <SubscriberLogIn /> },
          {
            title: "Subscriber Chooses Food Preferences",
            component: <FoodPreferences />,
          },
        ]}
      />
      <Flow
        title="Update account information"
        role="Subscriber"
        screens={[
          {
            title: "Log in",
            component: <SubscriberLogIn />,
          },
          {
            title: "Navigate to User Settings",
            component: <FoodPreferences />,
          },
          {
            title: "Update account information",
            component: <UserSettings />,
          },
        ]}
      />
      <Flow
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
      />
      <Flow
        title="Removing an item"
        role="Admin"
        screens={[
          {
            title: "Log in and navigate to items",
            component: <Dashboard />,
          },
          {
            title: "Select an item to remove",
            component: <Items />,
          },
          {
            title: "Click Delete",
            component: <EditItem />,
          },
        ]}
      />
      <Flow
        title="Update pantry information"
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          { title: "Navigate to Settings", component: <Dashboard /> },
          { title: "Update pantry information", component: <Settings /> },
        ]}
      />
      <Flow
        title="Get Subscriber information"
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          { component: <Dashboard />, title: "Navigate to Subscribers" },
          { component: <Subscribers />, title: "Search for subscriber" },
        ]}
      />
      <Flow
        title="Adding a subscriber"
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          { component: <Dashboard />, title: "Navigate to Subscribers" },
          { component: <Subscribers />, title: "Choose New" },
          { component: <NewSubscriber />, title: "Enter details & save" },
        ]}
      />
      <Flow
        title="Update a Message"
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          {
            component: <Dashboard />,
            title: "Navigate to Messages",
          },
          {
            component: <Messages />,
            title: "Choose the message you want to edit",
          },
          {
            component: <EditMessage />,
            title: "Edit the message",
          },
        ]}
      />
      <Flow
        title="Update an Action"
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          {
            component: <Dashboard />,
            title: "Navigate to Actions",
          },
          {
            component: <Actions />,
            title: "Choose the action to edit",
          },
          {
            component: <EditAction />,
            title: "Edit the action and save",
          },
        ]}
      />
      <Flow
        title={`Send out "Inventory Updated" Messages`}
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          {
            component: <Dashboard />,
            title: "Navigate to Actions",
          },
          {
            component: <Actions />,
            title: `Select "Run" on the Inventory Updated action`,
          },
        ]}
      />
      <Flow
        title={`Get box distribution information`}
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          {
            component: <Dashboard />,
            title: "Navigate to Distribution",
          },
          {
            component: <Distribution />,
            title: "Print spreadsheet or work directly with page",
          },
        ]}
      />
      <Flow
        title={`Send out "Boxes are Ready" Messages`}
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          {
            component: <Dashboard />,
            title: "Navigate to Actions",
          },
          {
            component: <Actions />,
            title: `Select "Run" on the Boxes are Ready action`,
          },
        ]}
      />
      <Flow
        title={`Confirm subscribers were emailed, called, texted`}
        role="Admin"
        screens={[
          {
            title: "Log in",
            component: <LogIn />,
          },
          {
            component: <Dashboard />,
            title: "Navigate to Logs",
          },
          {
            component: <Logs />,
            title: `Confirm that household was called/emailed/texted`,
          },
        ]}
      />
    </div>
  );
}

export default App;
