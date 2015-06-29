var mongoose = require('mongoose');

module.exports = mongoose.model('Donor', {
    name: String,
    org: String,
    email: String,
    phone: String,
    donation: String,
    donationdate: Date
})