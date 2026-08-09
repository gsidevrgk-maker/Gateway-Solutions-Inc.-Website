import './globals.css';
import Navbar from '../components/Navbar';
// We will update the ParticleBackground to a light theme in the next step
import ParticleBackground from '../components/ParticleBackground'; 

export const metadata = {
  title: 'Gateway Solutions, Inc.',
  description: 'Enterprise IT Consulting and Staffing Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Changed background to a clean slate-50 and text to dark slate-900 */}
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