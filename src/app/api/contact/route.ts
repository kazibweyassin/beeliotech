import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message, service } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create a simple email content
    const emailContent = `
New Contact Form Submission from Beelio Technologies Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service Interest: ${service}

Message:
${message}

---
This message was sent from the contact form at beelio.tech
Timestamp: ${new Date().toLocaleString()}
    `

    // For now, we'll return success and let the frontend handle the mailto
    // In production, you'd set up proper SMTP configuration
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      service,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Message received successfully',
      mailtoLink: `mailto:beeliotechnologies@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailContent)}`
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
