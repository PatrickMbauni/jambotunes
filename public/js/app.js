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
var HorizontalMenu = require('./components/horizontalScrolableMenu');
var SplashContainer = require('./components/splashContainer');
var FirstContent = require('./components/content');
var App = React.createClass({
    render: function(){
        return (
            <div >
                <div className="custom-menu-wrapper" >
                    <HorizontalMenu  />
                </div>
                <SplashContainer />
                <div className="content-wrapper">
                    <FirstContent />
                    <div className="ribbon l-box-lrg pure-g">
                        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                            <img className="pure-img-responsive" alt="File Icons" width="300" src="img/common/file-icons.png" />
                        </div>
                            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                                <h2 className="content-head content-head-ribbon">Popular Music</h2>

                                <p>

                                </p>
                            </div>
                        </div>

                    <div className="content">
                        <h2 className="content-head is-center">Sign Up with </h2>

                        <div className="pure-g">
                            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form action="/locallogin" method="post" className="pure-form pure-form-stacked" >
                                    <fieldset>

                                        <label htmlfor="username">Your Name</label>
                                        <input  name="username" type="text" placeholder="Your Name"/>
                                        <label htmlfor="password">Your Password</label>
                                        <input  name="password" type="password" placeholder="Your Password" />

                                        <button type="submit" className="pure-button">Sign Up</button>
                                    </fieldset>
                                </form>
                            </div>

                            <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>

                                </p>

                                <h4>More Info</h4>
                                <p>this site contains content from artists and fans from around the internet in it's natural form.
                                    such content is not representative of Jambotunes Media Limited
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer l-box is-center">
                        Learn More about Jambotunes .
                    </div>
                </div>

            </div>

        );
    }
});
var routes = (
    <Route path="/" handler={App}  >
        <DefaultRoute handler={Main} />
        <Route path="Popular" handler={Popular} />
        <Route path="Membership" handler={Membership} >
            <Route path="login" handler={Login} />
            <Route path="Register" handler={Register} />
        </Route>
        <Route path="Collection" handler={Collection} />
    </Route>
);
Router.run(routes, Router.HashLocation, function(Root){
    React.render(<Root />, document.body);
});

