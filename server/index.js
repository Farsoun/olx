import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const ads = [
    {
        _id: '1',
        _source: {
            title: 'BMW 320i 2018',
            price: { value: 18500 },
            images: [{ url: 'https://picsum.photos/400?car1' }],
            car: { year: 2018, mileage: 60000, fuel: 'Petrol' },
            location: { name: 'Beirut', externalID: '0-1' },
            category: { externalID: '23' },
            created_at: '2 hours ago',
            is_verified: true,
        },
    },
    {
        _id: '2',
        _source: {
            title: 'Mercedes C300 2020',
            price: { value: 32000 },
            images: [{ url: 'https://picsum.photos/400?car2' }],
            car: { year: 2020, mileage: 30000, fuel: 'Hybrid' },
            location: { name: 'Jounieh', externalID: '0-2' },
            category: { externalID: '23' },
            created_at: '5 hours ago',
            is_verified: false,
        },
    },
    {
        _id: '3',
        _source: {
            title: 'Toyota Yaris 2016',
            price: { value: 9000 },
            images: [{ url: 'https://picsum.photos/400?car3' }],
            car: { year: 2016, mileage: 90000, fuel: 'Petrol' },
            location: { name: 'Tripoli', externalID: '0-3' },
            category: { externalID: '23' },
            created_at: '1 day ago',
            is_verified: true,
        },
    },
]

app.post('/ads', (req, res) => {
    const {
        category,
        location,
        minPrice,
        maxPrice,
        search,
        from = 0,
        size = 12,
    } = req.body || {}

    let results = [...ads]

    if (category) {
        results = results.filter(
            (ad) => ad._source.category.externalID === category
        )
    }

    if (location) {
        results = results.filter(
            (ad) => ad._source.location.externalID === location
        )
    }

    if (minPrice != null) {
        results = results.filter(
            (ad) => ad._source.price.value >= minPrice
        )
    }

    if (maxPrice != null) {
        results = results.filter(
            (ad) => ad._source.price.value <= maxPrice
        )
    }

    if (search) {
        results = results.filter((ad) =>
            ad._source.title.toLowerCase().includes(search.toLowerCase())
        )
    }

    const paginated = results.slice(from, from + size)

    res.json({
        hits: {
            total: results.length,
            hits: paginated,
        },
    })
})

app.get('/locations', (req, res) => {
    res.json([
        { name: 'Beirut', externalID: '0-1' },
        { name: 'Jounieh', externalID: '0-2' },
        { name: 'Tripoli', externalID: '0-3' },
    ])
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:3000')
})