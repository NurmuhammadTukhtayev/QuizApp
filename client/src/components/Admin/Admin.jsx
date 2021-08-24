import React from 'react';

const Admin = () => {
    return (
        <div className="admin">
            <div className="sidebar">
                <div className="header">
                    <h1>Admin</h1>
                    <hr/>
                </div>
                <div>
                    <a href="/add"><h2>Add Question</h2></a>
                    <a href="/update"><h2>Update Question</h2></a>
                    <a href="/delete"><h2>Delete Question</h2></a>
                </div>
            </div>
            <div className="top">sds</div>
        </div>
    );
};

export default Admin;