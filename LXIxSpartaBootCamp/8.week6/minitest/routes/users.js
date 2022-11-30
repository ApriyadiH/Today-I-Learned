const express = require('express');
const Users = require("../schemas/user");
const router = express.Router();

// 1. Create user
router.post("/user", async (req, res) => {
  const { name, ID, pw  } = req.body;

  await Users.create({ name, ID, pw });

  res.json({ 
    message: "An user has been created" 
  });
});

// 2. List all user
router.get("/user", async (req, res) => {
  const all_users = await Users.find();
  
  const results = all_users.map((user) => {
		return {
      userId: user._id,
      name: user.name,
			ID: user.ID,
      pw: user.pw
		};
  });

  res.json({
    result: results,
  });
});

// 3. Search Post Details
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const specific_user = await Users.find({_id: userId});

  const results = {
    userId,
    name: specific_user[0].name,
    ID: specific_user[0].ID,
    pw: specific_user[0].pw
	};

  res.json({
    data: results,
  });
});

module.exports = router;