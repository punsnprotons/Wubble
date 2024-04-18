import Stripe from "stripe"


export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : '',
    {
        apiVersion: '2024-04-18',
        appInfo: {
            name: 'Wubble',
            version: '0.1.0'
        }
    }
);