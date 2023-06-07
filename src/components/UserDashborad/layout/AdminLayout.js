import AdminHeader from './AdminHeader';
const AdminLayout = ({ children}) => {
    return (
        <>
          <AdminHeader />
          {children}
        </>
    );
  };
  
  export default AdminLayout;