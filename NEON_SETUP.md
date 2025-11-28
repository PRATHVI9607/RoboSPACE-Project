# 🗄️ Neon Database Setup Guide

This guide will walk you through setting up your Neon PostgreSQL database for the RoboSpace website.

## Step 1: Create a Neon Account

1. Go to [https://neon.tech](https://neon.tech)
2. Click "Sign Up" (it's free!)
3. Sign up using GitHub, Google, or email
4. Verify your email if required

## Step 2: Create a New Project

1. Once logged in, click **"Create a project"** or **"New Project"**
2. Fill in the project details:
   - **Project Name**: `RoboSpace` (or any name you prefer)
   - **Region**: Choose the region closest to your users (e.g., `AWS US East (N. Virginia)` for US users)
   - **Postgres Version**: Leave as default (latest version)
3. Click **"Create Project"**

## Step 3: Get Your Connection String

1. After creating the project, you'll see a connection string
2. It will look something like this:
   ```
   postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
3. **IMPORTANT**: Copy this connection string - you'll need it!

### Alternative: Find Connection String Later

If you closed the window:
1. Go to your Neon Dashboard
2. Select your project (`RoboSpace`)
3. Click on **"Connection Details"** or **"Dashboard"**
4. You'll see the connection string under **"Connection string"**
5. Make sure **"Pooled connection"** is selected for better performance

## Step 4: Update Your .env.local File

1. Open the file `c:\Workspace\RoboSpace\.env.local`
2. Replace the placeholder with your actual connection string:
   ```
   DATABASE_URL=postgresql://your-username:your-password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
   ```
3. Save the file

**Example:**
```
DATABASE_URL=postgresql://alex:AbCdEf123456@ep-cool-wave-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

## Step 5: Create Database Tables

1. In your Neon Dashboard, click on **"SQL Editor"** in the left sidebar
2. You'll see a query editor
3. Open the file `c:\Workspace\RoboSpace\database\schema.sql`
4. Copy ALL the contents of that file
5. Paste it into the Neon SQL Editor
6. Click **"Run"** or press `Ctrl+Enter`
7. You should see a success message: "Success. No rows returned"

### What This Creates:

- **contact_requests** table - Stores demo requests from the Partner section
- **career_applications** table - Stores job applications from the Careers section
- Indexes for better query performance

## Step 6: Verify Tables Were Created

1. In the Neon SQL Editor, run this query:
   ```sql
   SELECT table_name FROM information_schema.tables 
   WHERE table_schema = 'public';
   ```
2. You should see:
   - `contact_requests`
   - `career_applications`

## Step 7: Test the Connection

1. Make sure your Next.js dev server is running:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000)
3. Scroll to the "Partner With Us" section
4. Fill out the demo request form
5. Click "Schedule Demo"
6. You should see a success message!

## Step 8: View Submitted Data

### In Neon Dashboard:

1. Go to **SQL Editor**
2. Run this query to see contact requests:
   ```sql
   SELECT * FROM contact_requests ORDER BY created_at DESC;
   ```
3. Run this query to see career applications:
   ```sql
   SELECT * FROM career_applications ORDER BY created_at DESC;
   ```

### Export Data:

1. In SQL Editor, run your query
2. Click the **"Download"** button (CSV icon)
3. Choose CSV or JSON format

## Common Issues & Solutions

### Issue: "Connection failed" error

**Solution:**
- Double-check your connection string in `.env.local`
- Make sure there are no extra spaces
- Verify the password is correct
- Restart your Next.js dev server after changing `.env.local`

### Issue: "relation does not exist" error

**Solution:**
- You haven't run the schema.sql file yet
- Go back to Step 5 and create the tables

### Issue: Forms submit but no data in database

**Solution:**
- Check the browser console for errors (F12)
- Verify your `.env.local` file is in the root directory
- Restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

## Database Management Tips

### View Recent Submissions:
```sql
-- Last 10 contact requests
SELECT school_name, contact_person, email, created_at 
FROM contact_requests 
ORDER BY created_at DESC 
LIMIT 10;

-- Last 10 job applications
SELECT name, position, email, created_at 
FROM career_applications 
ORDER BY created_at DESC 
LIMIT 10;
```

### Update Status:
```sql
-- Mark a contact request as contacted
UPDATE contact_requests 
SET status = 'contacted' 
WHERE id = 1;

-- Mark an application as reviewed
UPDATE career_applications 
SET status = 'reviewed' 
WHERE id = 1;
```

### Delete Test Data:
```sql
-- Clear all test contact requests
DELETE FROM contact_requests WHERE email LIKE '%test%';

-- Clear all test applications
DELETE FROM career_applications WHERE email LIKE '%test%';
```

## Security Best Practices

1. **Never commit `.env.local` to Git** - It's already in `.gitignore`
2. **Use environment variables** in production (Vercel, etc.)
3. **Rotate your password** if you accidentally expose it
4. **Enable IP restrictions** in Neon (optional, for production)

## Neon Free Tier Limits

- ✅ 0.5 GB storage
- ✅ 1 project
- ✅ 10 branches
- ✅ Unlimited queries
- ✅ Always-on compute (with some limits)

Perfect for development and small projects!

## Need Help?

- **Neon Docs**: [https://neon.tech/docs](https://neon.tech/docs)
- **Neon Discord**: [https://discord.gg/neon](https://discord.gg/neon)
- **Check your connection**: Use the "Test connection" button in Neon Dashboard

---

## Quick Reference

**Your Connection String Format:**
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
```

**Tables Created:**
- `contact_requests` - Partner/demo requests
- `career_applications` - Job applications

**API Endpoints:**
- `/api/contact` - Handles demo requests
- `/api/careers` - Handles job applications

---

✅ Once you complete these steps, your database will be fully set up and ready to store form submissions!
