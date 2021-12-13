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
    },

    authUser: async (credentials) => {
        const url = `http://localhost:8000/auth/login`
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
    },

    getAds: async () => {
        const url = 'http://localhost:8000/api/adverts';
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();
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