/**
 * Created by Gitonga on 6/22/2015.
 */
var React = require('react');

var splashContainer = React.createClass({
    render: function(){
        return (
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
        );
    }
});
module.exports = splashContainer;