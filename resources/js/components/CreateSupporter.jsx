import React, { useEffect, useState } from 'react';
import axios from 'axios';



const CreateSupporter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Supporter, setSupporter] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 
        try {
            const response = await axios.post('/api/users', { name, email,is_supporter:Supporter });
            setUsers([...users, response.data.user]); 
            setName('');
            setEmail('');
        } catch (error) {
            setError('Error creating user');
            console.error('Error creating user:', error);
        }
    };


    return (

    <div>    

<form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

<input
                    type="is_supporter"
                    placeholder="Supporter"
                    value={Supporter}
                    onChange={(e) => setSupporter(e.target.value)}
                    required
                />
                <button type="submit">Add User</button>
            </form>
</div>
);
};

export default CreateSupporter;