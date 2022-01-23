import React, { Component } from "react";
import Slider from "react-slick";
import company1 from '../img/big/1.png'
import company5 from '../img/big/2.png'
import company7 from '../img/big/3.png'
import company2 from '../img/big/4.png'
import company6 from '../img/big/5.png'
import company4 from '../img/big/6.png'
import company3 from '../img/big/7.jpg'
import company8 from '../img/big/8.jpg'

export default class Reviews extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  state = { currentSlide: 0 };

  handleAfterChange(index) {
    if (index < 0) {
      this.setState({
        currentSlide: 7
      });
    }
    else if (index > 7) {
      this.setState({
        currentSlide: 0
      });
    }
    else {
      this.setState({
        currentSlide: index
      });
    }
  };

  next() {
    this.slider.slickNext();
    this.handleAfterChange(this.state.currentSlide + 1);
  }
  previous() {
    this.slider.slickPrev();
    this.handleAfterChange(this.state.currentSlide - 1);
  }
  render() {
    const settings = {
      infinite: true,
      speed: 600,
      fade: true,
      swipe: false,
      draggable: false,
      slidesToShow: 1,
      adaptiveHeight: true,
    };

    return (
      <section className="review-wrapper">
      </section>
    );
  }
}
