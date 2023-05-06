import React, { Component } from 'react';
import Layout from '@/src/components/layout/Layout';
import ForgotPasswordForm from '@/src/components/ForgotPassword'
class ForgotPassword extends Component {
    render() {
        return (
            <Layout title="Vehicle Bells | Forgot Password" showHead='false' showFooter='false'>
                <ForgotPasswordForm />
           </Layout>
        );
    }
}

export default ForgotPassword;