export const generateOrderTemplate = (customerName: string, orderId: string, status: string) => {
  const appName = 'Shopper';
  const supportEmail = 'support@shopper.com';

  const isCompleted = status === "completed";
  const statusText = isCompleted ? "completed" : "cancelled";
  const statusColor = isCompleted ? "#28a745" : "#dc3545";
  const statusIcon = isCompleted ? "✅" : "❌";

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: ${statusColor}; color: white; padding: 20px; text-align: center;">
        <h2>${statusIcon} Order ${statusText.charAt(0).toUpperCase() + statusText.slice(1)}</h2>
      </div>
      <div style="padding: 20px; color: #333;">
        <p>Hi <strong>${customerName}</strong>,</p>
        <p>Your order <strong>#${orderId}</strong> has been <strong style="color: ${statusColor};">${statusText}</strong>.</p>
        ${
          isCompleted
            ? `<p>Thank you for shopping with ${appName}. We hope you enjoy your purchase!</p>`
            : `<p>We're sorry to let you know your order has been cancelled. If you have any questions, feel free to contact our support team.</p>`
        }
        <p style="margin-top: 30px;">If you need help, reach out to us at <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
        <p style="font-size: 12px; color: #999;">— The ${appName} Team</p>
      </div>
    </div>
  `;
};