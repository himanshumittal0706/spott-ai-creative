import Header from "@/components/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { dark } from "@clerk/themes";


export const metadata = {
  title: "Spott",
  description: "Discover and create AI-generated images with Spott",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <ConvexClientProvider>

              <Header />

              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 min-h-[90-h]">{children}</div>


                {/* Footer */}
                <Footer />
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}






