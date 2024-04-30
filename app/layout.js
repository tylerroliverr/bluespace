import "./globals.css";
import SmoothScrolling from "@/public/smoothScrolling";

export const metadata = {
  title: "the bluespace",
  description: "blueroom inspiration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
