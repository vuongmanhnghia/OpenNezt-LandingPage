import axios from 'axios';

const getIp = async () => {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
        throw new Error('Unable to fetch IP');
    }
};

const subscribe_email = async (email) => {
    if (!email) {
        throw new Error('Email is required');
    }

    const ip = await getIp();

    try {
        const response = await axios.post(`http://localhost:3456/subscribe/email`, { email, ip });
        return response.data.message;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            throw new Error(`${error.response.status}: ${error.response.data.error}`);
        } else {
            throw new Error('Subscription failed');
        }
    }
};

export default subscribe_email;