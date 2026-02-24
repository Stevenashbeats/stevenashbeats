# Steve Nash Beats - Showcase Hub

Professional music producer portfolio and beat showcase platform.

## 🚀 Live Site

**Production URL**: https://main.stevenashbeats.pages.dev

## 🛠️ Development

### Prerequisites

- Node.js 18+ (managed via `.node-version`)
- npm

### Local Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd beats-showcase-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:8080`

## 🏗️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: GSAP
- **Hosting**: Cloudflare Pages

## 📦 Deployment

### Deploy to Cloudflare Pages

```sh
# Build and deploy in one command
npm run deploy

# Or manually
npm run build
npx wrangler pages deploy dist
```

### Custom Domain Setup

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select your project: `stevenashbeats`
3. Navigate to **Custom domains**
4. Click **Set up a custom domain**
5. Enter your domain and follow the DNS configuration steps

### Environment Variables

If you need environment variables, add them in:
- Cloudflare Pages Dashboard → Settings → Environment variables

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to Cloudflare Pages
- `npm run lint` - Run ESLint
