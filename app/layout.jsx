import './globals.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground'; 

export const metadata = {
  title: 'Gateway Solutions, Inc.',
  description: 'Enterprise IT Consulting and Staffing Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Forces a light background and dark text globally */}
      <body className="bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900 min-h-screen flex flex-col">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}