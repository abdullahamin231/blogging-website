var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var username;
  if(req.isAuthenticated())
    username = req.user.username;
  else username = 'Log in';
  // return res.json({name: username});
  res.render('index', { name: username, title: "random" });
});

// router.get('/login', (req, res) => {
//   res.render('loginform');
// })

// router.get('/signup', (req, res) => {
//   res.render('signupform');
// })

// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true,
// }))

// router.post('/signup', async (req, res) => {
//   try{
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const exist = await User.findOne( { email: req.body.email })
//     if(!exist){
//       const user = new User( {
//         username: req.body.name,
//         email:req.body.email,
//         password: hashedPassword,
//       })
//       await user.save();
//     } else {
//       console.log("user with this email already exists");
//     }
//     res.redirect('/login')
    
//   } catch {
//     res.redirect('/signup');
//   }
// })

module.exports = router;
