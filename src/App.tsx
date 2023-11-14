import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";

import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <Router>
        <Header/>
          <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
              <AppRoutes/>
          </Container>
      </Router>
    </>
  )
}

export default App
