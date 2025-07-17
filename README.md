# Little Lemon App

A modern, responsive web application for the Little Lemon Mediterranean restaurant in Chicago. Built with React and Vite, the app allows users to explore the restaurant, view weekly specials, read testimonials, and make table reservations online.

## Features
- **Home Page**: Welcome section, restaurant story, and chef highlights.
- **Specials**: Showcases weekly featured meals with images and descriptions.
- **Testimonials**: Customer reviews with ratings.
- **Table Reservation**: Book a table online with date, time, guests, and occasion selection. Form validation and feedback included.
- **Navigation**: Header and footer navigation with placeholder pages for upcoming features (About, Menu, Order Online, Login).
- **Responsive Design**: Mobile-friendly layout and modern UI.
- **Work in Progress Pages**: Clearly marked placeholder pages for features under development.

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Front-End-Developer-Capstone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
To start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Running Tests
```bash
npm run test
```
Automated tests are provided for the booking/reservation feature using Vitest and React Testing Library.

## Running with Docker

You can run the app using Docker or Docker Compose for both development and production environments.

### Development (Hot Reload)
This mode uses Vite's dev server with hot reloading. Your local files are mounted into the container.

```bash
docker compose up --build
```
- The app will be available at [http://localhost:3000](http://localhost:3000).
- Changes to your source files will automatically reload the app.

### Production Build
To build and run the production-optimized app:

1. Build the Docker image:
   ```bash
   docker build -t little-lemon-app .
   ```
2. Run the production container:
   ```bash
   docker run -p 3000:3000 little-lemon-app
   ```
- The app will be served at [http://localhost:3000](http://localhost:3000).

## Project Structure
- `src/components/` — Reusable UI components, navigation, and layout
- `src/components/pages/home/` — Home, About, Specials, Testimonials
- `src/components/pages/reserve/` — Booking and reservation confirmation
- `src/components/PlaceHolder.jsx` — Placeholder for upcoming features

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
