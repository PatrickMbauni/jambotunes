/**
 * Created by Gitonga on 6/23/2015.
 */
var React = require('react');
var $ = require('jquery');

var Lbox = React.createClass({


    componentDidMount: function(){
        document.addEventListener('click',this.handleReadyEvent);
        //ajax lets pull songTitle,Artist and compute is duration
        //this can be pull from the song itself
        this.getContent();
    },
    playPreview: function(){

    },
    pauseTrack: function(){

    },
    trackSocialStatus: function(){

    },
    handleReadyEvent: function(e){
        $(".connect-icons li").hover(function(){
            $(".connect-box").toggleClass("color-twitter");
            $(".text-twitter").toggleClass("show");
        });
    },
    render: function(){
        return (
            <div  className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className="container">
                    <section className="about">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.songTitle}</h2>
                        <img src={this.props.image} alt={this.props.title} />
                    </section>
                    <section className="connect">
                        <div clasName="box connect-box">
                            <ul className="connect-icons"  >
                                <li><a href="#" className="twitter" target="_blank"><span className="zocial-twitter"></span></a><span className="text-twitter">Twitter</span></li>
                                <li><a href="#" className="email" ><span className="zocial-email" ></span></a><span className="text-email" >email</span></li>
                                <li><a href="#" className="skype"><span className="zocial-skype"></span></a><span className="text-skype">Skype</span></li>
                                <li><a href="#" className="soundcloud"><span className="zocial-soundcloud"></span></a><span className="text-soundcloud">Soundcloud</span></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
});

module.exports = Lbox;