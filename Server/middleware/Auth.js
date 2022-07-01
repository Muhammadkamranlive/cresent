const admin=require('../Config/firebaseAdmin');
class Middleware{
    async checkAuth(req,res,next){
        const token=req.headers.authorization;
        
        if(!token){
            return res.status(401).json({
                message:'No token provided'
            });
        }
        try{
            const decodedToken=await admin.auth().verifyIdToken(token);
            req.user=decodedToken;
           
            next();
        }catch(err){
            return res.status(401).json({
                message:'Invalid token'
            });
        }
    }
}

module.exports=new Middleware();