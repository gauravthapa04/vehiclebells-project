import Layout from '@/src/components/layout/Layout';
import UserAllVehicle from "@/src/components/AllVehicle"
export default function AllVehicle(){
    return(
        <Layout title="Vehicle Bells | All Vehicle" showHead='false' showFooter='false'>
            <UserAllVehicle />
        </Layout>
    )
}