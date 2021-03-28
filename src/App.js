import { MenuProfile } from "./contexts/MenuProfileContext";

import Profile from "./components/Profile";
import Chat from "./components/Chat";

import GlobalStyles, { Container } from "./styles/global";

function App() {
  return (
    <MenuProfile>
      <Container>
        <Chat />
        <Profile />
      </Container>
      <GlobalStyles />
    </MenuProfile>
  );
}

export default App;
