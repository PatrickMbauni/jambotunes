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

var App = React.createClass({
    render: function(){
        return (
            <div >
                <div className="header">
                    <HorizontalMenu  />
                </div>
                <div className="splash-container">
                    <div className="splash">
                        <h1 className="splash-head">A JAMBOTUNES INC</h1>
                        <p className="splash-subhead">
                            including Kigocco,Benga,Gospel,Rhumba
                        </p>
                        <p>
                            <a href="http://www.jambotunes.com" className="pure-button pure-button-primary">Jambo Tunes</a>
                        </p>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="content">
                        <h2 className="content-head is-center">New Music</h2>

                        <div className="pure-g">
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                                <h3 className="content-subhead">
                                    <i className="fa fa-rocket"></i>
                                    SignUp with Us
                                </h3>
                                <p>

                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-mobile"></i>
                                    Explore Artists
                                </h3>
                                <p>

                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    Modular
                                </h3>
                                <p>

                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-check-square-o"></i>
                                    Plays Nice
                                </h3>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ribbon l-box-lrg pure-g">
                        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                            <img className="pure-img-responsive" alt="File Icons" width="300" src="img/common/file-icons.png" />
                        </div>
                            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                                <h2 className="content-head content-head-ribbon">Most Popular.</h2>

                                <p>

                                </p>
                            </div>
                        </div>

                    <div className="content">
                        <h2 className="content-head is-center">Sign Up with Us</h2>

                        <div className="pure-g">
                            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form className="pure-form pure-form-stacked">
                                    <fieldset>

                                        <label for="name">Your Name</label>
                                        <input id="name" type="text" placeholder="Your Name"/>


                                            <label for="email">Your Email</label>
                                            <input id="email" type="email" placeholder="Your Email"/>

                                                <label for="password">Your Password</label>
                                                <input id="password" type="password" placeholder="Your Password" />

                                                    <button type="submit" className="pure-button">Sign Up</button>
                                    </fieldset>
                                </form>
                            </div>

                            <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>

                                </p>

                                <h4>More Information</h4>
                                <p>
                                                this site contains content from artists and fans from around the internet in it's natural form.
                                    such content is not representative of Jambotunes Network
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

