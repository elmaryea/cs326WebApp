import React from 'react';

import AboutNavbar from '../../components/aboutnavbar';
import DefaultFooter from '../../components/defaultfooter';
import DefaultNavbar from '../../components/defaultnavbar';

export default class DMCAPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="dmca">
        <DefaultNavbar />
        <AboutNavbar />
        <div className="body">
          <h1>
            COPYRIGHT INFRINGEMENT POLICY
          </h1>
          <p>
            Freelancer respects the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide Freelancer's Copyright Agent with the information specified below in the form of a "Notification of Alleged Infringement." It is Freelancer's policy to respond to clear Notifications of Alleged Infringement, and our policy is designed to make submitting Notifications of Alleged Infringement as straightforward as possible while reducing the number of Notifications that we receive that are fraudulent or difficult to understand or verify. If you are a subscriber and concerned about the removal of or blocked access to your content, please provide Freelancer's Copyright Agent with the written information specified below in the form of a "Counter-Notification." The forms specified below are consistent with the forms suggested by the United States Digital Millennium Copyright Act (the text of which can be found at the U.S. Copyright Office Website at <a href="http://www.copyright.gov">http://www.copyright.gov</a>).
          </p>
          <h3>
            DMCA NOTIFICATION OF ALLEGED COPYRIGHT INFRINGEMENT
          </h3>
          <p>
            If you would like to submit a claim of copyright infrengement for material, please substantiate each claim by sending Freelancer's registered Copyright Agent a Notification of Claimed Infringement at the email or mailing address below:
          </p>
          <p>
            Copyright Agent P.O. Box 20277 World Square, NSW, Australia, 2002 <a href="mailto:copyright@freelancer.com">copyright@freelancer.com</a>
          </p>
          <p>
            To be considered effective, a Notification of Alleged Infringement must be submitted in writing and include the following information:
          </p>
          <ol>
            <li>
              Physical or electronic signature of the owner, or a person authorized to act on behalf of the owner, of an exclusive copyright that has allegedly been infringed
            </li>
            <li>
              Identification of the copyrighted material claimed to have been infringed
            </li>
            <li>
              Identification of the material that is claimed to be infringing or to be the subject of infringing activity that is to be removed or access to which is to be disabled
            </li>
            <li>
              Information reasonably sufficient to permit Freelancer to locate the material that is claimed to be infringing or to be the subject of infringing activity
            </li>
            <li>
              Information reasonably sufficient to permit Freelancer to contact you, such as a physical address, email address, and telephone number
            </li>
            <li>
              A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law
            </li>
            <li>
              A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed
            </li>
          </ol>
          <h3>
            DMCA COUNTER-NOTIFICATION
          </h3>
          <p>
            If you elect to send us a Counter-Notification, please send an email or letter to Freelancer's registered Copyright Agent at the email or mailing address below:
          </p>
          <p>
            Copyright Agent P.O. box 20277 World Square, NSW, Australia, 2002 <a href="mailto:copyright@freelancer.com">copyright@freelancer.com</a>
          </p>
          <p>
            To be considered effective, a Counter-Notification must be submitted in writing and include the following information:
          </p>
          <ol>
            <li>
              Physical or electronic signature of the subscriber or a person authorized to act on behalf of the subscriber.
            </li>
            <li>
              Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled.
            </li>
            <li>
              A statement under penalty of perjury that the subscriber has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.
            </li>
            <li>
              The subscriber's name, address, and telephone number, and a statement that the subscriber consents to the jurisdiction of California, USA and that the subscriber will accept service of process from the person who submitted the Notification of Claimed Infringement or an agent of such person.
            </li>
          </ol>
          <p>
            Please note that under Section 512(f) of the Copyright Act, any person who knowingly materially misrepresents that material or activity was removed or disabled by mistake or misidentification may be subject to liability. Please also be advised that we enforce a policy that provides for the termination in appropriate circumstances of subscribers who are repeat infringers.
          </p>
        </div>
        <DefaultFooter />
      </div>
    )
  }
}
