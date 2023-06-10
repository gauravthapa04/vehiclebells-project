import React,{useEffect, useState} from 'react'
import Layout from '@/src/components/layout/Layout';
import UserRegister from '@/src/components/UserRegister'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Register() {

  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Layout title="Vehicle Bells | Register" showHead='false' showFooter='false'>
        <UserRegister />
    </Layout>
  )
}
