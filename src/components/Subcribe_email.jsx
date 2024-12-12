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
        const response = await axios.post(`https://beta-api.opennezt.com/subscribe/email`, { email, ip });
        
        const telegramMessage = `
📧 *New Subscription* 📧
-------------------------
*Email:* ${email}
*IP Address:* ${ip}
-------------------------
        `;
        await axios.get(`https://api.telegram.org/bot8189211313:AAH-2rASFZKXjxhm8XY_mgrz3CbYHehetK0/sendMessage`, {
            params: {
                chat_id: '-4604562414',
                text: telegramMessage,
                parse_mode: 'Markdown'
            }
        });

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