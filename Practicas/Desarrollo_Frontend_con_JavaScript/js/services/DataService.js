export default {
    registerUser: async function(credentials) {
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

    authUser: async function(credentials) {
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
            console.log('response', response);
            console.log('data', data);
            console.log('accessToken', data.accessToken);
            localStorage.setItem('AUTH_TOKEN', data.accessToken);
            if (response.ok) {
                return data;
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    },

    getAds: async function() {
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
    },

    createAdvert: async function(credentials) {
        const url = `http://localhost:8000/api/adverts`
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        };
        console.log(credentials)

        if(this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN');
            config.headers['Authentication'] = `Bearer ${token}`
        }

        console.log(config)

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

    isAuthenticed: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null;
    }
}