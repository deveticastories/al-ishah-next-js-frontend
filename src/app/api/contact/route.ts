import { NextRequest, NextResponse } from "next/server";
import transporter from "@/utils/mailer";

const field = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const fullName = field(body.fullName);
        const companyName = field(body.companyName);
        const email = field(body.email);
        const phone = field(body.phone);
        const interest = field(body.interest);
        const message = field(body.message);

        if (!fullName || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Full name, email and message are required",
                },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Contact Enquiry from ${fullName}`,
            text: [
                `Full Name: ${fullName}`,
                `Company Name: ${companyName || "-"}`,
                `Email: ${email}`,
                `Contact Number: ${phone || "-"}`,
                `Product or Brand of Interest: ${interest || "-"}`,
                "",
                "Message:",
                message,
            ].join("\n"),
        });

        return NextResponse.json({
            success: true,
            message: "Enquiry sent successfully",
        });
    } catch (error) {
        console.error("Contact email error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to send enquiry",
            },
            { status: 500 }
        );
    }
}
