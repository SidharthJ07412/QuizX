import client from "../db.js"
export const createUser = async (req, res) => {
	const { Fname, Lname, email, password } = req.body;
	let exists;
	try {
		exists = await client.query(
			"Select * from User_data where User_data.email=$1;",
			[email]
		);
	} catch (err) {
		console.log(err);
	}
	if (exists.rowCount != 0) {
		res.status(500).send(
			"Email is already under use . Try Sign in instead "
		);
	} else {
		let newUser;
		try {
			newUser = await client.query(
				"INSERT INTO User_data(Fname, Lname, Email, Password) VALUES ($1,$2,$3,$4);",
				[Fname, Lname, email, password]
			);
			res.status(200).send("User has been created");
		} catch (err) {
			console.log(err);
		}
	}
};

export const logInUser = async (req, res) => {
	const { email, password } = req.body;
	let userExists;
	try {
		userExists = await client.query(
			"select User_data.User_id from User_data WHERE Email=$1 and Password=$2;",
			[email, password]
		);
	} catch (err) {
		console.log(err);
	}
	if (userExists.rowCount == 1) {
		console.log(userExists.rows);
		res.status(200).send(userExists.rows[0].mem_id);
	} else {
		res.status(500).send("Wrong Email or Password");
	}
};
