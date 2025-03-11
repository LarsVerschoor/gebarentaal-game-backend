const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require(path.join(__dirname, '../', 'database/models'));

const privateKey = fs.readFileSync(path.join(__dirname, '../', 'keys/private.key'), 'utf8');

const jwtAuthentication = async (req, res) => {
    const { name, email, token } = req.body;
    const studentName = name.split('(')[0].trim();
    const studentNumber = name.split('(')[1].split(')')[0];

    const user = await User.findOne({ where: { email: email } });
    if (user === null) return res.status(401).json({error: `User with email ${email} does not have access. Please contact your teacher.`});
    user.update({
        name: studentName,
        student_number: studentNumber
    });

    const isValid = await checkValidTokenSSO(token);
    if (!isValid) return res.status(401).json({error: 'SSO token is invalid or has expired. Please log in again.'});

    const jsonWebToken = jwt.sign({user_id: user.id, token, iat: Math.floor(Date.now() / 1000) - 30}, privateKey, { algorithm: 'RS256' });
    res.status(200).json({token: jsonWebToken});
}

const checkValidTokenSSO = async (token) => {
    const response = await fetch('https://cmgt.hr.nl/api/validate-sso-token', {
        headers: {
            'Token': token
        }
    });
    return response.status === 200;
}

module.exports = jwtAuthentication;