import Layout from '@/src/components/layout/Layout';
import UserDashboard from '@/src/components/UserDashborad/UserDashboard';
export default function Dashboard() {
  return (
    <Layout title="Vehicle Bells | Dashboard" showHead='false' showFooter='false'>
        <UserDashboard />
    </Layout>
  )
}