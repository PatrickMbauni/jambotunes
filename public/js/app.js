/**
 * Created by accutech on 6/17/15.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = require('./components/App');
var Popular = require('./components/Popular');
var Membership = require('./components/Membership');
var Register = require('./components/Register');
var Login = require('./components/Login');
var Collection = require('./components/Collection');

var routes = (
    <Route path="/" handler={Main}  >
        <Route name="popularSongs" path="Popular" handler={Popular} />
        <Route name="user-membership" path="Membership" handler={Membership} >
            <Route name="login" path="login" handler={Login} />
            <Route name="register" path="Register" handler={Register} />
        </Route>
        <Route name="Collection" path="Collection" handler={Collection} />
        <DefaultRoute name="user-collection" handler={Collection} />
    </Route>
);

var Apps = React.createClass({
    render: function(){
        return (
            <div>
                <div>
                    <h2>Main Component</h2>
                    <ul>
                        <li><Link to="Popular" >Popular</Link></li>
                        <li><Link to="Collection" >Collection</Link></li>
                        <li><Link to="Membership" >Membership</Link></li>
                        <li><Link to="Membership/Register" >Register</Link></li>
                        <li><Link to="Membership/login"  >Login</Link></li>
                    </ul>
                </div>
                <div>
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

Router.run(routes, (Root)=> {React.render(<Root />, document.body)});

