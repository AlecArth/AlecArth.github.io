import React, {Component} from 'react'

export default class Home extends Component{
  render() {
    return (
        <section id="home" className="main-banner parallaxie" style={{background: 'url("http://localhost:3000/uploads/banner-01.jpg") center 0px / cover no-repeat fixed'}}>
          <div className="heading" style={{height: '779px'}}>
            <h1>hello i'm Dominic</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <h3 className="cd-headline clip is-full-width">
              <span>Lorem ipsum dolor sit amet </span>
              <span className="cd-words-wrapper" style={{width: '244px'}}>
                <b className="is-visible">Web Developer</b>
                <b className="is-hidden">Web Design</b>
                <b className="is-hidden">Creative Design</b>
                <b className="is-hidden">Graphic Design</b>
              </span>
            </h3>
          </div>
        </section>
    )
  }
}
