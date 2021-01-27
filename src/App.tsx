import Box from "./components/Box";
import DesktopWrapper from "./components/DesktopWrapper";

/*

Flows
A Table of Contents, where you can view all of the screens

*/
function App() {
  return (
    <div className="App">
      <DesktopWrapper>
        <Box>
          <button>Hi There</button>
        </Box>
      </DesktopWrapper>
    </div>
  );
}

export default App;
