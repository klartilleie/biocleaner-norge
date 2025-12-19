import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Leaf, Menu, Waves, Droplets } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/Lars_Logo-01_1766086176301.jpg";

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
    { href: "/info", label: "Fakta & Spørsmål" },
    { href: "/media", label: "I Media" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 bg-white shadow-sm",
          isScrolled ? "py-2" : "py-3"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logoImage} alt="Smart Hjem AS" className="h-24 md:h-28 w-auto" />
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
                <div className="mb-6">
                  <img src={logoImage} alt="Smart Hjem AS" className="h-16 w-auto" />
                </div>
                <nav className="flex flex-col gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 inline-block">
                <img src={logoImage} alt="Smart Hjem AS" className="h-14 w-auto" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Smart Hjem AS leverer BioCleaner minirenseanlegg.
                Markedets beste løsning for rensing av kloakk i spredt bebyggelse.
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

            <div className="text-[23px] ml-[0px] mr-[0px]">
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
            © {new Date().getFullYear()} Smart Hjem AS. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
}
