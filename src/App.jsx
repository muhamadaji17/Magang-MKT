import AccessTokenProvider from "./context/AccessTokenProvider";
import Routers from "./route/Routers";

function App() {
  return (
    <AccessTokenProvider>
      <Routers />
    </AccessTokenProvider>
  );
}

export default App;
