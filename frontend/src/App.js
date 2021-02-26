import { BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./HomePage/Home";
import Registracija from "./HomePage/Registracija/Registracija";
import PretragaApoteka from "./HomePage/PretragaApoteka";
import PretragaLekova from "./HomePage/PretragaLekova";
import Login from "./HomePage/Login/Login"
import AdminApotekeHomePage from "./AdminApotekeHomePage/AdminApotekeHomePage";
import PacijentHomePage from "./PacijentHomePage/PacijentHomePage";

function App() {
  return (
       <BrowserRouter>
	       <Switch>
		          <Route component={Home} path='/' exact />
		          <Route component={Registracija} path='/Registracija'  />
		          <Route component={PretragaApoteka} path='/PretragaApoteka' />
		          <Route component={PretragaLekova} path='/PretragaLekova'  />
		          <Route component={Login} path='/Login' />
		          <Route component={PacijentHomePage} path='/Pacijent/' />
		          <Route component={AdminApotekeHomePage} path='/AdminApoteke/' />
		    </Switch>
       </BrowserRouter>
  );
}

export default App;
