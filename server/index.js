import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const OLX_URL = 'https://search.mena.sector.run/_msearch';

app.post('/ads', async (req, res) => {
    try {
        console.log('REQUEST RECEIVED');

        const body =
            JSON.stringify({ index: 'olx-lb-production-ads-en' }) +
            '\n' +
            JSON.stringify({
                from: 0,
                size: 12,
                track_total_hits: true,
                query: {
                    match_all: {},
                },
                sort: [{ created_at: { order: 'desc' } }],
            }) +
            '\n';

        console.log('FETCHING FROM OLX...');

        const response = await fetch(OLX_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-ndjson',
                Accept: 'application/json',
                Origin: 'https://www.olx.com.lb',
                Referer: 'https://www.olx.com.lb/',
                'User-Agent': 'Mozilla/5.0',
            },
            body,
        });

        const data = await response.json();

        const hits = data.responses?.[0]?.hits?.hits || [];

        console.log('ADS COUNT:', hits.length);

        res.json(data.responses?.[0] || {});
    } catch (e) {
        console.log('SERVER ERROR:', e);
        res.status(500).json({ error: 'Failed' });
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:3000');
});