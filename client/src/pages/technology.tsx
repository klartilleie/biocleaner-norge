import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Activity, Droplet, Recycle } from "lucide-react";

const diagramImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/published/ill3-b-weba.jpg";

export default function Technology() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-40 pb-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 mb-6">
             Slik fungerer våre anlegg
           </h1>
           <p className="text-xl text-slate-600 leading-relaxed">
             BioCleaner bruker naturens egen metode for å rense vann. Ved hjelp av mikroorganismer brytes avfallsstoffene ned effektivt og luktfritt. Ingen bevegelige deler i selve anlegget!
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold font-display mb-6 text-slate-900">Kontinuerlig Luftrenseprosess</h2>
              <p className="text-slate-600 mb-4">
                Minirenseanlegg BioCleaner benytter en kontinuerlig luftrenseprosess med bruk av D-N (Denitrifisering-nitrifisering).
              </p>
              <p className="text-slate-600 mb-4">
                Anlegget følger alle EU-regler og standarder, og møter alle krav til en moderne økologisk livsstil.
              </p>
              <p className="text-slate-600">
                Det rensede vannet oppfyller alle krav for nivåer av nitrogen, fosfor og restpartikler. Vannet kan trygt slippes ut i grunnvann eller overflatevann.
              </p>
            </div>
            <div className="bg-slate-100 p-4">
              <img src={diagramImage} alt="BioCleaner diagram" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           <ProcessStep 
             number="1"
             title="Mekanisk forbehandling"
             description="Avløpsvann strømmer gjennom kurven der partikler og ikke-nedbrytbare stoffer fanges opp."
             icon={<Droplet className="w-8 h-8 text-blue-500" />}
           />
           <ProcessStep 
             number="2"
             title="Denitrifisering"
             description="Vannet strømmer inn i denitrifiseringssonen hvor biologisk fjerning av nitrogen foregår."
             icon={<Microscope className="w-8 h-8 text-green-500" />}
           />
           <ProcessStep 
             number="3"
             title="Nitrifisering"
             description="Organiske forurensninger fjernes biologisk. Aktivert slam med mikroorganismer renser vannet."
             icon={<Activity className="w-8 h-8 text-teal-500" />}
           />
           <ProcessStep 
             number="4"
             title="Sedimentering & Utslipp"
             description="Vann og slam separeres. Renset vann samles øverst og strømmer ut av utløpskanalen."
             icon={<Recycle className="w-8 h-8 text-cyan-500" />}
           />
        </div>

        {/* Technical Details */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative mb-16">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Tekniske detaljer</h2>
              <div className="space-y-4 text-slate-300">
                <p><strong className="text-white">A.</strong> Inntak for avløpsvann</p>
                <p><strong className="text-white">B.</strong> Grovfilter</p>
                <p><strong className="text-white">C.</strong> Denitrifikasjons-sone</p>
                <p><strong className="text-white">D.</strong> Nitrifikasjons-sone</p>
                <p><strong className="text-white">E.</strong> Luft-diffuser</p>
                <p><strong className="text-white">F.</strong> Sedimenteringssone</p>
                <p><strong className="text-white">G.</strong> Utskiller for overflateurenheter</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Renseeffekt</h3>
              <div className="space-y-4">
                <StatRow label="Organisk stoff (BOF5)" value="95%+" />
                <StatRow label="Fosfor" value=">90%" />
                <StatRow label="Nitrogen" value=">70%" />
                <StatRow label="Suspendert stoff" value="95%+" />
              </div>
            </div>
          </div>
        </div>

        {/* How it works detail */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-8 text-center">Hvordan fungerer et biologisk minirenseanlegg?</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              Et biologisk minirenseanlegg er en liten og kostnadseffektiv måte å behandle avløpsvann på. Prosessen innebærer å behandle vannet med bakterier som fjerner faste stoffer gjennom å bryte dem ned i oppløselige materialer.
            </p>
            <p>
              Det biologiske minirenseanlegget produserer ingen skadelige avfallsmaterialer. Det utnytter naturlige prosesser for å filtrere ut forurensninger fra avløpsvannet ved hjelp av bakterier og alger.
            </p>
            <p>
              Disse mikroorganismene er spesielt effektive for å fjerne forbindelser som nitrater, fosfater, og ekskrementer. Vannet renner ut av seg selv gjennom rørsystemet - her trengs det ikke pumper!
            </p>
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
