import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { schoolName, contactPerson, email, phone, location, message } = body

        // Validate required fields
        if (!schoolName || !contactPerson || !email || !phone || !location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Connect to Neon DB
        const sql = neon(process.env.DATABASE_URL!)

        // Insert contact request into database
        await sql`
      INSERT INTO contact_requests (
        school_name,
        contact_person,
        email,
        phone,
        location,
        message,
        created_at
      ) VALUES (
        ${schoolName},
        ${contactPerson},
        ${email},
        ${phone},
        ${location},
        ${message || ''},
        NOW()
      )
    `

        return NextResponse.json(
            { message: 'Contact request submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error submitting contact request:', error)
        return NextResponse.json(
            { error: 'Failed to submit contact request' },
            { status: 500 }
        )
    }
}
