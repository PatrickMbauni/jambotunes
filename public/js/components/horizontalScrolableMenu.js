/**
 * Created by Gitonga on 6/19/2015.
 */
React = require('react');


var horizontalScrollMenu = React.createClass({
    render: function(){
        return (
        <div className=" home-menu pure-menu pure-menu-horizontal pure-menu-fixed" >
            <div className="pure-menu custom-menu custom-menu-top">
                <a href="#" className="pure-menu-heading custom-menu-brand">JamboTunes</a>
                <a href="#" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
            </div>
            <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                <div className="custom-menu-screen"></div>
                <ul class="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Benga</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Rhumba</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Chakacha</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Mwomboko</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Twist</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Calypso</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gikuyu</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Regae</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Folk</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Country</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Mugithi</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gosphel</a></li>
                </ul>
            </div>
        </div>);
    }
});
module.exports = horizontalScrollMenu;