const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/TestUse', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Connection error:', err));

// Defining a Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 18 },
    email: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Creating a Model
const User = mongoose.model('User', userSchema);

// Inserting a New User
const newUser = new User({
    name: 'Kapli',
    age: 24,
    email: 'Kapluuu.meena@example.com'
});

newUser.save()
    .then((user) => console.log('User saved:', user))
    .catch((err) => console.error('Save error:', err));
