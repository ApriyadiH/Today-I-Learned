const express = require("express");
const { User } = require("./models");
const router = express.Router();

const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const cookieParser = require("cookie-parser");
const SECRET_KEY = `AyamGoreng`;
router.use(cookieParser());

let tokenObject = {}; 

//////////////////////////////////////////////////////////////////////////////////////
//   /$$$$$$              /$$           /$$$$$$$$        /$$                          
//  /$$__  $$            | $$          |__  $$__/       | $$                          
// | $$  \__/  /$$$$$$  /$$$$$$           | $$  /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$ 
// |  $$$$$$  /$$__  $$|_  $$_/           | $$ /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$
//  \____  $$| $$$$$$$$  | $$             | $$| $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$
//  /$$  \ $$| $$_____/  | $$ /$$         | $$| $$  | $$| $$_  $$ | $$_____/| $$  | $$
// |  $$$$$$/|  $$$$$$$  |  $$$$/         | $$|  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$
//  \______/  \_______/   \___/           |__/ \______/ |__/  \__/ \_______/|__/  |__/
//////////////////////////////////////////////////////////////////////////////////////
// Set Cookies with Token
router.get("/set-token/:id", (req, res) => {
  const id = req.params.id;
  const accessToken = createAccessToken(id);
  const refreshToken = createRefreshToken();

	tokenObject[refreshToken] = id; 
	res.cookie('accessToken', accessToken); 
	res.cookie('refreshToken', refreshToken); 
  
  return res.status(200).send({ "message": "Token was successfully issued." });
})

// Access Token
function createAccessToken(id) {
  const accessToken = jwt.sign(
    { id: id },
    SECRET_KEY,
    { expiresIn: '10s' })
    
    return accessToken;
  }
  
// Refresh Token.
function createRefreshToken() {
  const refreshToken = jwt.sign(
    {}, 
    SECRET_KEY, 
    { expiresIn: '7d' })
    
    return refreshToken;
  }
//////////////////////////////////////////////////////////////////////////////////////
//    /$$$$$$              /$$           /$$$$$$$$        /$$                          
//   /$$__  $$            | $$          |__  $$__/       | $$                          
//  | $$  \__/  /$$$$$$  /$$$$$$           | $$  /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$ 
//  | $$ /$$$$ /$$__  $$|_  $$_/           | $$ /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$
//  | $$|_  $$| $$$$$$$$  | $$             | $$| $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$
//  | $$  \ $$| $$_____/  | $$ /$$         | $$| $$  | $$| $$_  $$ | $$_____/| $$  | $$
//  |  $$$$$$/|  $$$$$$$  |  $$$$/         | $$|  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$
//   \______/  \_______/   \___/           |__/ \______/ |__/  \__/ \_______/|__/  |__/
//////////////////////////////////////////////////////////////////////////////////////
  // Get Token
  router.get("/get-token", (req, res) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.status(400).json({ "message": "Refresh Token doesn't exist." });
  if (!accessToken) return res.status(400).json({ "message": "Access Token doesn't exist." });

  const isAccessTokenValidate = validateAccessToken(accessToken);
  const isRefreshTokenValidate = validateRefreshToken(refreshToken);

  if (!isRefreshTokenValidate) return res.status(419).json({ "message": "Refresh Token has expired." });


  if (!isAccessTokenValidate) {
    const accessTokenId = tokenObject[refreshToken];
    if (!accessTokenId) return res.status(419).json({ "message": "Refresh Token  information doesn't exist on the server." });

    const newAccessToken = createAccessToken(accessTokenId);
    res.cookie('accessToken', newAccessToken);
    return res.json({ "message": "A new Access Token has been issued." });
  }

  const { id } = getAccessTokenPayload(accessToken);
	return res.json({ "message": `Token with payload of ${id} successfully authenticated` });
})


// Validate the Access Token.
function validateAccessToken(accessToken) {
  try {
    jwt.verify(accessToken, SECRET_KEY); 
    return true;
  } catch (error) {
    return false;
  }
}

// Validate the Refresh Token.
function validateRefreshToken(refreshToken) {
  try {
    jwt.verify(refreshToken, SECRET_KEY); 
    return true;
  } catch (error) {
    return false;
  }
}

// Get the Payload of Access Token
function getAccessTokenPayload(accessToken) {
  try {
    const payload = jwt.verify(accessToken, SECRET_KEY); 
    return payload;
  } catch (error) {
    return null;
  }
}


/////////////////////////////////////////////////////////////////////////////////
//  /$$    /$$          /$$ /$$       /$$             /$$     /$$                    
// | $$   | $$         | $$|__/      | $$            | $$    |__/                    
// | $$   | $$ /$$$$$$ | $$ /$$  /$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$ 
// |  $$ / $$/|____  $$| $$| $$ /$$__  $$ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
//  \  $$ $$/  /$$$$$$$| $$| $$| $$  | $$  /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
//   \  $$$/  /$$__  $$| $$| $$| $$  | $$ /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
//    \  $/  |  $$$$$$$| $$| $$|  $$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
//     \_/    \_______/|__/|__/ \_______/ \_______/   \___/  |__/ \______/ |__/  |__/
/////////////////////////////////////////////////////////////////////////////////
// Validation


//   /$$$$$$  /$$                                        
//  /$$__  $$|__/                                        
// | $$  \__/ /$$  /$$$$$$  /$$$$$$$  /$$   /$$  /$$$$$$ 
// |  $$$$$$ | $$ /$$__  $$| $$__  $$| $$  | $$ /$$__  $$
//  \____  $$| $$| $$  \ $$| $$  \ $$| $$  | $$| $$  \ $$
//  /$$  \ $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$
// |  $$$$$$/| $$|  $$$$$$$| $$  | $$|  $$$$$$/| $$$$$$$/
//  \______/ |__/ \____  $$|__/  |__/ \______/ | $$____/ 
//                /$$  \ $$                    | $$      
//               |  $$$$$$/                    | $$      
//                \______/                     |__/      
// Signup          
router.post("/users", async (req, res) => {
  const { email, nickname, password, confirmPassword } = req.body;
  // TRY JOI
  if (nickname.length < 3 ){
    res.status(400).send({
      errorMessage: "Nickname must be longer than 3 character",
    });
    return;
  }

  if (password !== confirmPassword) {
    res.status(400).send({
      errorMessage: "The password is different from the password checkbox.",
    });
    return;
  }

  const existsUsers = await User.findAll({
    where: {
      [Op.or]: [{ email }, { nickname }],
    },
  });
  if (existsUsers.length) {
    res.status(400).send({
      errorMessage: "Email or nickname is already in use.",
    });
    return;
  }

  await User.create({ email, nickname, password });
  res.status(201).send({});
});

//  /$$                           /$$          
// | $$                          |__/          
// | $$        /$$$$$$   /$$$$$$  /$$ /$$$$$$$ 
// | $$       /$$__  $$ /$$__  $$| $$| $$__  $$
// | $$      | $$  \ $$| $$  \ $$| $$| $$  \ $$
// | $$      | $$  | $$| $$  | $$| $$| $$  | $$
// | $$$$$$$$|  $$$$$$/|  $$$$$$$| $$| $$  | $$
// |________/ \______/  \____  $$|__/|__/  |__/
//                      /$$  \ $$              
//                     |  $$$$$$/              
//                      \______/   
// Login
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user || password !== user.password) {
    res.status(400).send({
      errorMessage: "Wrong email or password.",
    });
    return;
  }

  // ??????????????????????????????????
  res.send({
    token: jwt.sign({ userId: user.userId }, "customized-secret-key"),
  });
});

//  /$$           /$$                           /$$          
// |__/          | $$                          |__/          
//  /$$  /$$$$$$$| $$        /$$$$$$   /$$$$$$  /$$ /$$$$$$$ 
// | $$ /$$_____/| $$       /$$__  $$ /$$__  $$| $$| $$__  $$
// | $$|  $$$$$$ | $$      | $$  \ $$| $$  \ $$| $$| $$  \ $$
// | $$ \____  $$| $$      | $$  | $$| $$  | $$| $$| $$  | $$
// | $$ /$$$$$$$/| $$$$$$$$|  $$$$$$/|  $$$$$$$| $$| $$  | $$
// |__/|_______/ |________/ \______/  \____  $$|__/|__/  |__/
//                                    /$$  \ $$              
//                                   |  $$$$$$/              
//                                    \______/      
// isLogin





module.exports = router;