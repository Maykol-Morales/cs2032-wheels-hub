import { useEffect, useState } from 'react';

import axios from 'axios';

const useUser = (tenant_id) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const localUser = localStorage.getItem(`${ tenant_id }_user`);

        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }, [tenant_id]);

    const login = async (tenant_id, email, password) => {
        setError(null);
        setLoading(true);

        try {
            const response = await axios.post('https://zygv7lwv32.execute-api.us-east-1.amazonaws.com/prod/users/login', {
                tenant_id,
                email,
                password
            });

            if (response.data.statusCode === 403) {
                setError('Invalid email or password')
            }

            if (response.data.statusCode === 200) {
                setUser(response.data.body);
                localStorage.setItem(`${ tenant_id }_user`, JSON.stringify(response.data.body));
            }
        } catch (error) {
            setUser(null);
            setError('Failed. Please try again.');
        }

        setLoading(false);
    }

    const register = async (tenant_id, name, email, password) => {
        setError(null);
        setLoading(true);

        try {
            const response = await axios.post('https://zygv7lwv32.execute-api.us-east-1.amazonaws.com/prod/users/register', {
                tenant_id,
                name,
                email,
                password
            });

            if (response.data.statusCode === 401) {
                setError('Email already in use')
            }

            if (response.data.statusCode === 200) {
                setUser(response.data.body);
                localStorage.setItem(`${ tenant_id }_user`, JSON.stringify(response.data.body));
            }
        } catch (error) {
            setUser(null);
            setError('Failed. Please try again.');
        }

        setLoading(false);
    }

    return { user, error, loading, login, register };
};

export default useUser;
