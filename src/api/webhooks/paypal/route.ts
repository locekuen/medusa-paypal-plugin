// src/api/webhooks/paypal/route.ts

export async function POST(req: any) {
    const body = await req.json();

    if (body.event_type === "PAYMENT.CAPTURE.COMPLETED") {
        console.log("支付成功:", body);
        // TODO:
        // 1. 找到 order
        // 2. mark paid
        // 3. capture medusa payment
    }

    return Response.json({ received: true });
}
