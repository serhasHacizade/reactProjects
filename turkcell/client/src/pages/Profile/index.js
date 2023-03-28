import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../Context/AuthContext';

const Profile = ({history}) => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout(() => {
            history.push("/");
        });
    };

    return (
        <div>
            <code>
                {
                    JSON.stringify(user)
                }
            </code>
            <br/>
            <br/>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile;