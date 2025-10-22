# Contact Form Setup Instructions

## Current Status
The contact form is now set up with EmailJS integration but needs configuration to work.

## What's Already Done
✅ Form validation and UI states  
✅ Loading spinner during submission  
✅ Success/error messages  
✅ Form reset after successful submission  
✅ EmailJS package installed  

## What You Need to Do

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Template
1. In EmailJS dashboard, go to "Email Templates"
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{service}}` - Selected service
   - `{{message}}` - Message content

### 3. Get Your Credentials
1. **Service ID**: From your EmailJS service
2. **Template ID**: From your email template
3. **Public Key**: From your EmailJS account settings

### 4. Update the Code
Replace these values in `components/Contact.tsx` (lines 34-36):
```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your actual public key
```

### 5. Uncomment the EmailJS Code
Uncomment lines 41-48 in `components/Contact.tsx` to enable actual email sending.

## Alternative: Simple Email Solution
If you prefer a simpler solution, you can:
1. Use a service like Formspree or Netlify Forms
2. Or create a simple mailto link that opens the user's email client

## Testing
Once configured, test the form to ensure emails are being sent to your inbox.

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- Perfect for most small businesses
