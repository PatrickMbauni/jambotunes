/**
 * Created by accutech on 6/17/15.
 */

    var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

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
        <Route path="Collection" handler={Collection} />
        <DefaultRoute handler={Main} />
    </Route>
);

var Application = React.createClass({
    render: function(){
        return (
            <div>
            <h2>Jambotunes</h2>
                <ul>
                    <li><Link to="Popular" >Most Popular</Link></li>
                    <li><Link to="Collection" >My Collections</Link></li>
                    <li><Link to="Membership" >Membership</Link></li>
                    <li><Link to="Membership/Login" >Login</Link></li>
                </ul>
                <RouteHandler></RouteHandler>
            </div>
        )
    }
});

