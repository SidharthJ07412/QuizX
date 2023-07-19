import client from "../db.js"
export const startQuiz = async (req, res) => {
	const { User_id,Quiz_id } = req.body;
	let exists;
	try {
		exists = await client.query(
			"Select * from Questions where Questions.Quiz_id=$1;",
			[Quiz_id]
		);
	} catch (err) {
		console.log(err);
	}
	if (exists.rowCount == 1) {
		res.status(200).send(
			exists
		);
    }
	 else {
		res.status(500).send("Wrong Quiz_id");
	}
};

export const seeLeaderboard = async (req, res) => {
	const { Quiz_id } = req.body;
	let exists;
	try {
		exists = await client.query(
			"SELECT Fname || ' ' || Lname , correct_answers FROM User_data ,Marks  where Marks.User_id = User_data.User_id and Marks.Quiz_id = $1",
			[Quiz_id]
		);
	} catch (err) {
		console.log(err);
	}
	if (exists.rowCount != 0) {
		res.status(200).send(
			exists
		);
    }
	 else {
		res.status(500).send("NO result Found for this Quiz Id");
	}
};

export const  endQuiz= async (req, res) => {
	const { User_id, Quiz_id, selected } = req.body;
	let exists;
	console.log("wwd");
	try {
		exists = await client.query(
			"select correct_options from  Questions  where  Quiz_id= $1",
			[Quiz_id]
		);
	} catch (err) {
		console.log(err);
	}
	console.log("wwd");
	let count=0;
	for(let i=0;i<exists.rowCount;i++){
         if(exists[i]==selected[i]){
			count++;
		 }
	}
	console.log("wwd");
	try {
		exists = await client.query(
			"INSERT INTO Marks(User_id, Quiz_id, correct_answers) VALUES ($1,$2,$3)",
			[User_id, Quiz_id,count]
		);
	} catch (err) {
		console.log(err);
	}
};
