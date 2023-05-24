import React,{useEffect, useState} from 'react'
import Layout from '@/src/components/layout/Layout';
import ResetPassword from '@/src/components/ResetPassword';

export default function UserResetPassword() {

    return (
        <Layout title="Vehicle Bells | reset-password" showHead='false' showFooter='false'>
            <ResetPassword />
        </Layout>
      )


}