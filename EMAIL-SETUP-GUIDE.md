# Email Setup Guide for Beelio Contact Form

## Current Issue
The contact form is not sending emails to beeliotechnologies@gmail.com because it only opens mailto links, which require users to have email clients configured.

## Solution: EmailJS Setup

EmailJS is a reliable service that sends emails directly from your website to your Gmail account without requiring server setup.

### Step 1: Create EmailJS Account
1. Go to https://dashboard.emailjs.com/
2. Sign up with your Google account (use beeliotechnologies@gmail.com)
3. Verify your email address

### Step 2: Create an Email Service
1. In EmailJS dashboard, click "Add New Service"
2. Choose "Gmail" as your email service
3. Connect your beeliotechnologies@gmail.com account
4. Note down the **Service ID** (e.g., "service_1a2b3c4")

### Step 3: Create Email Template
1. Go to "Email Templates" section
2. Click "Create New Template"
3. Use this template content:

**Subject**: New Contact from {{from_name}} - Beelio Technologies

**Body**:
```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service Interest: {{service}}

Message:
{{message}}

---
Sent from beelio.tech contact form
Date: {{current_date}}
```

4. Save and note the **Template ID** (e.g., "template_1a2b3c4")

### Step 4: Get Your User ID
1. Go to "Account" section in EmailJS dashboard
2. Copy your **User ID** (Public Key) (e.g., "user_1a2b3c4d5e6f7g8h")

### Step 5: Update Environment Variables
Update your `.env.local` file with the actual values:

```bash
# Replace with your actual EmailJS values
NEXT_PUBLIC_EMAILJS_USER_ID=user_1a2b3c4d5e6f7g8h
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1a2b3c4
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_1a2b3c4
```

### Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check beeliotechnologies@gmail.com for the email

## Alternative Solution: Formspree (Easier Setup)

If EmailJS seems complex, here's a simpler alternative:

### Option 1: Formspree
1. Go to https://formspree.io/
2. Sign up with beeliotechnologies@gmail.com
3. Create a new form endpoint
4. You'll get a form URL like: `https://formspree.io/f/abc123def`
5. Update the form action to use this URL

### Option 2: Netlify Forms (If deploying on Netlify)
1. Add `netlify` attribute to your form
2. Netlify automatically handles form submissions
3. Emails are sent to your registered email

## Current Fallback
The form currently has these fallbacks:
1. **Primary**: EmailJS (when configured)
2. **Secondary**: API route with mailto link
3. **Final**: Direct mailto link

## Testing Checklist
- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Environment variables updated
- [ ] Development server restarted
- [ ] Test form submission completed
- [ ] Email received in beeliotechnologies@gmail.com

## Monthly Limits
- **EmailJS Free**: 200 emails/month
- **EmailJS Paid**: Starting at $15/month for 1,000 emails
- **Formspree Free**: 50 submissions/month
- **Formspree Paid**: Starting at $10/month for 1,000 submissions

For a new business, the free tiers should be sufficient initially.

## Recommended Next Steps
1. Set up EmailJS (most reliable)
2. Test thoroughly with different devices
3. Monitor email delivery in your Gmail
4. Set up email filters to organize contact form emails
5. Create an auto-responder template for quick client responses

Once EmailJS is configured with your actual credentials, every contact form submission will be delivered directly to beeliotechnologies@gmail.com within seconds!
