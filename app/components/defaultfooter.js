import React from 'react';

export default class DefaultFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div>
        <footer class="footer">
          <div class="container-fluid">
            <div class="row app-statistics text-center">
              <div class="col-md-6 col-xs-6">
                <span class="app-stat-num">19,495,091</span>
                <br />
                <span class="app-stat-val">REGISTERED USERS</span>
              </div>
              <div class="col-md-6 col-xs-6">
                <span class="app-stat-num">9,210,427</span>
                <br />
                <span class="app-stat-val">TOTAL JOBS POSTED</span>
              </div>
            </div>
            <div class="row app-links">
              <div class="row support center-block">
                <div class="col-md-2 col-xs-2">
                  <h3>
                    NETWORK
                  </h3>
                  <ul>
                    <li><a href="/jobs/1/">Projects</a></li>
                    <li><a href="/contest/">Contests</a></li>
                    <li><a href="/sitemap/">Sitemap</a></li>
                    <li><a href="/local?fromLinks=1">Freelancer Local</a></li>
                    <li><a href="/services/">Services</a></li>
                    <li><a href="https://www.escrow.com/">Escrow</a></li>
                    <li><a href="http://www.warriorforum.com">Warrior Forrum</a></li>
                    <li><a href="http://www.freemarket.com">Free Market</a></li>
                  </ul>
                </div>
                <div class="col-md-2 col-xs-2">
                  <h3>
                    ABOUT
                  </h3>
                  <ul>
                    <li><a href="/about/overview/">About us</a></li>
                    <li><a href="/info/how-it-works/">How it Works</a></li>
                    <li><a href="/about/team">Team</a></li>
                    <li><a href="/mobile">Mobile App</a></li>
                    <li><a href="/desktop-app/">Desktop App</a></li>
                    <li><a href="/about/security/">Security</a></li>
                    <li><a href="#">Report Bug</a></li>
                    <li><a href="/feesandcharges/">Fees & Charges</a></li>
                    <li><a href="/about/investor/">Investor</a></li>
                    <li><a href="/about/quotes/">Quotes</a></li>
                  </ul>
                </div>
                <div class="col-md-2 col-xs-2">
                  <h3>
                    PRESS
                  </h3>
                  <ul>
                    <li><a href="/about/news/">In the News</a></li>
                    <li><a href="/about/press/">Press Releases</a></li>
                    <li><a href="/about/awards/">Awards</a></li>
                    <li><a href="/info/estimonial/">Testimonials</a></li>
                    <li><a href="/info/timeline">Timeline</a></li>
                  </ul>
                </div>
                <div class="col-md-2 col-xs-2">
                  <h3>
                    GET IN TOUCH
                  </h3>
                  <ul>
                    <li><a href="/support">Get Support</a></li>
                    <li><a href="/info/advertise/">Advertise with Us</a></li>
                    <li><a href="/careers/">Careers</a></li>
                    <li><a href="/community/">Community</a></li>
                    <li><a href="/affiliates/">Affiliate Program</a></li>
                    <li><a href="/merchandise/">Merchandise</a></li>
                    <li><a href="/support?show_ticket_modal-true">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-md-4 col-xs-4">
                  <img class="img-responsive" src="https://cdn2.f-cdn.com/build/img/footer-mobile.png?v=fba8072dc34eaabbe6704cff440f913e&%3Bm=6" />
                  <h3 class="top-heading">
                    DOWNLOAD THE FREELANCER APP
                  </h3>
                  <p>
                    Connect with talented freelancers and manage your project wherever you are on the go.
                  </p>
                  <h3 class="bottom-heading">
                    ENTER YOUR PHONE NUMBER
                  </h3>
                  <form class="input-group">
                    <input type="text" class="form-control" placeholder="Enter phone number" />
                    <a class="input-group-btn" href="#">
                      <button type="submit" class="btn btn-default">
                        Send me the link!
                      </button>
                    </a>
                  </form>
                </div>
              </div>
              <div class="row legal center-block">
                <div class="col-md-8 col-xs-8">
                  <ul>
                    <li><a href="/about/privacy">Privacy Policy</a></li>
                    <li><a href="/about/terms">Terms and Conditions</a></li>
                    <li><a href="/dmca">Copyright Infringement Policy</a></li>
                    <li><a href="/info/codeofconduct">Code of Conduct</a></li>
                  </ul>
                  <p>
                    Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)
                    <br />
                    Copyright © 2016 Freelancer Technology Pty Limited (ACN 142 189 759)
                  </p>
                </div>
                <div class="col-md-4">

                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
