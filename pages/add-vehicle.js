import Layout from '@/src/components/layout/Layout';
import UserAddVehicle from '@/src/components/AddVehicle';
export default function Dashboard() {
  return (
    <Layout title="Vehicle Bells | Dashboard" showHead='false' showFooter='false'>
        <UserAddVehicle />
    </Layout>
  )
}