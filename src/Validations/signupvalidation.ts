import joi from "joi";
export const signupvalidation=(data:any)=>{
    const schema = joi.object({
        name: joi.string().max(35).required().messages({
            
        })
    })
}