const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require(path.join(__dirname, '../', 'database/models'));

const privateKey = fs.readFileSync(path.join(__dirname, '../', 'keys/private.key'), 'utf8');

const jwtAuthentication = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Missing fields: name,email' });
    }

    const nameParts = name.match(/^(.*)\((\d+)\)$/);
    if (!nameParts) {
        return res.status(400).json({ error: 'Invalid name format. Use: "Name (12345)"' });
    }

    const studentName = nameParts[1].trim();
    const studentNumber = nameParts[2];

    const user = await User.findOne({ where: { email: email } });
    if (user === null) return res.status(401).json({error: `User with email ${email} does not have access. Please contact your teacher.`});
    user.update({
        name: studentName,
        student_number: studentNumber
    });

    const jsonWebToken = jwt.sign({user_id: user.id, iat: Math.floor(Date.now() / 1000) - 30}, privateKey, { algorithm: 'RS256' });
    res.status(200).json({token: jsonWebToken});
}

module.exports = jwtAuthentication;