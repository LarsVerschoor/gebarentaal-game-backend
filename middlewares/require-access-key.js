const path = require('path');
const { AccessKey } = require(path.join('../', 'database/models'));

const requireAccessKey = async (req, res, next) => {
    const accessKeyHeader = req.headers['x-access-key'];
    if (!accessKeyHeader) return res.status(401).json({error: 'Please provide your access key in the x-access-key header. Request your access key at /keys'});

    try {
        const result = await AccessKey.findOne({ where: { key: accessKeyHeader } });
        if (!result) return res.status(401).json({error: 'Invalid access key'});

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = requireAccessKey;