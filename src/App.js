import { MenuProfile } from "./contexts/MenuProfileContext";

import ChatList from "./components/Chat/List/index";

import GlobalStyles, { Container } from "./styles/global";
import Profile from "./components/Profile";

function App() {
  return (
    <MenuProfile>
      <Container>
        <ChatList />
        <GlobalStyles />
        <Profile />
      </Container>
    </MenuProfile>
  );
}

export default App;
