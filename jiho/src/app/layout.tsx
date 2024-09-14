import React from 'react';

import '@/styles/global.css';

export const metadata = {
  title: 'Space Tourism',
  description: 'DEMO',
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
