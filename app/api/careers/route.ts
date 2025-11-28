import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, position, resume, message } = body

        // Validate required fields
        if (!name || !email || !phone || !position || !resume) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Connect to Neon DB
        const sql = neon(process.env.DATABASE_URL!)

        // Insert career application into database
        await sql`
      INSERT INTO career_applications (
        name,
        email,
        phone,
        position,
        resume_link,
        message,
        created_at
      ) VALUES (
        ${name},
        ${email},
        ${phone},
        ${position},
        ${resume},
        ${message || ''},
        NOW()
      )
    `

        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error submitting application:', error)
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        )
    }
}
