import NavigationLink from "./NavigationLink"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RegisterApp from './RegisterApp';
import UserDetails from './UserDetails';

import PageNotFound from './PageNotFound';
import LandingPage from "./LandingPage";
import { ToastContainer } from 'react-toastify'
import UserPortfolio from "./UserPortfolio";
import LoginApp from "./LoginApp";

function AppRouter(){

    return(
<div>
    <BrowserRouter>
    <div>
    <NavigationLink/>
    <Switch>
        <Route path="/" exact={true} component={LandingPage}/> 
        <Route path="/login" component={LoginApp}/>
        <Route path="/register" component={RegisterApp}/>
        <Route path="/userdetails" component={UserDetails}/>
        <Route path="/portfolio" component={UserPortfolio}/>
        <Route  component={PageNotFound}/>
    </Switch>
    </div>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </div>
)

}
export default AppRouter