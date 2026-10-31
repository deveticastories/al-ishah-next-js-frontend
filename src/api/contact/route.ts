import { NextRequest, NextResponse } from "next/server";
import transporter from "@/utils/mailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        const { description } = await req.json();

        if (!description || typeof description !== "string" || !description.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Description is required",
                },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: "New Contact Enquiry",
            text: description.trim(),
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