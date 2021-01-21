const Contact = require('../models/contact');
const { validatePhone } = require('../utils/validators')


// Contact.remove({}, () => console.log("done"))

const handleAddContact = async (req, res)=>{
    //create new contact instance 
    const contact = new Contact();
   
    try {
        //validate number
        const phoneNum = req.body.phone;
        const { error, result } =  validatePhone(phoneNum)
        if(error) throw new Error(error)
        contact.phone = result
        //add name and email (validation done in the model)
        contact.name = req.body.name;
        contact.email = req.body.email;

        //save contact
        const newContact = await contact.save();
        res.status(201).send(newContact)
    } catch (e) {
        console.log(e);
        res.status(400).send({error: e.message})
    }
}
module.exports = {
    handleAddContact
}
