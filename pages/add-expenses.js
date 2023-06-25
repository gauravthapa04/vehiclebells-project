import Layout from '@/src/components/layout/Layout';
import AddNewExpenses from '@/src/components/AddExpenses';

export default function AddExpenses(){
    return(
        <Layout title="Vehicle Bells | Your Transactions" showHead='true' showFooter='false'>
            <>
            <AddNewExpenses/>
            </>
        </Layout>
    )
}