export const getNetflixTemplate = (signupLink: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Finish signing up to start watching</title>
    </head>
    <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; color: #111111;">
      <div style="max-width: 500px; margin: 0 auto; background: #ffffff; padding: 10px;">
        
        <!-- Red Netflix Logo Indicator -->
        <div style="color: #E50914; font-size: 42px; font-weight: 900; margin-bottom: 25px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">N</div>
        
        <!-- Main Header -->
        <h1 style="font-size: 32px; font-weight: 800; line-height: 1.2; margin: 0 0 20px 0; color: #111111;">
          Finish signing up to start watching
        </h1>
        
        <!-- Body Content -->
        <p style="font-size: 16px; color: #222222; margin: 0 0 15px 0; line-height: 1.5;">Hey there,</p>
        
        <p style="font-size: 16px; color: #222222; margin: 0 0 30px 0; line-height: 1.5;">
          We're excited to have you! Tap the link below to finish signing up and start watching today's hottest shows and movies. <strong>Plans start at ₹149/month.</strong>
        </p>
        
        <!-- Red Call To Action Button -->
        <div style="margin-bottom: 25px;">
          <a href="http://localhost:5173" style="display: block; background-color: #E50914; color: #ffffff; text-decoration: none; text-align: center; font-size: 15px; font-weight: 700; padding: 14px; border-radius: 4px;">
            Finish Signing Up
          </a>
        </div>
        
        <!-- Expiration Timer Warning -->
        <p style="font-size: 14px; color: #555555; margin-bottom: 40px;">
          This link will expire in 15 minutes.
        </p>
        
        <!-- Feature 1: No Password -->
        <div style="margin-bottom: 25px;">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">No password needed</div>
          <div style="font-size: 15px; color: #555555;">Use this email address to securely sign in anywhere.</div>
        </div>
        
        <!-- Feature 2: Cancel Anytime -->
        <div style="margin-bottom: 25px;">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">Cancel Anytime</div>
          <div style="font-size: 15px; color: #555555;">Change or cancel your plan at any time.</div>
        </div>
        
        <!-- Feature 3: Unlimited Entertainment -->
        <div style="margin-bottom: 40px;">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">Unlimited Entertainment</div>
          <div style="font-size: 15px; color: #555555;">Watch all you want, on all your devices, for one low price.</div>
        </div>
        
        <!-- Footer Info Links -->
        <hr style="border: none; border-top: 1px solid #eeeeee; margin-bottom: 20px;" />
        <p style="font-size: 13px; color: #777777; margin-bottom: 20px;">
          Didn't ask to create an account? <a href="#" style="color: #777777; text-decoration: underline;">Let us know.</a>
        </p>
        
        <p style="font-size: 13px; color: #777777; font-weight: 600;">The Team</p>
      </div>
    </body>
    </html>
  `;
};
