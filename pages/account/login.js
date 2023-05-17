import Layout from '@/src/components/layout/Layout';
import UserLogin from '@/src/components/UserLogin'
export default function Login() {
  return (
    <Layout title="Vehicle Bells | Login" showHead='false' showFooter='false'>
        <UserLogin />
    </Layout>
  )
}
