import joi from "joi";
export const signupvalidation=(data:any)=>{
    const schema = joi.object({
        name: joi.string().max(35).required().messages({
            "string.empty": "Name is required",
            "string.max": "You exceed the limit"

        }),
        email:joi.string().email().required().messages({
            "string.empty":"Please enter email",
             "string.email":"Please enter a vaalid mail"
        }),
        password:joi.string().min(5).regex(/[A-Z]/).required().messages({
            "string.empty":"password is required",
            "string.min":"Password must be atleast 5 characters",
            "string.pattern.base": "Password must contain atleast one captial letter"
        }),
        role: joi.string().valid("user","admin").default("user")
    });
    return schema.validate(data,{abortEarly: false});
};