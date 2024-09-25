const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config")

// we will expect the user to return in the token headers..and after we get the token, we will verify it where token will be the first input and IInd input will be the JWT_USER_PASSWORD

function adminMiddleware(req, res, next) {

    const token = req.headers.token;
    // const token = req.headers.authorisation ... we can authorisation instead of token
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD); // it is used to verify the password

    if(decoded){ // if decoded exists then we will set req.userId = decoded.id and then we will call next()
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({ msg : "You are not signed in" })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}