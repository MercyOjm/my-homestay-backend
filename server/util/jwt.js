const jwt = require('jsonwebtoken');
const { promisify } = require('util');
 const createToken = async (payload, secret) => {
    const asyncSign = promisify(jwt.sign);
    return await asyncSign(payload, secret, {expiresIn: '1d'})
}
 const verifyToken = async (token, secret) => {
    const asyncVerify = promisify(jwt.verify);
    return await asyncVerify(token, secret);
}

module.exports={ createToken, verifyToken}