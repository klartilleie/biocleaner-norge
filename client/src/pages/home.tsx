import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/abstract_clean_water_technology_background.png";
import product1 from "@assets/generated_images/modern_biological_wastewater_treatment_unit.png";
import product2 from "@assets/generated_images/cabin_in_nature_with_eco_sanitation.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
           {/* Abstract shapes or pattern could go here */}
        </div>
        
        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Leaf className="w-4 h-4 mr-2" />
              Miljøvennlig rensing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-slate-900">
              Rent vann for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">fremtiden</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Markedets mest driftssikre minirenseanlegg. Luktfritt, effektivt og tilpasset norske forhold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/produkter">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20">
                  Se våre produkter
                </Button>
              </Link>
              <Link href="/teknologi">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 bg-white/50 backdrop-blur-sm border-slate-300 hover:bg-white">
                  Hvordan det virker
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-slate-900/5 aspect-[4/3] md:aspect-square">
              <img 
                src={heroImage} 
                alt="Clean water technology" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="text-4xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-slate-600 font-medium">Rensegrad på organisk stoff</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900">Hvorfor velge Biocleaner?</h2>
            <p className="text-slate-500 text-lg">
              Våre anlegg er utviklet for å møte de strengeste kravene til rensing, samtidig som de er enkle å drifte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="w-10 h-10 text-primary" />}
              title="Driftssikkert"
              description="Ingen bevegelige deler i vannet betyr minimalt vedlikehold og lang levetid på anlegget."
            />
            <FeatureCard 
              icon={<Leaf className="w-10 h-10 text-green-500" />}
              title="Miljøvennlig"
              description="Biologisk renseprosess uten bruk av kjemikalier (for de fleste modeller). Helt naturlig."
            />
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-amber-500" />}
              title="Lavt energiforbruk"
              description="Vår smarte teknologi sørger for at strømforbruket holdes på et minimum, som sparer deg penger."
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
                  Enten du trenger renseanlegg til en enebolig, hyttefelt, eller større bygg, har vi en modell som passer.
                </p>
              </div>
              
              <div className="space-y-4">
                <Link href="/produkter">
                  <div className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/50 transition-all flex items-center gap-6">
                    <img src={product1} alt="Hus" className="w-24 h-24 object-cover rounded-xl" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">For Hus & Bolig</h3>
                      <p className="text-slate-500 mt-1">Robuste anlegg for helårsboliger.</p>
                    </div>
                    <ArrowRight className="ml-auto w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>

                <Link href="/produkter">
                  <div className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/50 transition-all flex items-center gap-6">
                    <img src={product2} alt="Hytte" className="w-24 h-24 object-cover rounded-xl" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">For Hytte & Fritid</h3>
                      <p className="text-slate-500 mt-1">Fleksible løsninger for ujevnt bruk.</p>
                    </div>
                    <ArrowRight className="ml-auto w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
              <img src={product1} alt="Product showcase" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">Bestselger</div>
                  <div className="text-2xl font-bold">Biocleaner BC-serien</div>
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Klar for en renere hverdag?</h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
            Ta kontakt med din nærmeste rørlegger eller entreprenør for å høre om Biocleaner passer for deg.
          </p>
          <Link href="/info">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg text-primary font-bold">
              Les mer om installasjon
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
