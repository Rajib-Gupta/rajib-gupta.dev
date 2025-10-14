import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { timestamp, userAgent, referrer } = body;

    // Get client IP (considering proxies)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(/, /)[0] : request.headers.get('x-real-ip') || 'Unknown';

    // Prepare email content
    const emailData = {
      to: 'rajibgupta003@gmail.com', // Your email
      subject: '📄 Resume Downloaded - Portfolio Notification',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #2563eb, #9333ea); padding: 30px; border-radius: 10px; color: white; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">📄 Resume Downloaded!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just downloaded your resume from your portfolio website.</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Download Details</h2>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <strong style="color: #2563eb;">📅 Date & Time:</strong><br>
              ${new Date(timestamp).toLocaleString('en-US', { 
                timeZone: 'Asia/Kolkata',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })} IST
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <strong style="color: #2563eb;">🌐 IP Address:</strong><br>
              ${ip}
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <strong style="color: #2563eb;">🔗 Referrer:</strong><br>
              ${referrer || 'Direct visit'}
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <strong style="color: #2563eb;">💻 User Agent:</strong><br>
              <small style="color: #666; word-break: break-all;">${userAgent}</small>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This notification was sent from your portfolio website.<br>
                <a href="http://localhost:3000" style="color: #2563eb;">Visit your portfolio</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // In a real application, you would use a service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // etc.

    // For now, we'll simulate the email sending
    console.log('📧 Email notification would be sent:', emailData);

    // Here's an example of how you might send with Resend (when you add the service):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'rajibgupta003@gmail.com',
      subject: emailData.subject,
      html: emailData.html,
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Download tracked successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error tracking resume download:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to track download' },
      { status: 500 }
    );
  }
}