import React from 'react';

function Logout({ onLogout }) {
    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if (response.ok) {
                onLogout();
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
