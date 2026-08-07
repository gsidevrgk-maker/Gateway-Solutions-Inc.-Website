import './globals.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';

export const metadata = {
  title: 'Gateway Solutions, Inc.',
  description: 'IT Consulting Services and Software Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-200 antialiased selection:bg-blue-500 selection:text-white">
        <ParticleBackground />
        <Navbar />
        <main className="pt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
