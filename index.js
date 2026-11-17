const axios = require("axios");
module.exports = (token) => axios.create({ headers: { Authorization: `Bearer ${token}` } });
