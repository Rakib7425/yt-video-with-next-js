
export const metadata = {
  title: "Youtube Video Downloader",
  description: "This is an youtube video downloader app using Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      {/* Main Body */}
      <body className="">{children}</body>
    </html>
  );
}
