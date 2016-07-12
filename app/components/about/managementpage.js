import React from 'react';

import AboutNavbar from './aboutnavbar';
import DefaultFooter from '../defaultfooter';
import DefaultNavbar from '../defaultnavbar';

export default class ManagementPage extends React.Component {
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
          <div class="content-header text-center">
            <h1>
              Meet the team behind Freelancer!
            </h1>
            <p>
              Freelancer's Board & Management
            </p>
          </div>
          <div class="row center-block">
            <div class="section-header text-center">
              <span>DIRECTORS</span>
            </div>
            <ul>
              <li>
                <figure>
                  <img src="https://cdn6.f-cdn.com/static/css/images/pages/info/management-matt.jpg?v=de775b2dbcf4903c6b59356ef9dd35a2&%3Bm=6">
                </figure>
                <h3>
                  MATT BARRIE
                </h3>
                <span class="company-role">
                  Chief Executive Officer & Chairman
                </span>
                <br />
                <span class="accomplishments">
                  BE (Hons I) BSc (Hons I) GDipAppFin MAppFin MSEE (Stanford) GAICD SEP FIEAust
                </span>
                <p>
                  Matt Barrie is an award winning technology entrepreneur. He is Chief Executive of Freelancer.com, the world's largest freelancing marketplace connecting over 19 
                </p>
                <a href="#matt">Read more about Matt</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn5.f-cdn.com/static/css/images/pages/info/management-darren.jpg?v=e56d9a26a7162dc6bbd8a88ba89c5689&%3Bm=6">
                </figure>
                <h3>
                  DARREN WILLIAMS
                </h3>
                <span class="company-role">
                  Non Executive Director
                </span>
                <br />
                <span class="accomplishments">
                  BSc (Hons I) PhD (Computer Science) MAICD
                </span>
                <p>
                  Darren transitioned from Executive Director and Chief Technology Officer of Freelancer to Non-Executive Director in late 2015. In his time as an executive he was 
                </p>
                <a href="#darren">Read more about Darren</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn5.f-cdn.com/static/css/images/pages/info/management-simon.jpg?v=bbc69e9a06d2d34a0144c7c83a47a273&%3Bm=6">
                </figure>
                <h3>
                  SIMON CLAUSEN
                </h3>
                <span class="company-role">
                  Non Executive Director
                </span>
                <br />
                <span class="accomplishments">

                </span>
                <p>
                  Simon is a founding investor of Freelancer. Simon has more than 17 years experience in high growth technology businesses in both Australia and the United States. His 
                </p>
                <a href="#simon">Read more about Simon</a>
              </li>
            </ul>
            <div class="section-header text-center">
              <span>SENIOR MANAGEMENT</span>
            </div>
            <ul>
              <li>
                <figure>
                  <img src="https://cdn2.f-cdn.com/static/css/images/pages/info/management-neil.jpg?v=69f21f47e4001d064596ef239aee1a6a&%3Bm=6">
                </figure>
                <h3>
                  NEIL KATZ
                </h3>
                <span class="company-role">
                  Chief Financial Officer
                </span>
                <br />
                <span class="accomplishments">
                  B Com (Hons) ACA
                </span>
                <p>
                  Neil Katz is the Chief Financial Officer at Freelancer and is responsible for the finance and administration functions of the Company. Since joining Freelancer in May 2009, Neil 
                </p>
                <a href="#neil">Read more about Neil</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn5.f-cdn.com/static/css/images/pages/info/management-christopher.jpg?v=ff3c3fef94b109cce73cea03919eecf4&%3Bm=6">
                </figure>
                <h3>
                  CHRISTOPHER KOCH
                </h3>
                <span class="company-role">
                  Deputy Chief Financial Officer
                </span>
                <br />
                <span class="accomplishments">
                  M.Fin (INSEAD) LLB (Hons I) B.Ec F. Fin GAICD
                </span>
                <p>
                  Christopher Koch is Deputy Chief Financial Officer, with a focus on mergers and acquisitions, corporate strategy and investor engagement. He joined Freelancer in 2015.
                </p>
                <a href="#christopher">Read more about Christopher</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn6.f-cdn.com/static/css/images/pages/info/management-willix.jpg?v=7f1c5336e850a9812f94b215e9da32db&%3Bm=6">
                </figure>
                <h3>
                  WILLIAM HALIM
                </h3>
                <span class="company-role">
                  Senior Vice President of Growth
                </span>
                <br />
                <span class="accomplishments">
                  B Eng (Mechatronics) (Hons I) / B Computer Science / EPGC (Stanford)
                </span>
                <p>
                  Willix Halim is the Senior Vice President of Growth at Freelancer and manages the growth team, which oversees all revenue, product management, engineering, data 
                </p>
                <a href="#william">Read more about William</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn6.f-cdn.com/static/css/images/pages/info/management-peter.jpg?v=4c2b2170061532c4464b32afd7859547&%3Bm=6">
                </figure>
                <h3>
                  PETER PHILLIPS
                </h3>
                <span class="company-role">
                  Vice President, Engineering
                </span>
                <br />
                <span class="accomplishments">
                  BSc (Hons I) PhD (Computer Science)
                </span>
                <p>
                  Peter is Vice President of Engineering at Freelancer. In this role, he is responsible for leading the global engineering teams and defining and executing the company's 
                </p>
                <a href="#peter">Read more about Peter</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn6.f-cdn.com/static/css/images/pages/info/management-greg.jpg?v=c25945db0251ff743348f300ae410e5a&%3Bm=6">
                </figure>
                <h3>
                  GREG ROBINSON
                </h3>
                <span class="company-role">
                  Vice President, Compliance
                </span>
                <br />
                <span class="accomplishments">
                  ACI, SA Fin
                </span>
                <p>
                  Greg Robinson is the Vice President of Compliance at Freelancer. Greg oversees the overall compliance environment within the Company. In this role, Greg is
                </p>
                <a href="#greg">Read more about Greg</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn2.f-cdn.com/static/css/images/pages/info/management-matto.jpg?v=ce0e9939b65de5997af6e1d18c840d31&%3Bm=6">
                </figure>
                <h3>
                  MATT O'KANE
                </h3>
                <span class="company-role">
                  Vice President, Technical Operations
                </span>
                <br />
                <span class="accomplishments">
                  BSc BIT (Hons1) MBA (AGSM)
                </span>
                <p>
                  Matt O'Kane is responsible for formulating and executing the plans of the product and technical teams of Freelancer.com and its related websites. Also, Matt is
                </p>
                <a href="#greg">Read more about Greg</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn3.f-cdn.com/static/css/images/pages/info/management-adam.jpg?v=42eb0818534aa28d8cab2d3e7da1b197&%3Bm=6">
                </figure>
                <h3>
                  ADAM BYRNES
                </h3>
                <span class="company-role">
                  Senior Director, International
                </span>
                <br />
                <span class="accomplishments">
                  BE (Electrical) (Hons I) / BSc (Adv) (Physics)
                </span>
                <p>
                  Adam Byrnes is responsible for expanding Freelancer across the world, particularly into markets that are dominated by non-english native speakers, such as Asia 
                </p>
                <a href="#adam">Read more about Adam</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn5.f-cdn.com/static/css/images/pages/info/management-joe.jpg?v=1bac652cdafd039cf83e8e6b28e87ba8&%3Bm=6">
                </figure>
                <h3>
                  JOE GRISTON
                </h3>
                <span class="company-role">
                  Director, People & Talent
                </span>
                <br />
                <span class="accomplishments">
                  BSc (Computer Science)
                </span>
                <p>
                  Joe Griston is the Director of People and Talent at Freelancer. He is responsible for attracting expertise into the organisation whilst establishing a culture that ensures 
                </p>
                <a href="#joe">Read more about Joe</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn2.f-cdn.com/static/css/images/pages/info/management-sebastian.jpg?v=47244c3e82e43aac158ec7e48e873187&%3Bm=6">
                </figure>
                <h3>
                  SEBASTIÁN SISELES
                </h3>
                <span class="company-role">
                  Director, International
                </span>
                <br />
                <span class="accomplishments">
                  JD (University of Buenos Aires) / MBA (University of Pittsburgh) / Marketing Diploma (FAECC, Argentina)
                </span>
                <p>
                  Sebastián Siseles is responsible for creating, communicating, maintaining, and aligning the company's international expansion strategy for long-term, profitable 
                </p>
                <a href="#sebastian">Read more about Sebastián</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn3.f-cdn.com/static/css/images/pages/info/management-evan.jpg?v=40845a32ca05679da5687a43541b4ff5&%3Bm=6">
                </figure>
                <h3>
                  EVAN TAN
                </h3>
                <span class="company-role">
                  Regional Director - South East Asia
                </span>
                <br />
                <span class="accomplishments">
                  BA Mass Communications
                </span>
                <p>
                  Evan Tan leads a team of PR and communications professionals spread across Asia, which ensure that Freelancer is the top-of-mind online outsourcing and 
                </p>
                <a href="#evan">Read more about Evan</a>
              </li>
              <li>
                <figure>
                  <img src="https://cdn6.f-cdn.com/static/css/images/pages/info/management-helma.jpg?v=3f030e89e18d80a643f2e70991b5d901&%3Bm=6">
                </figure>
                <h3>
                  HELMA KUSUMA
                </h3>
                <span class="company-role">
                  Country Manager - Indonesia
                </span>
                <br />
                <span class="accomplishments">
                  BA - Public Relations (University of Indonesia)
                </span>
                <p>
                  Helma Kusuma is responsible for driving the growth of Freelancer in Indonesia. Helma's activities include liaising with local media and stakeholders, seeking opportunities 
                </p>
                <a href="#helma">Read more about Helma</a>
              </li>
            </ul>
          </div>
        </div>
        <DefaultFooter />
      </div>
    )
  } 
}