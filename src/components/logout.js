import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

    const navigate = useNavigate();

    useEffect(()=>{

    const handleLogout = async () => {

        try {
        
            const response = await fetch('http://localhost:5000/api/user/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            const data = await response.json();
            console.log('data from logout call: ', data);

            navigate('/');
    
        } catch (error) {
            console.log('Error occured while logging out: ', error);
        }

    }
    handleLogout();

},[navigate]);
    

    return (
        <>
            <h2>Logging out...</h2>
        </>
    ); 
}