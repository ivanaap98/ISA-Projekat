import { BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./HomePage/Home";
import Registracija from "./HomePage/Registracija";
import PretragaApoteka from "./HomePage/PretragaApoteka";
import PretragaLekova from "./HomePage/PretragaLekova";
import Login from "./HomePage/Login"
import NavBar from "./HomePage/NavBar";

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
