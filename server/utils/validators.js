const { formatPhoneNumberIntl } = require('react-phone-number-input')
const  countryCodes = require('./countryCodes')
const { isEmail, isLength, isMobilePhone } = require('validator');

function validatePhone(number) {
    if(!number) return {
        error: 'not a valid format',
        value: false
    };
    if(!formatPhoneNumberIntl(number)) return {
        error: 'not a valid international format',
        value: false
    };
    if(!isMobilePhone(number)) return {
        error: 'not a valid mobile number',
        value: false
    };
    const formattedNumber = formatPhoneNumberIntl(number);
    const extension = formatPhoneNumberIntl(number).split(" ")[0]
    const countryCode = countryCodes.find( country => country.dial_code ===  extension).code;
    return {
        error: false,
        result: {
            formattedNumber,
            extension,
            countryCode      
        }
    }
}
module.exports = {
    validatePhone
}