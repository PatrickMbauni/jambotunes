/**
 * Created by accutech on 6/17/15.
 */

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/App');
var Popular = require('./components/Popular');
var Membership = require('./components/Membership');
var Register = require('./components/Register');
var Login = require('./components/Login');
var Collection = require('./components/Collection');

var routes = (
    <Route path="/" handler={Main}  >
        <Route path="Popular" handler={Popular} />
        <Route path="Membership" handler={Membership} >
            <Route path="login" handler={Login} />
            <Route path="Register" handler={Register} />
        </Route>
    </Route>
);

