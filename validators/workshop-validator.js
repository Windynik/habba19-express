const joi = require('joi');

const string = joi.string();
const reqString = string.required();

module.exports = {
    newWorkshop: {
        body: {
            name: reqString,
            description: reqString,
            date: reqString,
            time: reqString,
            fee: string,
            venue: string
        },
        headers: {
            organizer_id: reqString
        }
    },
    workshopDetails: {
        headers: {
            organizer_id: reqString
        }
    },
    registerToWorkshop: {
        headers: {
            user_id: reqString
        },
        body: {
            workshop_id: reqString
        }
    },
    userDetails: {
        headers: {
            user_id: reqString
        }
    }
}