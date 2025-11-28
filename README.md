# RoboSpace - EdTech Robotics Platform

A stunning Next.js website for RoboSpace, an EdTech initiative focused on transforming education through experiential learning in robotics and automation.

## Features

- 🎨 **Beautiful Sky Morning/Night Theme** - Automatic theme switching with smooth transitions
- 🎭 **3D Rotating Gears** - Stunning Three.js 3D animations in the background
- ✨ **Smooth Animations** - Framer Motion powered animations throughout
- 🌈 **Gradient Textures** - Professional gradients and glass morphism effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🗄️ **Neon DB Integration** - PostgreSQL database for contact forms and career applications
- 🚀 **Performance Optimized** - Built with Next.js 14 for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: CSS Modules with custom design system
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Database**: Neon PostgreSQL
- **Icons**: Lucide React
- **Fonts**: Inter & Orbitron (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Neon DB account (free tier available at [neon.tech](https://neon.tech))

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up Neon Database**:
   - Create a new project at [neon.tech](https://neon.tech)
   - Copy your connection string
   - Update `.env.local` with your Neon DB connection string:
   ```
   DATABASE_URL=postgresql://user:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require
   ```

3. **Initialize the database**:
   - Go to your Neon dashboard
   - Open the SQL Editor
   - Copy and paste the contents of `database/schema.sql`
   - Run the SQL to create tables

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
RoboSpace/
├── app/
│   ├── api/
│   │   ├── contact/route.ts    # Contact form API
│   │   └── careers/route.ts    # Career applications API
│   ├── globals.css             # Global styles & theme
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── About.tsx               # About section
│   ├── Careers.tsx             # Careers section
│   ├── Footer.tsx              # Footer component
│   ├── GearBackground.tsx      # 3D gear animation
│   ├── Hero.tsx                # Hero section
│   ├── Navbar.tsx              # Navigation bar
│   ├── Partner.tsx             # Partner/contact section
│   ├── Programs.tsx            # Programs section
│   └── ThemeProvider.tsx       # Theme management
├── database/
│   └── schema.sql              # Database schema
└── package.json
```

## Features Breakdown

### Theme System
- Automatic time-based theme detection (6 AM - 6 PM = morning theme)
- Manual toggle with smooth transitions
- LocalStorage persistence
- Beautiful sky gradients for both themes

### 3D Gear Animation
- Multiple interconnected gears
- Smooth rotation and floating animations
- Responsive to screen size
- Optimized performance

### Database Integration
- Contact/demo request form saves to `contact_requests` table
- Career application form saves to `career_applications` table
- Proper validation and error handling
- Status tracking for follow-ups

## Customization

### Update Contact Information
Edit the following files:
- `components/Partner.tsx` - Update phone, email, location
- `components/Footer.tsx` - Update social links and contact info

### Modify Theme Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --morning-accent: #4A90E2;
  --night-accent: #6C63FF;
  /* ... more variables */
}
```

### Add More Programs
Edit `components/Programs.tsx` and add to the `programs` array.

### Add More Job Positions
Edit `components/Careers.tsx` and add to the `positions` array.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your `DATABASE_URL` environment variable in Vercel settings
4. Deploy!

### Environment Variables
Make sure to set these in your deployment platform:
- `DATABASE_URL` - Your Neon PostgreSQL connection string

## Database Management

Access your Neon dashboard to:
- View submitted contact requests
- Review career applications
- Export data
- Monitor database usage

## Support

For issues or questions:
- Email: contact@robospace.in
- Careers: careers@robospace.in

## License

© 2025 RoboSpace. All rights reserved.

---

Made with ❤️ for the future innovators
