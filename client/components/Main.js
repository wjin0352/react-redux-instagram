import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';

const Main = React.createClass({
  componentWillMount(){
    $(document).ready(function() {
      console.log('ready')
      // this line just initializes all popover messages, for detail refer to bootstrap popovers
      $('[data-toggle="popover"]').popover();
      // scrolling fade
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  },

  render() {
    return (
      <div id="top">
        <h1 id='title'>
          <Link to='/'>My Photo Gallery</Link>
        </h1>
        <hr/>
        {React.cloneElement({...this.props}.children, {...this.props})}
        <Footer/>
      </div>
    )
  }
});

export default Main;
