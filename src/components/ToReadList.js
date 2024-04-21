import React, { useState } from 'react';
import { getAllBooks } from './UserData';
const ToReadList = ({ username }) => {
    const [toReadList, setToReadList] = useState(getAllBooks());

    return (
        <div>
            <h2>Welcome, {username}!</h2>
            <h3>To Read List:</h3>
            <ul>
                {toReadList.map((book, index) => (
                    <li key={index}>{book.id} - {book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToReadList;
