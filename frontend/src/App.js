import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header></Header>
      <main className="py-3">
        <Container>
        <h1>Welcome to GoShop</h1>
        <HomeScreen></HomeScreen>
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
};

export default App;
