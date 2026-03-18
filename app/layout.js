import './globals.css';

export const metadata = {
  title: 'VisitVenice — City of Water',
  description: 'Discover the floating city of timeless beauty, woven through canals, art, and centuries of wonder.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}