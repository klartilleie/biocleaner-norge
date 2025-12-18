import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Zap, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/small_wastewater_tre_057a0900.jpg";
import product1 from "@assets/stock_images/underground_septic_t_302a33a2.jpg";
import product2 from "@assets/stock_images/sewage_treatment_sys_ffd8c7ab.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hidden md:block"></div>
        
        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium border border-green-200">
              <Leaf className="w-4 h-4 mr-2" />
              Godkjent for norske forhold
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight text-slate-900">
              Effektiv rensing av <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">kloakk</span> for hus og hytte
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              BioCleaner fra Smart Hjem AS møter alle kommunale krav til rensing. En driftssikker og luktfri løsning for fremtiden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/produkter">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20">
                  Se våre anlegg
                </Button>
              </Link>
              <Link href="/info">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 bg-white/50 backdrop-blur-sm border-slate-300 hover:bg-white">
                  Krav fra kommunen
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-900/5 aspect-[4/3] md:aspect-square">
              <img 
                src={heroImage} 
                alt="BioCleaner renseanlegg ferdig installert i hage" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                 <ShieldCheck className="text-green-500 w-6 h-6" />
                 <span className="font-bold text-slate-900">SINTEF Godkjent</span>
              </div>
              <div className="text-sm text-slate-600 font-medium">Oppfyller alle krav til rensegrad og sikkerhet.</div>
            </div>
          </motion.div>
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
              description="100% naturlig prosess uten skadelige kjemikalier. Det rensede vannet kan slippes rett ut i naturen."
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
                      <img src={product1} alt="Hus" className="w-full h-full object-cover" />
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
                      <img src={product2} alt="Hytte" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">For Hytte & Fritid</h3>
                      <p className="text-slate-500 mt-1">Smarte anlegg med feriemodus for ujevn belastning.</p>
                    </div>
                    <ArrowRight className="ml-auto w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
              <img src={product1} alt="Product showcase" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 text-sm font-medium bg-primary px-3 py-1 rounded-full mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    Krav om rensing?
                  </div>
                  <div className="text-2xl font-bold">Vi hjelper deg med søknaden</div>
                  <p className="text-slate-300 mt-2">Smart Hjem AS har lang erfaring med kommunale prosesser.</p>
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
