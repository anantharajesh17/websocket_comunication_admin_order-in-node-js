const user = require('../model/user');
const order = require('../model/order');
const admin = require('../model/admin');
const devliveryPerson = require('../model/deliveryPersons');


const register = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, otp, amount, password, country, gender, adminName, transactionId, orderStatus } = req.body;

    // User registration logic
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(402).json({ message: 'User with this email already exists' });
    }
    const newUser = await user.create({
      firstName, lastName, email, mobile, otp
    });

    const newOrder = await order.create({
      amount, transactionId, user_id: newUser.id
    });

    const newAdmin = await admin.create({
      password, country, gender, adminName, email, mobile, orderStatus
    });
    res.status(200).json({ message: 'User create success', newUser, newOrder, newAdmin });
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { register };
