import './globals.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import BackgroundVideo from '../components/BackgroundVideo';

export const metadata = {
  title: 'Gateway Solutions, Inc.',
  description: 'Enterprise IT Consulting and Staffing Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Removed bg-slate-50 so the video background shines through */}
      <body className="text-slate-900 selection:bg-blue-200 selection:text-blue-900 min-h-screen flex flex-col relative">
        <BackgroundVideo />
        <ParticleBackground />
        
        <Navbar />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}