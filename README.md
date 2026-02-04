# Next.js Dashboard with Sales Metrics

A modern, full-featured dashboard application built with Next.js 14+, featuring authentication,
sales metrics visualization, and dark mode by default.

## Features

- **Authentication System**
  - Login, Signup, and Password Recovery pages
  - JWT-based authentication with HTTP-only cookies
  - Protected routes with middleware
  - Persistent authentication state with Zustand

- **Dashboard Metrics**
  - Total Revenue, Transactions, Customers, MRR
  - Conversion Rate tracking
  - Revenue comparison charts (current vs previous year)
  - Recent transactions table with status badges
  - Real-time data loading with skeletons

- **User Interface**
  - Dark mode enabled by default
  - Fully responsive design (mobile, tablet, desktop)
  - Modern UI with shadcn/ui components
  - Smooth animations and transitions
  - Collapsible sidebar for mobile

## Tech Stack

- **Framework:** Next.js 15.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **State Management:** Zustand
- **Charts:** Recharts
- **Authentication:** JWT (jose) + bcryptjs
- **Package Manager:** pnpm

## Project Structure

```
nextjs-shadcn-dashboard/
├── app/
│   ├── (auth)/                    # Public authentication routes
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgot-password/
│   ├── (dashboard)/               # Protected dashboard routes
│   │   ├── dashboard/
│   │   └── profile/
│   ├── api/
│   │   ├── auth/                  # Authentication endpoints
│   │   └── metrics/               # Metrics data endpoints
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── auth/                      # Authentication forms
│   ├── dashboard/                 # Dashboard components
│   ├── profile/                   # Profile components
│   └── providers/                 # Context providers
├── store/
│   └── auth-store.ts             # Authentication state
├── types/
│   ├── auth.ts                   # Auth type definitions
│   ├── user.ts                   # User type definitions
│   └── metrics.ts                # Metrics type definitions
├── mock/
│   ├── users.ts                  # Mock user data
│   └── metrics.ts                # Mock metrics data
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── auth.ts                   # JWT utilities
│   └── api.ts                    # API utilities
└── middleware.ts                 # Route protection
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Test Credentials

Use these credentials to test the application:

- **Email:** john@example.com
- **Password:** password123

Or create a new account via the signup page.

## Usage

### Authentication Flow

1. Visit the application - you'll be redirected to `/login`
2. Login with test credentials or create a new account
3. After successful authentication, you'll be redirected to `/dashboard`
4. Access your profile via the sidebar or header dropdown
5. Logout using the sidebar or header menu

### Dashboard Features

The dashboard displays:

- 5 metric cards showing key business metrics with change percentages
- A line chart comparing current year vs previous year revenue
- A table of recent transactions with status indicators

### Protected Routes

The following routes are protected and require authentication:

- `/dashboard` - Main dashboard with metrics
- `/profile` - User profile settings

Attempting to access these without authentication redirects to `/login`.

### Public Routes

The following routes are publicly accessible:

- `/login` - Sign in page
- `/signup` - Create new account
- `/forgot-password` - Password recovery

If you're already authenticated, accessing these routes redirects to `/dashboard`.

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## API Routes

### Authentication

- `POST /api/auth/login` - Login with email and password
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/logout` - Logout and clear session
- `GET /api/auth/me` - Get current user info

### Metrics

- `GET /api/metrics/overview` - Get dashboard metrics and revenue data
- `GET /api/metrics/transactions?limit=N` - Get recent transactions

## Customization

### Theme

The application uses dark mode by default. The theme is configured in:

- `app/globals.css` - CSS variables for colors
- `tailwind.config.ts` - Tailwind theme configuration
- `components/providers/theme-provider.tsx` - Theme provider setup

### Mock Data

Mock data is located in the `mock/` directory:

- `mock/users.ts` - Add or modify test users
- `mock/metrics.ts` - Customize metrics and transaction data

### Adding New Features

1. Define types in `types/`
2. Create API routes in `app/api/`
3. Build components in `components/`
4. Add pages in `app/`
5. Update middleware if route protection is needed

## Production Deployment

1. Build the application:

```bash
pnpm build
```

2. Set environment variables:

```bash
JWT_SECRET=your-secure-secret-key-here
NODE_ENV=production
```

3. Start the production server:

```bash
pnpm start
```

### Environment Variables

- `JWT_SECRET` - Secret key for JWT token signing (required in production)
- `NODE_ENV` - Set to `production` for production builds

## Security Notes

- JWT tokens are stored in HTTP-only cookies for security
- Passwords are hashed using bcryptjs with salt rounds of 10
- Middleware validates tokens on protected routes
- CSRF protection via same-site cookie policy
- Change the default JWT_SECRET in production

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Server won't start

- Ensure port 3000 is available
- Check Node.js version (18+)
- Clear `.next` folder and rebuild

### Authentication issues

- Clear browser cookies and local storage
- Check JWT_SECRET is set correctly
- Verify token hasn't expired (7 day expiry)

### Build errors

- Run `pnpm install` to ensure all dependencies are installed
- Delete `node_modules` and `.next` folders, then reinstall

## Contributing

This is a demo project. Feel free to fork and customize for your needs.

## License

MIT
