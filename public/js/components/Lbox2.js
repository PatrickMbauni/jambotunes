/**
 * Created by Gitonga on 6/23/2015.
 */
var React = require('react');
var $ = require('jquery');

var Lbox2 = React.createClass({
    componentDidMount: function(){
        var nothing = "nothing";
    },
    render: function(){
        return (
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div class="bgtint"></div>
                <section className="bussinesscard">
                    <div className="flip">
                        <div className="front">
                            <div className="top">
                                <div className="logo"><span className="fat">E</span><span className="skinny">K</span></div>
                            </div>
                            <div className="nametroduction">
                                <div className="name">Eduard Kosicky</div>
                                <div className="introduction">A Front End Developer</div>
                            </div>
                            <div className="contact">
                                <div className="website">
                                    <span className="ion-earth"></span>
                                    <a href="#">www.eduardkosicky.me</a>
                                </div>
                                <div className="twitter">
                                    <span className="ion-social-twitter"></span>
                                    <a href="#">@eduardkosicky</a>
                                </div>
                                <div className="phone ">
                                    <span className="ion-ios7-telephone"></span>
                                    <a href="#">0118 999 7253</a>
                                </div>
                                <div className="email ">
                                    <span className="ion-paper-airplane"></span>
                                    <a href="#">eduard@kosicky.me</a>
                                </div>
                            </div>
                        </div>
                        <div className="back"></div>
                    </div>
                    </section >
            </div>
        )
    }
});
module.exports = Lbox2;