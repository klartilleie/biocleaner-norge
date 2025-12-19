import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Zap, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/beautiful_crystal_cl_030f7be6.jpg";
import cabinImage from "@assets/stock_images/scandinavian_wooden__eebe26dd.jpg";
import houseImage from "@assets/stock_images/modern_white_scandin_ee0df7ef.jpg";

const optimaProductImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/editor/optima_2.png";
const comfortProductImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/editor/comfort.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Rent vann i naturen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium border border-green-500/30">
              <Leaf className="w-4 h-4 mr-2" />
              Godkjent for norske forhold
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight text-white">
              Effektiv rensing av <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">kloakk</span> for hus og hytte
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              BioCleaner fra Smart Hjem AS møter alle kommunale krav til rensing. En driftssikker og luktfri løsning for fremtiden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/produkter">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20">
                  Se våre anlegg
                </Button>
              </Link>
              <Link href="/info">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
                  Krav fra kommunen
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 group text-[19px]">
              <img 
                src={optimaProductImage} 
                alt="BioCleaner Optima renseanlegg" 
                className="w-full max-w-[300px] mx-auto transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              />
              <div className="text-center mt-6">
                <div className="text-white font-bold text-xl">BioCleaner Optima</div>
                <div className="text-slate-300 mt-1">Vår mest populære modell</div>
              </div>
            </div>
            
          </motion.div>
        </div>
        
        {/* SINTEF Badge - moved below hero */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="bg-white px-8 py-4 rounded-full shadow-xl border border-slate-100 flex items-center gap-3">
            <ShieldCheck className="text-green-500 w-6 h-6" />
            <span className="font-bold text-slate-900">SINTEF Godkjent</span>
            <span className="text-slate-500">|</span>
            <span className="text-sm text-slate-600">Oppfyller alle krav til rensegrad og sikkerhet</span>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900">Hvorfor velge BioCleaner?</h2>
            <p className="text-slate-500 text-lg">
              Mange kommuner krever nå oppgradering av private avløpsløsninger. BioCleaner er den trygge veien til godkjent utslipp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="w-10 h-10 text-primary" />}
              title="Kommunalt Godkjent"
              description="Vi hjelper deg gjennom søknadsprosessen. Våre anlegg tilfredsstiller alle dagens og fremtidens rensekrav."
            />
            <FeatureCard 
              icon={<Leaf className="w-10 h-10 text-green-500" />}
              title="Biologisk Rensing"
              description="Kontinuerlig renseprosess uten bevegelige deler i selve anlegget. Det rensede vannet kan slippes ut i naturen."
            />
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-amber-500" />}
              title="Økonomisk Drift"
              description="Lavt strømforbruk og lange tømmeintervaller gjør BioCleaner til en lønnsom investering over tid."
            />
          </div>
        </div>
      </section>
      {/* Product Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900">Løsninger for alle behov</h2>
                <p className="text-slate-500 text-lg">
                  Enten du har fått pålegg fra kommunen om utbedring av kloakk, eller bygger nytt, har Smart Hjem AS løsningen.
                </p>
              </div>
              
              <div className="space-y-4">
                <Link href="/produkter">
                  <div className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/50 transition-all flex items-center gap-6">
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                      <img src={houseImage} alt="Moderne bolighus" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">For Hus & Bolig</h3>
                      <p className="text-slate-500 mt-1">Robuste anlegg dimensjonert for helårsbruk.</p>
                    </div>
                    <ArrowRight className="ml-auto w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>

                <Link href="/produkter">
                  <div className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/50 transition-all flex items-center gap-6">
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                      <img src={cabinImage} alt="Hytte i naturen" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">For Hytte & Fritid</h3>
                      <p className="text-slate-500 mt-1">Smarte anlegg tilpasset varierende belastning.</p>
                    </div>
                    <ArrowRight className="ml-auto w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="overflow-hidden">
                      <img src={optimaProductImage} alt="BioCleaner Optima" className="h-40 mx-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1" />
                    </div>
                    <div className="mt-4 font-bold text-slate-900 group-hover:text-primary transition-colors">Optima</div>
                    <div className="text-sm text-slate-500">Standard</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="overflow-hidden">
                      <img src={comfortProductImage} alt="BioCleaner Comfort" className="h-40 mx-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1" />
                    </div>
                    <div className="mt-4 font-bold text-slate-900 group-hover:text-primary transition-colors">Comfort</div>
                    <div className="text-sm text-slate-500">Med fjernstyring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Mottatt varsel fra kommunen?</h2>
          <p className="text-primary-foreground/90 text-xl max-w-2xl mx-auto mb-10">
            Ikke fortvil. Vi i Smart Hjem AS hjelper deg med hele prosessen fra søknad til ferdig installert BioCleaner anlegg.
          </p>
          <Link href="/info">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg text-primary font-bold shadow-xl">
              Les om prosessen
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
      <div className="mb-6 p-4 rounded-xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
