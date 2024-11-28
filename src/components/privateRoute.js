import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {

    console.log("In Protected Route");

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(()=>{

        const checkAuth = async() => {
            try {
                
                const response = await fetch('http://localhost:5000/api/user/validate-token', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json'
                    }
                });

                console.log('response has been received from the server regarding token validation');

                const data = await response.json();
                console.log('data: ', data);

                setIsAuthenticated(data.authenticated);

            } catch (error) {
                console.log('Error occured while validating token in ProtectedRoute: ', error);
                setIsAuthenticated(false);
            }
        }

        checkAuth();

    }, []);

    if(isAuthenticated === null) {
        return <div>Loading...</div>
    }
    
    return (isAuthenticated ? <Outlet /> : <Navigate to='/' />);
}