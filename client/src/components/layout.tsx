import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Droplets, Leaf, Menu, X, Waves, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Hjem" },
    { href: "/produkter", label: "Produkter" },
    { href: "/teknologi", label: "Teknologi" },
    { href: "/info", label: "Info & Vedlikehold" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 text-2xl font-bold font-display text-primary cursor-pointer">
              <Droplets className="h-8 w-8 fill-primary/20" />
              <span>BioCleaner</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/produkter">
              <Button size="sm" className="rounded-full px-6 cursor-pointer">
                Se Løsninger
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div
                        className={cn(
                          "text-lg font-medium py-2 border-b border-border/50 cursor-pointer",
                          location === link.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-0">{children}</main>

      <footer className="bg-slate-900 text-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-2xl font-bold font-display text-white">
                <Droplets className="h-6 w-6 fill-white/20" />
                <span>BioCleaner</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ledende leverandør av biologiske minirenseanlegg i Norge.
                Miljøvennlig teknologi for fremtiden.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Navigasjon</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="hover:text-primary transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Produkter</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Minirenseanlegg for hus</li>
                <li>Løsninger for hytter</li>
                <li>Fellesanlegg</li>
                <li>Serviceavtaler</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Miljøfokus</h3>
              <div className="flex gap-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <Waves className="h-6 w-6 text-blue-400" />
                <Droplets className="h-6 w-6 text-cyan-400" />
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Vi bidrar til et renere Norge ved å tilby de mest effektive
                renseløsningene på markedet.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} BioCleaner AS. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
}
