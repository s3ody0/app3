import * as zod from 'zod'
export const RegisterSchema = zod.object({
    name : zod.string().nonempty('name is required').min(3,'name must be at least 3 characters').max(15,"name can't be more than 15 characters"),
    email : zod.email().nonempty('email is required'),
    password : zod.string().nonempty("password is required").regex(/^[A-Z][A-Za-z0-9]{5,}$/, "password must start with an uppercase letter and be at least 6 characters long"),
    rePassword : zod.string().nonempty("confirm the password").regex(/^[A-Z][A-Za-z0-9]{5,}$/, "password must start with an uppercase letter and be at least 6 characters long"),
    phone : zod.string().nonempty('phone is required').regex(/^01[0125][0-9]{8}$/ , 'phone number must be a valid Egyptian number (11 digits starting with 01)')
}).refine((object) => object.password === object.rePassword , {
    path: ['rePassword'],
    error : "password does not match"
})


export type Registertype = zod.infer<typeof RegisterSchema> 



export const LoginSchema = zod.object({
  email : zod.email().nonempty('email is required'),
    password : zod.string().nonempty("password is required").regex(/^[A-Z][A-Za-z0-9]{5,}$/, "password must start with an uppercase letter and be at least 6 characters long"),
})

export type Logintype = zod.infer<typeof LoginSchema>


export const ForgetSchema = zod.object({
  email : zod.email().nonempty('email is required'),
})

export type Forgettype = zod.infer<typeof ForgetSchema>


export const verifySchema = zod.object({
    resetCode : zod.string()
})

export type verifytype = zod.infer<typeof verifySchema>

export const ResetSchema = zod.object({
      email : zod.email().nonempty('email is required'),
    newPassword : zod.string().nonempty("new password is required").regex(/^[A-Z][A-Za-z0-9]{5,}$/, "password must start with an uppercase letter and be at least 6 characters long"),

})
export type Resettype = zod.infer<typeof ResetSchema>