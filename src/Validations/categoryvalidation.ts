import joi from "joi";
export const categoryvalidation = joi.object({
    name:joi.string().min(3).max(50).required().messages({
        "string.empty": "Category name is required",
        "string.min": "Category name must be atleast 3 characters",
    }),
    description: joi.string().min(10).max(200).required().messages({
        "string.empty":"Description is required",
        "string.min": "Description must be atleast 10 characters",
    }),
});
export const updatecategoryvalidation = joi.object({
    name:joi.string().min(3).max(50).optional().messages({
        "string.empty": "Category name is required",
        "string.min":"category name must be atleast 3 characters"
    }),
    description: joi.string().min(10).max(200).required().messages({
        "string.empty":"Description is required",
        "string.min":"Description must be atleast 10 characters"
    }),
});
