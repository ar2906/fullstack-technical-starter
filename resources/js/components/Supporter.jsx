import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateSupporter from './CreateSupporter';

const Supporter = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility of CreateSupporter
    const toggleVisibility = () => {
        setIsVisible(prevVisible => !prevVisible);
    };

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data.users);
            } catch (error) {
                setError('Error fetching users');
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Handle user deletion
    const handleDelete = async (id) => {
        setError(null); // Reset error
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id)); // Update users state
        } catch (error) {
            setError('Error deleting user');
            console.error('Error deleting user:', error);
        }
    };

    // Display loading or error message
    if (loading) {
        return <p>Loading users...</p>;
    }

    return (
        <div>
            <h2>All Users</h2>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Creation Layer' : 'Create User'}
            </button>
            {isVisible && <CreateSupporter />}

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Supporter</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.is_supporter ? 'Yes' : 'No'}</td>
                                <td>
                                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Supporter;
