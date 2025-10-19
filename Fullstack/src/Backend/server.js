import express from 'express';
import { connect, Schema, model } from 'mongoose';
import { json } from 'express';
import cors from 'cors';
import multer, { diskStorage } from 'multer';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import jwt from 'jsonwebtoken';
const app = express();
const port = 5000;


app.use(json());
app.use(cors());

connect('mongodb://localhost:27017/WeDrive');

const userSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
	phone: String,
	password: String,
});

const User = model('User', userSchema);

// Set up Multer for file uploads
const storage = diskStorage({
	destination: (request, file, cb) => {
		const { username } = request.body;
		const uploadPath = join('../public/profiles/', username);

		// Check if the directory exists
		if (!existsSync(uploadPath)) {
			// Create the directory if it does not exist
			mkdirSync(uploadPath, { recursive: true });
		}

	  	cb(null, uploadPath);
	},
	filename: (request, file, cb) => {
		cb(null, "default.jpg");
	},
});

const upload = multer({ storage });

app.post('/register', async (request, response) => {
	const { firstName, lastName, email, phone, password } = request.body;
	try {
		const newUser = new User({
			firstname: firstName,
			lastname: lastName,
			email: email,
			phone: phone,
			password: password,
		});

		const existingUser = await User.findOne({ email: email });
		if (existingUser) {
			return response.status(200).send({ message: 'Email already registered!' });
		}
		await newUser.save();
		response.status(201).send({ message: 'Registered successfully!' });
		console.log(request.body);
	} catch (error) {
		response.status(200).send({message: `${error}`});
	}
});

app.post('/login', async (request, response) => {
	console.log(request.body);
	const { email, password } = request.body;
	try {
		const userLogin = await User.findOne({ email, password });
		console.log(userLogin);
		if (userLogin) {
			const userData = {
				firstName: userLogin.firstname,
				lastName: userLogin.lastname,
				email: userLogin.email,
				phone: userLogin.phone,
			};
			const token = jwt.sign({ userId: userLogin._id}, "Bedrock", { expiresIn: '1h' });
			response.json({token, user: userData});
		} else {
			response.status(200).send({ message: "Wrong Email or Password" });
		}
	} catch (error) {
		response.status(400).send({ message: `${error}`});
	}
});

app.post('/user', async (request, response) => {
	const { username } = request.body;
	try {
		const user = await User.findOne({ username: username });
		if (!user) {
			return response.status(200).send({ message: 'User not found' });
		}
		response.json(user);
	} catch (error) {
	  response.status(200).send({ message: `${error}`});
	}
});

app.post('/update', upload.single('file'), async (request, response) => {
	const { username, name, birthdate, year } = request.body;
	const filePath = request.file ? request.file.path : undefined;
	try {
		const updateDetails = await User.updateOne(
			{username: username}, 
			{ $set: 
				{
					username: username, 
					name: name, 
					date: birthdate, 
					year: year,
					profilePath: filePath
				}
			}
		)
		response.status(200).send({ message: 'Update Successful' });
	} catch (error) {
		response.status(200).send({message: error})
	}
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
