import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div id='PrivacyPolicy' className='mb-16'>
      <h1 className='mt-16 text-5xl font-semibold text-center mb-8'>Privacy Policy</h1>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>1. Introduction</h2>
        <p className='subPara'>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the General Data Protection Regulation <b>(GDPR).</b>
        </p>
      </div>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>2. Data We Collect</h2>
        <ul className='subPara' style={{ listStyle: "outside" }}>
          We may collect the following types of data:
          <li>
            Personal details <b>(name, email, phone number, address)</b>
          </li>
          <li>
            Payment information <b>(processed securely through third-party payment providers)</b>
          </li>
          <li>
            Browsing behavior on our website
          </li>
        </ul>
      </div>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>3. How We Use Your Data</h2>
        <ul className='subPara' style={{ listStyle: "outside" }}>
          Your data is used for:
          <li>Processing and delivering your orders</li>
          <li>Providing customer support</li>
          <li>Sending marketing communications (if you opt-in)</li>
          <li>Improving our website and services</li>
        </ul>
      </div>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>4. Data Sharing</h2>
        <ul className='subPara'>
          We <b>do not sell</b> or rent your data. However, we may share it with trusted third-party service providers for payment processing, shipping, and marketing purposes.
        </ul>
      </div>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>5. Cookies and Tracking</h2>
        <ul className='subPara'>
          Our website uses cookies to enhance user experience. By using our site, you consent to the use of cookies. You can adjust cookie preferences in your browser settings.
        </ul>
      </div>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>6. Your Rights</h2>
        <ul className='subPara' style={{listStyle: "outside"}}>
          Under <b>GDPR,</b> you have the right to:
          <li>Access your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to data processing</li>
          <li>Withdraw consent for marketing communications</li>
        </ul>
      </div>

      <div className='privacyPara ml-4'>
        <h2 className='subHeading'>7. Data Security</h2>
        <p className='subPara'>We implement security measures to protect your personal data. However, no online platform can guarantee complete security.
        </p>
      </div>
      <div className='privacyPara ml-4 mb-8'>
        <h2 className='subHeading'>8. Changes to This Policy</h2>
        <p className='subPara'>We reserve the right to update this policy. Changes will be posted on our website with an updated effective date.
        </p>
      </div>
      For any queries, contact us at <a href="mailto:bryan_brown20@yahoo.com" className='text-blue-500'>bryan_brown20@yahoo.com</a>
    </div>
  )
}

export default PrivacyPolicy