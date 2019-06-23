console.log('process env', process.env.NODE_ENV)
const config = {
  serverUrl: process.env.NODE_ENV === 'production' ? 'https://psa-management.herokuapp.com/' : 'http://localhost:5000' 
}

export default config;