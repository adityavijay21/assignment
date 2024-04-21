import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate username and password
        if (username && password) {
            // Perform login logic (e.g., send login request to server)
            // For demonstration purposes, just call onLogin directly
            onLogin(username);
        } else {
            alert('Please enter both username and password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
