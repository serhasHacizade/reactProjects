import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout(() => {
            navigate("/");
        });
    };

    return (
        <div>
            <code>
                {
                    JSON.stringify(user)
                }
            </code>
            <br />
            <br />
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile;