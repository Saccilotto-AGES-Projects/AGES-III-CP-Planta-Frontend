# CP-Planta Frontend

Modern web interface for the CP-Planta production control system, built with Next.js and Tailwind CSS.

![Banner](https://avatars.githubusercontent.com/u/202462667?s=200&v=4)

## Overview

CP-Planta Frontend provides an intuitive and responsive user interface for a production control system designed for a plant processing hygienized products. The application offers a complete view of production workflows, inventory management, and quality control processes.

## Features

- **Dashboard**: Real-time production metrics and KPIs
- **Production Management**: Create and monitor production orders
- **Inventory Control**: Track raw materials and finished products
- **Quality Control**: Record quality inspections and issues
- **User Management**: Role-based access and permissions
- **Mobile Responsive**: Optimized for both desktop and mobile devices

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework with server-side rendering
- **UI Library**: [React](https://reactjs.org/) - Component-based UI library
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management**: React Context API and Hooks
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Axios for API communication
- **Authentication**: JWT-based auth with secure HTTP-only cookies
- **Animation**: AOS (Animate On Scroll) for UI interactions

## Development Setup

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Backend API (CP-Planta Backend) running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Saccilotto-AGES-Projects/AGES-III-CP-Planta-Frontend.git
   cd AGES-III-CP-Planta-Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file:

   ```plaintext
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The application will be available at <http://localhost:3001>.

## Project Structure

```plaintext
src/
├── app/                  # Next.js app directory
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # Dashboard and authenticated routes
│   ├── api/              # API route handlers
│   └── layout.tsx        # Root layout component
├── components/           # Reusable UI components
│   ├── common/           # Shared components (buttons, inputs, etc.)
│   ├── dashboard/        # Dashboard-specific components
│   ├── forms/            # Form components and logic
│   ├── layouts/          # Layout components
│   └── ui/               # UI component library
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and services
├── services/             # API integration services
├── styles/               # Global styles and Tailwind configuration
└── types/                # TypeScript type definitions
```

## Key UI Modules

- **Authentication**: Login and user management screens
- **Dashboard**: Overview with key metrics and notifications
- **Production**: Production order creation and monitoring
- **Inventory**: Stock level tracking and movement history
- **Products**: Product and raw material management
- **Reports**: Production and quality reporting tools

## Docker Support

The project includes Docker configuration for containerization:

```bash
# Build the Docker image
docker build -t cpplanta-frontend .

# Run the container
docker run -p 3001:3001 --env-file .env.local cpplanta-frontend
```

## Testing

```bash
# Run unit tests
npm run test

# Run component tests
npm run test:components

# Run end-to-end tests
npm run test:e2e
```

## Design System

The application follows the Hortti design guidelines with:

- **Color Palette**: Green primary (`#006F48`), Orange accent (`#F56932`), and neutral grays
- **Typography**: Clear hierarchical type system with responsive sizing
- **Components**: Consistent UI components with proper spacing and interaction states
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the AGPL License - see the LICENSE file for details.

## Acknowledgments

- André Sacilotto Santos - Development Lead
- AGES (Agência Experimental de Engenharia de Software) - Project Management
- Hortti - Project Requirements and Design Direction
