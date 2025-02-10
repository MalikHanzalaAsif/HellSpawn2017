import React from 'react'

const TermsConditions = () => {
    return (
        <div id='TermsConditions' className='mb-16'>
            <h1 className='mt-16 text-5xl font-semibold text-center mb-8'>Terms & Conditions</h1>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>1. Introduction</h2>
                <p className='subPara'>Welcome to <b>HellSpawn 2017.</b> By accessing or using our website <b>(www.hellspawn.store)</b>, you agree to comply with and be bound by these <b>Terms and Conditions.</b> If you do not agree, please do not use our website.
                </p>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>2. Eligibility</h2>
                <p className='subPara'>To use our services, you must be at least <b>18 years old</b> and capable of forming a legally binding contract. By using this website, you confirm that you meet these requirements.
                </p>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>3. Orders and Payments</h2>
                <ul className='subPara' style={{listStyle: "outside"}}>
                    <li>All prices are listed in EUR <b>(€)</b> and include <b>VAT</b> unless stated otherwise.</li>
                    <li>We reserve the right to change prices and availability without notice.</li>
                    <li>Payments must be made at the time of order placement through our accepted payment methods.</li>
                    <li>Orders are subject to acceptance and confirmation by us.</li>
                </ul>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>4. Shipping and Delivery</h2>
                <ul className='subPara' style={{listStyle: "outside"}}>
                    <li>We deliver to addresses within <b>Ireland and selected international destinations.</b></li>
                    <li>Delivery times are estimates and not guaranteed.</li>
                    <li>Customers are responsible for providing accurate delivery information.</li>
                </ul>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>5. Returns and Refunds</h2>
                <ul className='subPara' style={{listStyle: "outside"}}>
                    <li>Customers have the right to return products within <b>14 days</b> of receipt, in compliance with Irish consumer protection laws.</li>
                    <li>Items must be returned unused, in original packaging, and with proof of purchase.</li>
                    <li>Refunds will be processed within <b>14 days</b> of receiving the returned item.</li>
                </ul>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>6. Intellectual Property</h2>
                <p className='subPara'>All content on this website, including text, images, and logos, is owned by or licensed to us and protected under copyright laws. You may not use or reproduce our content without prior permission.
                </p>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>7. Limitation of Liability</h2>
                <p className='subPara'>We are not liable for any indirect, incidental, or consequential damages resulting from the use of our website or products. Our total liability shall not exceed the amount paid for the purchased product.
                </p>
            </div>

            <div className='privacyPara ml-4'>
                <h2 className='subHeading'>2. Governing Law</h2>
                <p className='subPara'>These <b>Terms and Conditions</b> are governed by the laws of <b>Ireland.</b> Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Irish courts.
                </p>
            </div>
            
        </div>
    )
}

export default TermsConditions