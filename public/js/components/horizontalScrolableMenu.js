/**
 * Created by Gitonga on 6/19/2015.
 */
React = require('react/addons');


var horizontalScrollMenu = React.createClass({

    getInitialState: function(){
        cS = React.addons.classSet;
        cls = cS({
            'custom-menu-tucked': true,'X': true,'custom-menu-toggle':false
        });
         return {'cS':cS,
                'cls': cls}
    },
    handleToggleClick: function(){
        this.state.cls = this.state.cS({
            'custom-menu-tucked': true,'X': true,'custom-menu-toggle':false
        });
    },
    render: function() {
         this.state.cls = this.state.cS({
            'custom-menu-tucked': true,'X': true,'custom-menu-toggle':false
        });
        return (
            <div className=" home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <div className="pure-menu custom-menu custom-menu-top">
                    <a href="#" className="pure-menu-heading custom-menu-brand">JamboTunes</a>
                    <a href="#" className={this.state.cls} ref="toggle"  ><s className="bar"></s><s
                        className="bar"></s></a>
                </div>
                <div
                    className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked"
                    ref="tuckedMenu">

                    <ul class="pure-menu-list">
                        <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Benga</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Rhumba</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Chakacha</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Mwomboko</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Twist</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Calypso</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gikuyu</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Regae</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Folk</a></li>
                        <li className="pure-menu-item"><a href="/backend" className="pure-menu-link">backend</a></li>
                        <li className="pure-menu-item"><a href="/Artists" className="pure-menu-link">Artists</a></li>
                        <li className="pure-menu-item"><a href="/locallogin" className="pure-menu-link">sign in</a></li>
                    </ul>

                </div>

            </div>
        );
    },
        componentDidMount: function(){
            window.addEventListener('onClick', this.handleToggleClick);
        },
    componentWillUnmount: function(){
        window.removeEventListener('onClick', this.handleToggleClick);
    }

});
module.exports = horizontalScrollMenu;