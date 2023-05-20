import React,{useEffect, useState} from 'react'
import Layout from '@/src/components/layout/Layout';
import UserRegister from '@/src/components/UserRegister'
import { useSession } from "next-auth/react"
import { userService, alertService } from 'services';
import { useRouter } from 'next/router'

export default function Register() {

  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const subscription = userService.user.subscribe(x => setUser(x));
  //   return () => subscription.unsubscribe();
  // }, []);

  // { session ? (
  //   router.push('/')
  //   )
  //   :
  //   user ? ( router.push('/'))
  //   :
  //   null
  //   }

  return (
    <Layout title="Vehicle Bells | Register" showHead='false' showFooter='false'>
        <UserRegister />
    </Layout>
  )
}
