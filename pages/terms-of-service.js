import Layout from '@/src/components/layout/Layout';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
export default function TermsOfServices() {

    return(
        <>
        <Layout title="Terms of Service">
            <div className='div-40tb-60lr'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <h1>Terms of Service</h1>
                        <p>Welcome to the Vehicle Bells community! We realize that expense tracking and taxes are serious matters, and we appreciate your trust in us. These terms (these "Terms") apply to your use of www.vehiclebells.com and any related websites or platforms, as well as all other online products and services (collectively, the "Service") provided by Vehicle Bells, Inc. ("Vehicle Bells," "we," "us," or "our").</p>
                    </div>
                    <div className="col-md-12">
                      <h2>Accepting these Terms</h2>
                      <p>If you access or use the Service, it means you agree to be bound by all of the terms below. Please read all of the terms before you use the Service. If a term does not make sense to you, please let us know. If you don't agree to all of the terms below, you may not use the Service. This Agreement is entered into between you and Vehicle Bells. If you have been provided access to the Service through your relationship with a third-party company, you acknowledge that such company is not a party to this Agreement.</p>
                    </div>  
                    <div className="col-md-12">
                        <h2>Changes to these Terms</h2>
                        <p>We encourage you to review the Terms regularly to stay informed about our practices. We may change these Terms from time to time. For example, we may update the Terms if we introduce a new feature. If we make any changes, we will notify you by revising the date at the top of the policy and, in certain cases, providing additional notice (such as sending you an email notification). Any modifications to these Terms will be effective when we publish them. By continuing to use the Service after the updated Terms have been posted, you indicate your acceptance of the revised Terms.</p>
                    </div>
                    <div className="col-md-12">
                        <h2>Privacy Policy</h2>
                        <p>For information about how we collect, use and share information about you via the Service, please see our <Link href="/privacy-policy">Privacy Policy.</Link></p>
                    </div>  
                    <div className='col-md-12'>
                        <h2>Description of the Service</h2>
                        <p>Vehicle Bells provides a service to help people track revenue, expenses, and other important financial data. Independent contractors, employees, and others use the service to manage various aspects of their business. Vehicle Bells allows and facilitates users to share their data with employers for reimbursement or tax professionals to assist with tax return preparation. Vehicle Bells is not responsible or liable for any information you share using the Services. Vehicle Bells also offers additional services, such as a subscription to Vehicle Bells Premium or access to a Vehicle Bells Savings Account, which are further described below. For more information about the Service, please contact us at support@vehiclebells.com.</p>
                    </div> 
                    <div className='col-md-12'>
                        <h2>Right to Use the Service</h2>
                        <p>On the condition that you fully comply with these Terms, Vehicle Bells grants you a limited, nonexclusive, non-transferable, and revocable license to access and use the Service. Except as expressly authorized by these Terms, you may not: (a) modify, disclose, alter, translate, or create derivative works of the Service; (b) license, sublicense, resell, distribute, lease, rent, lend, transfer, assign, or otherwise dispose of the Service; (c) disassemble, decompile, or reverse engineer any of the software components of the Service; (d) copy, frame, or mirror any part of the Service; (e) interfere with or disrupt the integrity or performance of the Service; or (f) attempt to gain unauthorized access to the Service or its related systems or networks.</p>
                    </div>
                    <div className='col-md-12'>
                        <h2>Creating an Account with Vehicle Bells</h2>
                        <p>When you create a member account, you agree to maintain the security of your password and accept all risks associated with unauthorized access to your account. You acknowledge that a compromised password can lead to the unauthorized disclosure of your sensitive and personal information. If you discover or suspect any security breaches related to the Service, please notify us immediately. You represent and warrant to us that all information you provide in connection with your account is accurate, truthful, current, and complete. Vehicle Bells reserves the right to deny, deactivate, or terminate any account at our discretion.</p>
                    </div>    
                    <div className='col-md-12'>
                        <h2>License</h2>
                        <p>Subject to the terms, conditions, and limitations set forth in the Terms, Vehicle Bells Inc. grants you a nonexclusive, non-transferable, and revocable license to use Vehicle Bells on any mobile device that you own or control. The terms of the license will also govern any upgrades provided by Vehicle Bells Inc. that replace and/or supplement the original Vehicle Bells, unless such upgrade is accompanied by a separate license, in which case the terms of that license will govern.</p>
                    </div>       
                </div>
            </div>
        </div>
        </Layout>
        </>
    )
}