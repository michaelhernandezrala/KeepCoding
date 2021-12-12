export default {
    registerUser: async (credentials) => {
        const url = `http://localhost:8000/auth/register`
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        };
        try {
            const response = await fetch(url, config);
            const data = await response.json();
            console.log(response)
            if (response.ok) {
                return data;
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }
}