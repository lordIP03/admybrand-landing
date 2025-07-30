import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'Modern SaaS landing page built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
