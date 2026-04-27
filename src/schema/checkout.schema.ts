import * as zod from 'zod'

export const checkOutSchema = zod.object({
    details:zod.string().nonempty('details are required'),
    phone: zod.string().nonempty('phone is required').regex(/^01[0125][0-9]{8}$/ , 'phone number must be a valid Egyptian number (11 digits starting with 01)'),
    city :zod.string().nonempty('city is required')
})


export type CheckOuttype = zod.infer<typeof checkOutSchema> 