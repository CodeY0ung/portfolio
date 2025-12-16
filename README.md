# Award-Winning Portfolio Website

A stunning portfolio website built with Next.js 14, featuring Awwwards-level design with glassmorphism, cinematic animations, and seamless shared element transitions.

## Features

- **Bento Grid Gallery**: Modern masonry layout showcasing projects
- **Shared Element Transitions**: Smooth morphing animations between pages using Framer Motion's `layoutId`
- **Project Navigation**: Swipe or click arrows to navigate between projects
- **Like System**: Interactive like button with confetti effects and localStorage persistence
- **Glassmorphism Design**: Beautiful glass-like surfaces with subtle glows
- **Responsive**: Fully responsive on all devices

## Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (optional)
- **Effects**: Canvas Confetti
- **Utilities**: clsx, tailwind-merge

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase (Optional)

If you want to enable persistent like counts across all users:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
3. Update `.env.local` with your Supabase credentials
4. Create the following table in your Supabase database:

```sql
CREATE TABLE project_likes (
  project_id TEXT PRIMARY KEY,
  likes INTEGER DEFAULT 0
);
```

5. Create the PostgreSQL function:

```sql
CREATE OR REPLACE FUNCTION increment_likes(project_id_param TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_likes INTEGER;
BEGIN
  INSERT INTO project_likes (project_id, likes)
  VALUES (project_id_param, 1)
  ON CONFLICT (project_id)
  DO UPDATE SET likes = project_likes.likes + 1;

  SELECT likes INTO new_likes
  FROM project_likes
  WHERE project_id = project_id_param;

  RETURN new_likes;
END;
$$ LANGUAGE plpgsql;
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── project/[id]/
│   │   └── page.tsx          # Project detail page
│   ├── actions.ts             # Server actions for Supabase
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page with Bento grid
│   └── globals.css            # Global styles and design tokens
├── components/
│   └── ProjectCard.tsx        # Animated project card component
└── lib/
    ├── data.ts                # Project data
    ├── supabase.ts            # Supabase client
    └── utils.ts               # Utility functions
```

## Customization

### Adding Your Projects

Edit `src/lib/data.ts` to add your own projects:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Your Project",
    description: "Project description",
    thumbnail: "https://your-image-url.com/thumb.jpg",
    images: [
      "https://your-image-url.com/image1.jpg",
      "https://your-image-url.com/image2.jpg",
    ],
    tags: ["React", "TypeScript", "Next.js"],
    color: "#5E6AD2",
    likes: 0,
  },
  // Add more projects...
];
```

### Customizing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0B0C10;      /* Deep gunmetal background */
  --surface: #161618;          /* Card background */
  --accent: #5E6AD2;           /* Primary accent color */
  --accent-cyan: #00D9FF;      /* Cyan glow color */
  --text-primary: #EDEDED;     /* Primary text */
  --text-muted: #888888;       /* Muted text */
}
```

## Build for Production

```bash
npm run build
npm start
```

## Key Features Implementation

### 1. Shared Element Transitions

Uses Framer Motion's `layoutId` to create seamless transitions between list and detail views:

```tsx
<motion.div layoutId={`project-${project.id}`}>
  {/* Content */}
</motion.div>
```

### 2. Like System

- **Optimistic Updates**: UI updates immediately when clicking like
- **LocalStorage**: Prevents duplicate likes per browser
- **Confetti Effect**: Celebratory animation on like
- **Supabase Integration**: Optional persistent storage

### 3. Navigation

- Arrow buttons for desktop
- Swipe gestures for mobile (via AnimatePresence)
- Circular navigation (wraps around)

## Design Inspiration

This portfolio combines:
- **Linear's** precision and color palette
- **Unveil's** cinematic motion design
- **Glassmorphism** for modern UI aesthetics

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
