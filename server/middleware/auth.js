const auth = async (req, res, next) => {

    res.header('Access-Control-Allow-Origin','*');
    try {     
        next()
    } catch (e) { 
        console.log(e);
        res.status(401).send({error: 'Please authenticate'})
    }
}

module.exports = auth;