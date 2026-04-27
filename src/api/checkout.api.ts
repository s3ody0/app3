import { CheckOuttype } from "@/schema/checkout.schema"
import getMyToken from "@/utilities/GetMyToken"

export async function makeOnlinePayment(cartId:string,url:string , formValues:CheckOuttype){
    const token = await getMyToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{
        method:'POST',
        headers:{
            token:`${token}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            shippingAddress:formValues
        })

    })
    const data = await response.json()
    return data
}




export async function makeCashPayment(cartId:string, formValues:CheckOuttype){
    const token = await getMyToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,{
        method:'POST',
        headers:{
            token:`${token}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            shippingAddress:formValues
        })

    })
    const data = await response.json()
    return data
}