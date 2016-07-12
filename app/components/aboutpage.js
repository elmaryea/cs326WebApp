import React from 'react';

import AboutNavbar from './aboutnavbar';
import DefaultFooter from '../defaultfooter';
import DefaultNavbar from '../defaultnavbar';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  
  render () {
    return (
      <div>
        <DefaultNavbar />
        <AboutNavbar />
        <div class="container-fluid body">
          <div class="overview-page">
            <div class="banner-section">
              <div class="banner-section-inner center-block">
                <div class="banner-section-content text-center">
                  <h1 class="center-block">
                    World's largest freelancing and crowdsourcing marketplace.
                  </h1>
                  <p class="center-block">
                    We connect over 19,538,346 employers and freelancers globally from over 247 countries, regions, and territories.
                  </p>
                </div>
              </div>
            </div>
            <div class="overview-section center-block">
              <div class="overview-inner">
                <figure>
                  <img class="img-responsive center-block" src="https://cdn3.f-cdn.com/static/css/images/about-us/overview-company-overview.jpg?v=faf2a57472668fdf43ff4bfe6e339848&%3Bm=6">
                </figure>
                <div class="overview-info">
                  <h2>
                    Company Overview
                  </h2>
                  <p>
                    Freelancer.com is the world's largest freelancing, outsourcing and crowdsourcing marketplace by number of users and projects. We connect over 19,539,551 employers and freelancers globally from over 247 countries, regions and territories. Through our marketplace, employers can hire freelancers to do work in areas such as software development, writing, data entry and design right through to engineering, the sciences, sales and marketing, accounting and legal services.
                  </p>
                  <p>
                    Freelancer Limited is trading on the Australian Securities Exchange under the ticker ASX:FLN
                  </p>
                </div>
              </div>
            </div>
            <div class="location-section">

            </div>
            <div class="more-info-section center-block">
              <div class="info-body">
                <h2>
                  Our Online Economy
                </h2>
                <p>
                  The video below illustrates the Freelancer online economy. The pink lines indicate where projects are being posted by employers, and the blue lines indicate where the projects are being performed by freelancers. Thicker lines indicate a higher dollar volume of work. White dots indicate the location of Freelancer's users.
                </p>
              </div>
              <figure>
                <a href="#">
                  <img src="https://cdn3.f-cdn.com/static/css/images/about-us/overview-map-placeholder.jpg?v=ae482ab6bcc76c5e5f1ed51f2c6db8a3&%3Bm=6">
                </a>
                <iframe src="https://www.youtube.com/embed/aK4nWT6gTbA?loop=1&rel=0&autohide=1&showinfo=0">

                </iframe>
              </figure>
              <ul class="text-center">
                <li>
                  <a href="/about/press">
                    <img class="img-responsive" src="https://cdn3.f-cdn.com/static/css/images/about-us/overview-press.jpg?v=4f11bcfcc211491aacfdcc682b60a0ed&%3Bm=6">
                  </a>
                  <h3>
                    Press
                  </h3>
                  <p>
                    Find out our press releases under this section
                  </p>
                  <a href="/about/press" class="btn btn-default">
                    View Press
                  </a>
                </li><!--
             --><li>
                  <a href="/about/careers">
                    <img class="img-responsive" src="https://cdn6.f-cdn.com/static/css/images/about-us/overview-career.jpg?v=f202b7473c711ae7461cf607a55d627f&%3Bm=6">
                  </a>
                  <h3>
                    Career Opportunities
                  </h3>
                  <p>
                    Find out our press releases under this section
                  </p>
                  <a href="/about/careers" class="btn btn-default">
                    Join our team
                  </a>
                </li><!--
             --><li>
                  <a href="/img/freelancer-media-kit.zip">
                    <img class="img-responsive" src="https://cdn6.f-cdn.com/static/css/images/about-us/overview-media.jpg?v=da522df96ac7110291ff3fdfd0330987&%3Bm=6">
                  </a>
                  <h3>
                     Media Kit
                  </h3>
                  <p>
                    Download our brand media kit in vector files
                  </p>
                  <a href="/img/freelancer-media-kit.zip" class="btn btn-default">
                    View our media kit
                  </a>
                </li>
              </ul>
              <div class="info-details">
                <div class="info-provenance">
                  <h5>
                    Provenance
                  </h5>
                  <p>
                    Freelancer.com has acquired several outsourcing marketplaces including GetAFreelancer.com and EUFreelance.com (founded by Magnus Tibell in 2004, Sweden), LimeExchange (a former business of Lime Labs LLC, USA), Scriptlance.com (founded by Rene Trescases in 2001, Canada, one of the early pioneers in freelancing), Freelancer.de Booking Center (Germany), Freelancer.co.uk (United Kingdom), Webmaster-talk.com (USA), a forum for webmasters, Rent-A-Coder and vWorker (founded by Ian Ippolito, USA, another early innovator in the freelance marketplace space).
                  </p>
                </div><!--
             --><div class="info-address">
                  <h5>
                    Freelancer Limited
                  </h5>
                  <p>
                    <strong>Registered Office</strong><br />
                    Level 20, World Square<br />
                    680 George Street<br />
                    Sydney, New South Wales<br />
                    Australia 2000<br />
                    ACN 141 959 042<br />
                    <a href="mailto:support@freelancer.com">support@freelancer.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DefaultFooter />
      </div>
    )
  }
}