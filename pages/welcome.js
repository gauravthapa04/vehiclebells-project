import Layout from '@/src/components/layout/Layout';
import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import logo2 from '../src/components/assets/images/logo-white2.png';
import userShield from '../src/components/assets/images/user_shield.png';
import Image from 'next/image';
import Link from 'next/link';
import { FormProvider } from '../src/components/UserForm/FormContext';
import UserSubmitForm from '../src/components/UserForm/UserSubmitForm';
import { useSession } from "next-auth/react"


export default function Welcome() {
  const { data: session } = useSession();

  //console.log(session);

  return (
    <>
    <style jsx global>
      {`
      .f_20 {
        font-size: 20px;
    }   
    .main_wraper {
        padding: 65px 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .welcome_wrap {
        max-width: 1000px;
        margin: 0 auto;
        background: #fff;
        padding: 0px;
        display: flex;
        flex-wrap: wrap;
    }
    .select_option_list {
        max-width: 700px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .select_option_inner {
        background: #F8FAFD;
        padding: 20px;
        border-radius: 4px;
        min-height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid transparent;
        transition: all ease 0.4s;
        /* box-shadow: 5px 5px 30px rgb(5, 39, 83,0.1); */
    }
    .select_option_inner p {
        margin: 0;
    }
    .select_option input[type="radio"]:checked + .select_option_inner {
        background: #fff;
        border: 1px dashed #ec3c3f;
        box-shadow: 5px 5px 30px rgb(5, 39, 83,0.1);
    }
    .select_option {
        position: relative;
        display: block;
        margin-bottom: 20px;
    }
    .select_option input[type="radio"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
    }
    span.s_o_icom {
        display: flex;
        height: 78px;
        width: 78px;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 50px;
        margin: 0 auto 20px;
        font-size: 65px;
        color: #dc3c3e;
    }
    .select_option_inner h4 {
        text-transform: uppercase;
        margin: 0 0 10px;
        font-size: 16px;
        line-height: 20px;
    }
    .welcome_head h3 {
        margin: 0 0 15px;
        font-weight: 500;
        font-size: 18px;
    }
    .steps_list li {
        margin: 0;
        width: 25%;
        text-align: center;
        background: #dde8f8;
        font-size: 0;
        height: 8px;
    }
    ul.steps_list {
        margin: 0 auto;
        border-radius: 50px;
        overflow: hidden;
    }
    .steps_list li.active {
        background: #00c700;
    }
    .w_form_btns .btn:nth-child(2) {
        margin-left: auto;
    }
    .welcome_block  .form-control, .welcome_block .form-select {
        border-radius: 0;
        height: 36px;
        line-height: 1;
        border: 0;
        border-radius: 4px;
        background: #F0F5FD;
    }
    .welcome_block input.form-control.bg_white {
        background: #fff;
    }
    .welcome_block textarea.form-control {
        min-height: 120px;
    }
    .work_type_block .select_option {
        margin-bottom: 10px;
    }
    .work_type_block .select_option_inner {
        min-height: initial;
        flex-direction: row;
        justify-content: flex-start;
        padding: 6px 20px;
    }
    .work_type_block .select_option_inner h5 {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
    }
    .work_type_block .select_option_inner span.s_o_icom {
        margin: 0 15px 0 0;
        height: 45px;
        width: 45px;
        font-size: 16px;
    }
    .c_work_purpose {
        background: #e0e9f7;
        padding: 10px 20px;
        border-radius: 4px;
    }
    .p_or_text {
        text-align: center;
        margin: 15px 0;
        position: relative;
    }
    .work_type_block  .select_option_list {
        margin-top: 0;
    }
    .option_check {
        top: 5px;
        right: 10px;
        font-size: 24px;
        color: #e0e9f7;
        position: absolute;
    }
    .work_type_block  .option_check {
        right: 15px;
        top: calc(50% - 18px);
    }
    .select_option input[type="radio"]:checked + .select_option_inner .option_check {
        color: #00c700;
    }
    span.completed_icon {
        height: 90px;
        width: 90px;
        display: flex;
        margin: 0 auto 30px;
        align-items: center;
        justify-content: center;
        border: 3px solid;
        border-radius: 50px;
        font-size: 40px;
        color: #00c700;
    }
    /* .welcome_block{
        display: none;
    } */
    .progress_bar {
        border-radius: 0;
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;
    }
    
    .welcome_left_block {
        max-width: 46%;
        flex: 0 0 46%;
        background: #0A1C31;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px 20px;
    }
    .welcome_right_block {
        flex: 0 0 54%;
        max-width: 54%;
        padding: 30px 30px 80px;
        position: relative;
    }
    button.btn.next_step {
        margin-left: auto;
    }
    .welcome_left_block_inner {
        text-align: center;
        color: #fff;
        max-width: 350px;
        margin: 0 auto;
    }
    .welcome_left_block_inner h4 {
        color: #fff;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        margin: 0 0 15px;
    }
    .welcome_left_block_inner p {
        color: #fff;
    }
    a.welcome_logo {
        max-width: 220px;
        display: block;
        margin: 0 auto;
    }
    .user_shield {
        margin: 48px auto 40px;
        max-width: 100px;
    }
    .w_form_btns {
        position: absolute;
        bottom: 25px;
        left: 0;
        margin: 0!important;
        width: 100%;
        padding: 0 30px;
        justify-content: space-between!important;
    }
    .welcome_block.completed_step {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 400px;
    }
    
    @media (max-width:991px){
        .welcome_left_block {
            max-width: 100%;
            flex: 0 0 100%;
            padding: 40px 20px;
        }
        .welcome_right_block {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 30px 30px 80px;
        }
        .main_wraper {
            padding: 40px 0;
        }
    }
      
      `}
    </style>


    <Layout title="Vehicle Bells | Welcome" showHead='false' showFooter='false'>
        
            <div className='main_wraper'>

            <Container>

                <div className='welcome_wrap'>
                  <div className='welcome_left_block'>
                    <div className='welcome_left_block_inner'>
                      <Link href='/' className='welcome_logo'>
                          <Image src={logo2} alt='logo'/>
                      </Link>
                      <div className='user_shield'>
                        <Image src={userShield} alt='userShield'/>
                      </div>
                      <h4>Let's Setup Your VehicleBells Account</h4>
                      <p>Tell us about yourself so we can customize the experience for you.</p>
                    </div>
                  </div>
                  <div className='welcome_right_block'>
                  {session == null && session != 'undefined' ? <>
                    <div className='empty-loggedin'>
                     <h2>You'r not logged in. Please login first to view this page.</h2>
                    <Link href='/account/login' className='btn next_step'>Login</Link>
                    </div>
                    </> : (
                    <FormProvider>
                      <UserSubmitForm />
                    </FormProvider>
                    )}
                  </div>
                
                </div>

            </Container>

            </div>
   </Layout>
   </>
  )
}