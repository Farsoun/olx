const BASE_URL = 'http://192.168.0.100:3000'

interface Filters {
    category?: string
    location?: string
    minPrice?: number
    maxPrice?: number
    search?: string
    from?: number
    size?: number
}

export const fetchAds = async (filters?: Filters) => {
    try {
        const res = await fetch(`${BASE_URL}/ads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filters || {}),
        })

        return await res.json()
    } catch {
        return null
    }
}