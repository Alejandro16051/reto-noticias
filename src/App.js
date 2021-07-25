import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import Cabecera from "./components/Cabecera";
import Cuerpo from "./components/Cuerpo";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import Footer from "./components/Footer";
 

function App() {
  const {isAuthenticated} = useAuth0();


  return (
    <div className="App">
      


      {isAuthenticated ?( <> 

       <LogoutButton/>
       <Profile/>
      </>

      ):(
        <LoginButton /> 
      )}
      <Cabecera />
      <Cuerpo /> 
      <Footer />
    </div>
  );
}

export default App;
