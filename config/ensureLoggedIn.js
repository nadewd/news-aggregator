module.exports = function(req, res, next) {
    // Status of 401 is Unathorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay;
    next();
}