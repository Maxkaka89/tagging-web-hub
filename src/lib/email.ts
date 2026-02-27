import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// You can use a real verified domain here if you have one.
// Otherwise, Resend requires you to use their testing domain 'onboarding@resend.dev' 
// which ONLY allowed to send emails to the email address you registered Resend with.
const SENDER_EMAIL = 'onboarding@resend.dev';

export async function sendOTPVerificationEmail(toEmail: string, otpCode: string, name: string) {
    try {
        const data = await resend.emails.send({
            from: `Max Hub <${SENDER_EMAIL}>`,
            to: [toEmail],
            subject: 'Your Max Hub Verification Code',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="background-color: #4f46e5; padding: 24px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">Max Hub Registration</h1>
                    </div>
                    <div style="padding: 32px; background-color: #ffffff;">
                        <p style="font-size: 16px; color: #334155; margin-bottom: 24px;">Hi <strong>${name}</strong>,</p>
                        <p style="font-size: 16px; color: #334155; margin-bottom: 24px;">Thank you for registering with Max Hub. Please use the following verification code to complete your signup process:</p>
                        <div style="background-color: #f1f5f9; border-radius: 8px; padding: 16px; text-align: center; margin-bottom: 24px;">
                            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #4f46e5;">${otpCode}</span>
                        </div>
                        <p style="font-size: 14px; color: #64748b; margin-bottom: 8px;">This code will expire in 10 minutes.</p>
                        <p style="font-size: 14px; color: #64748b;">If you didn't request this code, you can safely ignore this email.</p>
                    </div>
                    <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
                         <p style="font-size: 12px; color: #94a3b8; margin: 0;">© ${new Date().getFullYear()} Concentrix. All rights reserved.</p>
                    </div>
                </div>
            `,
        });

        console.log('Resend OTP Email sent:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Failed to send Resend OTP Email:', error);
        return { success: false, error };
    }
}

export async function sendPasswordResetEmail(toEmail: string, otpCode: string) {
    try {
        const data = await resend.emails.send({
            from: `Max Hub <${SENDER_EMAIL}>`,
            to: [toEmail],
            subject: 'Password Reset Request',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="background-color: #ef4444; padding: 24px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">Max Hub Password Reset</h1>
                    </div>
                    <div style="padding: 32px; background-color: #ffffff;">
                        <p style="font-size: 16px; color: #334155; margin-bottom: 24px;">We received a request to reset the password for your account associated with <strong>${toEmail}</strong>.</p>
                        <p style="font-size: 16px; color: #334155; margin-bottom: 24px;">Use the following reset code to choose a new password:</p>
                        <div style="background-color: #f1f5f9; border-radius: 8px; padding: 16px; text-align: center; margin-bottom: 24px;">
                            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #ef4444;">${otpCode}</span>
                        </div>
                        <p style="font-size: 14px; color: #64748b; margin-bottom: 8px;">This code will expire in 10 minutes.</p>
                        <p style="font-size: 14px; color: #64748b;">If you didn't request a password reset, please ignore this email or contact support if you have concerns.</p>
                    </div>
                    <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
                         <p style="font-size: 12px; color: #94a3b8; margin: 0;">© ${new Date().getFullYear()} Concentrix. All rights reserved.</p>
                    </div>
                </div>
            `,
        });

        console.log('Resend Reset Email sent:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Failed to send Resend Reset Email:', error);
        return { success: false, error };
    }
}
