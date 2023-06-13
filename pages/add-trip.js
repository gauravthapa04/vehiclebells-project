import Layout from '@/src/components/layout/Layout';
import UserAddTrip from '@/src/components/AddTrip';
export default function Dashboard() {
  return (
    <Layout title="Vehicle Bells | Add Trip" showHead='false' showFooter='false'>
        <UserAddTrip />
    </Layout>
  )
}