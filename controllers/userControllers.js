

const userLogin = (req, res) => {
    res.status(200).json({ message: 'Login route working' });
};

const userSignup = (req, res,next) => {
    res.status(200).json('register router');
};

module.exports = {
    userLogin
};