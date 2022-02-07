const mockUserData = [
    { name: 'Mark'},
    { name: 'Jill'}
]

const sendFakeData = (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: 'Successfuly got users. Nice!',
            users: mockUserData
        });
}

const sendUserId = (req, res) => {
    let { id } = req.params;
    res.status(200).json({
        success: true,
        message: 'Successfuly got one user',
        user: id
    });
}

module.exports = {
    sendFakeData,
    sendUserId
}