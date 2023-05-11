import React from 'react';
import { useSession } from "next-auth/react"
const Protected = ({ children }) => {
  const { session } = useSession();
    console.log(session)
  if (!session) {
    // Redirect the user to the login page or show an access denied message
    return <div>Access Denied. Please log in.</div>;
  }

  // Render the protected content
  return <div>{children}</div>;
};

export default Protected;
