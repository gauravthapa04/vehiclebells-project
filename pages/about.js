import Layout from '@/src/components/layout/Layout';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import CTA from '@/src/components/CTA';
import HomeDownloadReports from '@/src/components/HomeDownloadReports';
import Testimonial from '@/src/components/Testimonial';
export default function AboutUS() {

    return(
        <>
            <Layout title="About">
            <div className="hero_2 hero-height wf-section">
                <div className="div-40tb-60lr">
                    <div className="hero_content hero-height">
                        <div className="div-block-2">
                            <h1 className="hero-heading about-us-hero-title text-color-black custom-margin hero-height">We give people back time and money</h1>
                        </div>
                        <div className="div-block-2">
                            <div className="bodytext-16px text-color-black">
                                <p>At Vehicle Bells, we build tools that automate painful everyday tasks and help people save time and money.</p>
                                <p>Saving money allows individuals to achieve financial security, while giving companies more time to focus on assisting their customers.</p>
                                <p>At Vehicle Bells, we firmly believe that every dollar saved has the potential to unlock opportunities, fulfill dreams, and enable companies to go the extra mile for their customers.</p>
                                <p>Vehicle Bells assists businesses and independent workers in saving time and money through user-friendly productivity tools. We are a team of owners and entrepreneurs dedicated to developing technology that simplifies your work life.</p>
                            </div>  
                        </div>
                        </div>
                    </div> 
                </div> 
                <HomeDownloadReports />
                <CTA />
                <Testimonial />
        </Layout>     
        </>
    )
}