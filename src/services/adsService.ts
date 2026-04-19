const BASE_URL = 'http://192.168.0.100:3000'; // ⚠️ YOUR IP HERE

export const fetchAds = async () => {
    try {
        console.log('CALLING LE API');

        const res = await fetch(`${BASE_URL}/ads`, {
            method: 'POST',
        });

        console.log('STATUS:', res.status);

        const data = await res.json();

        console.log('DATA:', data?.hits?.hits?.length);

        return data;
    } catch (e) {
        console.log('ERROR:', e);
        return null;
    }
};