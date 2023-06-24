import Layout from '@/src/components/layout/Layout';
import UserAllTrips from '@/src/components/AllTrips';
export default function AllTrips(){
    return(
        <Layout title="Vehicle Bells | All Trips" showHead='false' showFooter='false'>
            <UserAllTrips />
        </Layout>
    )
}