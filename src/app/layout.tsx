import * as React from 'react';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='bg-[#0a0a0f]'>{children}</body>
    </html>
  );
}
