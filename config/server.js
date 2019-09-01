require('dotenv').config();

module.exports = {
    APPLICATION_ID: process.env.APPLICATION_ID || 'application_id',
    SECRET: process.env.SECRET || 'secret',
    CALLBACK_URL: process.env.CALLBACK_URL || 'callback_url'
}