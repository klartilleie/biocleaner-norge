import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Activity, Droplet, Recycle } from "lucide-react";
import techImage from "@assets/generated_images/biological_cleaning_process_visualization.png";

export default function Technology() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-20 pb-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 mb-6">
             Hvordan det virker
           </h1>
           <p className="text-xl text-slate-600 leading-relaxed">
             Biocleaner bruker naturens egen metode for å rense vann. Ved hjelp av mikroorganismer brytes avfallsstoffene ned effektivt og luktfritt.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-24 aspect-[21/9]">
           <img src={techImage} alt="Biological process" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center p-8 md:p-16">
             <div className="max-w-lg text-white">
               <h2 className="text-3xl font-bold mb-4">SBR-Teknologi</h2>
               <p className="text-lg opacity-90">
                 Sequencing Batch Reactor (SBR) er kjernen i våre anlegg. Prosessen skjer i sykluser som sikrer optimal rensing uavhengig av vannmengde.
               </p>
             </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           <ProcessStep 
             number="1"
             title="Fylling"
             description="Spillvannet ledes inn i anlegget. Grove partikler skilles ut i et eget kammer."
             icon={<Droplet className="w-8 h-8 text-blue-500" />}
           />
           <ProcessStep 
             number="2"
             title="Biologisk Rensing"
             description="Luft tilsettes for å aktivere mikroorganismene som spiser opp forurensningen."
             icon={<Microscope className="w-8 h-8 text-green-500" />}
           />
           <ProcessStep 
             number="3"
             title="Sedimentering"
             description="Vannet får roe seg, og slammet synker til bunns mens det rene vannet legger seg øverst."
             icon={<Activity className="w-8 h-8 text-teal-500" />}
           />
           <ProcessStep 
             number="4"
             title="Utslipp"
             description="Det rensede vannet pumpes ut til naturen, rent og klart."
             icon={<Recycle className="w-8 h-8 text-cyan-500" />}
           />
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Ingen kjemikalier nødvendig</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                For de fleste utslippskrav klarer Biocleaner seg helt uten kjemisk felling. Dette betyr mindre vedlikehold for deg, og ingen håndtering av kjemikalier.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Naturen vet best hvordan man renser vann. Vi har bare optimalisert forholdene for at naturen skal kunne gjøre jobben sin raskt og effektivt.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Renseeffekt</h3>
              <div className="space-y-4">
                <StatRow label="Organisk stoff (BOF5)" value="98%" />
                <StatRow label="Fosfor" value=">90%" />
                <StatRow label="Nitrogen" value=">70%" />
                <StatRow label="Suspendert stoff" value="95%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProcessStep({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
        {number}
      </div>
      <div className="mb-4 mt-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500">{description}</p>
    </div>
  );
}

function StatRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
      <span className="text-slate-300">{label}</span>
      <span className="text-2xl font-bold text-primary-foreground">{value}</span>
    </div>
  );
}
