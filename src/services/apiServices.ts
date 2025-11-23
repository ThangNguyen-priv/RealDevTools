export default function apiServices() {
    const fetchApiData = async () => {
        try {
            const response = await fetch('https://api.example.com/data')
        } catch (error) {
            console.error('Error fetching API data:', error);
        }
    }

    return
}
