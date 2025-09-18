# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form functional.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 🔧 Step 2: Configure Email Service

1. **Add Email Service:**
   - Go to EmailJS Dashboard
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your email account (k.saab75@gmail.com)
   - Note down the **Service ID** (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. **Create Template:**
   - Go to "Email Templates" in EmailJS Dashboard
   - Click "Create New Template"
   - Choose "Blank Template"

2. **Template Content:**
   ```html
   Subject: New Contact Form Message from {{from_name}}

   Hello Khaled,

   You have received a new message from your portfolio website:

   **Contact Details:**
   - Name: {{from_name}}
   - Email: {{from_email}}
   - Company: {{company}}

   **Project Information:**
   - Project Type: {{project_type}}
   - Budget Range: {{budget}}

   **Message:**
   {{message}}

   Best regards,
   Your Portfolio Website
   ```

3. **Save Template:**
   - Save the template with a name like "Portfolio Contact"
   - Note down the **Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in EmailJS Dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## ⚙️ Step 5: Update Your Code

### Update `contact.html`:
Replace the EmailJS initialization in the script tag:

```javascript
// Replace this line in contact.html
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// With your actual public key
emailjs.init("user_def456"); // Replace with your actual public key
```

### Update `src/js/components/contact.js`:
Replace the placeholder values:

```javascript
// Replace these lines in contact.js
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
emailjs.init("YOUR_PUBLIC_KEY");

// With your actual values
const serviceID = 'service_abc123'; // Replace with your actual service ID
const templateID = 'template_xyz789'; // Replace with your actual template ID
emailjs.init("user_def456"); // Replace with your actual public key
```

## 🧪 Step 6: Test Your Form

1. Open your contact page
2. Fill out the form with test data
3. Submit the form
4. Check your email (k.saab75@gmail.com) for the message
5. Check browser console for any errors

## 🔒 Step 7: Security Considerations

1. **Rate Limiting:** EmailJS free plan has limits (200 emails/month)
2. **Spam Protection:** The form includes honeypot fields
3. **Validation:** Client-side validation is implemented
4. **Error Handling:** Proper error messages for users

## 📊 Step 8: Monitor Usage

- Check EmailJS Dashboard for email delivery status
- Monitor your email service for received messages
- Check browser console for any JavaScript errors

## 🎯 Features Included

✅ **Form Validation:** Required fields and email format validation
✅ **Progress Tracking:** Visual progress bar as user fills form
✅ **Loading States:** Button shows "Sending..." during submission
✅ **Success/Error Feedback:** Clear notifications for users
✅ **Auto-reset:** Form clears after successful submission
✅ **Error Handling:** Graceful error handling with user feedback

## 🚨 Troubleshooting

### Common Issues:

1. **"EmailJS is not defined"**
   - Make sure EmailJS script is loaded before your main.js
   - Check network tab for script loading errors

2. **"Service ID not found"**
   - Verify your service ID in EmailJS dashboard
   - Make sure the service is active

3. **"Template ID not found"**
   - Verify your template ID in EmailJS dashboard
   - Make sure the template is published

4. **Emails not received**
   - Check spam folder
   - Verify email service connection in EmailJS
   - Check EmailJS dashboard for delivery status

### Debug Mode:
Add this to see detailed logs:
```javascript
emailjs.init("YOUR_PUBLIC_KEY", undefined, {
    useHostname: false,
    debug: true
});
```

## 📞 Support

If you encounter issues:
1. Check EmailJS documentation: [docs.emailjs.com](https://docs.emailjs.com/)
2. Check browser console for error messages
3. Verify all IDs and keys are correct
4. Test with EmailJS playground first

---

**Your contact form is now ready to receive messages! 🎉**
