import DesktopWrapper from "./components/DesktopWrapper";
import LogIn from "./screens/LogIn";
import Settings from "./screens/Settings";

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
        <Settings />
      </DesktopWrapper>
    </div>
  );
}

export default App;
