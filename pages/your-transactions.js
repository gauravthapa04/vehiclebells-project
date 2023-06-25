import Layout from '@/src/components/layout/Layout';
import UserTransactions from '@/src/components/YourTransactions';

export default function YourTransactions(){
    return(
        <Layout title="Vehicle Bells | Your Transactions" showHead='true' showFooter='false'>
            <>
            <UserTransactions/>
            </>
        </Layout>
    )
}