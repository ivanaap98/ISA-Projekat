import { BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Home";
import Registracija from "./Registracija";
import PretragaApoteka from "./PretragaApoteka";
import PretragaLekova from "./PretragaLekova";
import Login from "./Login"
import NavBar from "./NavBar";

function App() {
  return (
       <BrowserRouter>
       <NavBar/>
	       <Switch>
		          <Route component={Home} path='/' exact />
		          <Route component={Registracija} path='/Registracija'  />
		          <Route component={PretragaApoteka} path='/PretragaApoteka' />
		          <Route component={PretragaLekova} path='/PretragaLekova'  />
		          <Route component={Login} path='/Login' />
		    </Switch>
       </BrowserRouter>
  );
}

export default App;
