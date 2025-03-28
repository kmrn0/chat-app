import jwt from "jsonwebtoken"


export  const generateToken = (userId,res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,
        
        {
        expiresIn:"7d"
    })
    res.cookie("jwt",token, {
        maxAge: 7 * 24 * 60 * 1000,
        httpOnly: true, // prevant xss attack cross scripting attack
        sameSite: "strict", // CSRF attsck cros-site request for geryy attack
        secure: process.env.NODE_ENV !== "development"
    })
    return token;


};