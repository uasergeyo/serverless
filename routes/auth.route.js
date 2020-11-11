const {Router} = require('express')
const router = Router()
const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

router.get('/facebook',passport.authenticate('facebook'))

router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));


passport.use(new FacebookStrategy({
    clientID: "402925747752541",
    clientSecret: "cb42c6efdc805b0efbfb4293d5abca64",
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate(function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
    console.log(accessToken, refreshToken, profile)
  }
));

router.get("/fail", (req, res) => {
    res.send("Failed attempt");
  });
  
router.get("/", (req, res) => {
    res.send("Success");
  });


router.get('/email',(req,res)=>{7
    console.log(req.baseUrl)
    passport.authenticate( req.params.network,{
        
    })
})

router.get('/gmail',(req,res)=>{
    passport.authenticate( req.params.network,{
        
    })
})


module.exports = router