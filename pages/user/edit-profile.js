import React, { Component } from 'react';
import Layout from '@/src/components/layout/Layout';
import ForgotPasswordForm from '@/src/components/ForgotPassword'
import EditProfileForm from '@/src/components/EditProfile';
class EditProfile extends Component {
    render() {
        return (
            <Layout title="Vehicle Bells | Edit Profile" showHead='false' showFooter='false'>
                <EditProfileForm />
           </Layout>
        );
    }
}

export default EditProfile;