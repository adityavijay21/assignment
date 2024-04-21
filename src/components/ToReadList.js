import React, { useState } from 'react';

const ToReadList = ({ username }) => {
    const [toReadList, setToReadList] = useState([
        "W9752H01",
        "W8742B09",
        "W7644A14",
        "W3245618",
        "W456709A"
    ]);

    return (
        <div>
            <h2>Welcome, {username}!</h2>
            <h3>To Read List:</h3>
            <ul>
                {toReadList.map((bookId, index) => (
                    <li key={index}>{bookId}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToReadList;
