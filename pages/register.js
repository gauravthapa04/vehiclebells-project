import Layout from '@/src/components/layout/Layout';
import UserRegister from '@/src/components/UserRegister'
export default function Register() {
  return (
    <Layout title="Vehicle Bells | Register" showHead='false' showFooter='false'>
        <UserRegister />
    </Layout>
  )
}
