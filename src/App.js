import React, { useState } from 'react';
import Login from './components/Login';
import ToReadList from './components/ToReadList';
import './App.css';
import { addUser } from './components/UserData';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        addUser(username, 'password');
        setLoggedIn(true);
        setUsername(username);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Reading List</h1>
                {loggedIn ? (
                    <div>
                        <ToReadList username={username} />
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <Login onLogin={handleLogin} />
                )}
            </header>
        </div>
    );
}

export default App;
