import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Private = () => {
    const token = localStorage.getItem('auth');
    const {auth} = useAuth();



    return (
        <>
            {token || auth?.token ? <Outlet /> : <Navigate to="/login" />}
        </>
    );
};

export default Private;