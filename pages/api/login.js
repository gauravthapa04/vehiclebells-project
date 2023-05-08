import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const User = mongoose.model('User');

export default async function handler(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  req.session.user = { id: user._id, email: user.email };

  res.status(200).json({ message: 'Logged in successfully' });
}
