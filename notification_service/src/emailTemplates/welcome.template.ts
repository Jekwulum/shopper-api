export const generateWelcomeEmail = (name: string) => {
  const appName = "Shopper";
  const dashboardUrl = "https://shopper.com/dashboard";
  const supportEmail = "support@shopper.com";
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
        <h1>👋 Welcome to ${appName}!</h1>
      </div>
      <div style="padding: 20px; color: #333;">
        <p>Hi <strong>${name}</strong>,</p>
        <p>We're excited to have you on board. ${appName} is here to help you have a seamless shopping experience.</p>

        <p style="margin: 30px 0;">
          <a href="${dashboardUrl}" style="
            display: inline-block;
            padding: 12px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
          ">Get Started</a>
        </p>

        <p>If you have any questions, feel free to reach out to our support team at 
          <a href="mailto:${supportEmail}">${supportEmail}</a>.
        </p>

        <p style="font-size: 12px; color: #999;">— The ${appName} Team</p>
      </div>
    </div>
  `;
}
