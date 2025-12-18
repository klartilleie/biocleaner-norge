import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import houseImage from "@assets/stock_images/modern_white_scandin_ee0df7ef.jpg";
import cabinImage from "@assets/stock_images/scandinavian_wooden__eebe26dd.jpg";

const optimaProductImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/editor/optima_2.png";
const comfortProductImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/editor/comfort.png";
const exclusiveProductImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/published/exclusive.png";
const basicProductImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/editor/basic.png";
const bioboxImage = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/rasteplasstoalett_1.png";

export default function Products() {
  return (
    <Layout>
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 mb-6">
              Våre Produkter
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              BioCleaner er markedets mest pålitelige minirenseanlegg for kloakk. Smart Hjem AS leverer komplette løsninger godkjent for norske forhold.
            </p>
          </div>
        </div>
      </div>

      {/* Product Models Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-8 text-center">Våre modeller</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              image={basicProductImage}
              title="Optima Standard"
              subtitle="Optimal løsning"
              features={["Kan oppgraderes til COMFORT", "Selvbærende tank", "BC 6-30 PP"]}
            />
            <ProductCard 
              image={comfortProductImage}
              title="Comfort"
              subtitle="Komfort-løsning"
              features={["Kontrollenhet COMFORT Plus", "Fjernstyring", "BC 6-30 PP"]}
              highlight
            />
            <ProductCard 
              image={exclusiveProductImage}
              title="Exclusive"
              subtitle="Eksklusiv-løsning"
              features={["Tertiær-filter", "Valgfri UV-rensing", "BC 6-30 PP"]}
            />
            <ProductCard 
              image={optimaProductImage}
              title="Hytte BC 6"
              subtitle="For fritidsboliger"
              features={["5 PE kapasitet", "Lavere modell tilgjengelig", "Robust mot frost"]}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Product Category 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src={houseImage} 
                alt="BioCleaner for bolig" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 text-sm rounded-full border-0">
              Mest solgt
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              For Bolig
            </h2>
            <p className="text-lg text-slate-600">
              BC-serien er et fullbiologisk renseanlegg som effektivt renser svartvann (toalett) og gråvann. Anlegget graves ned og tar minimalt med plass på tomten. Kontinuerlig renseprosess uten bevegelige deler i selve renseanlegget.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Tilfredsstiller alle EU-krav til rensegrad</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Luktfritt og usynlig i hagen</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>15 års garanti på renseanlegg</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>100 års levetid</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Category 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-1.5 text-sm rounded-full border-0">
              Fritid
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              Hytte & Fritid
            </h2>
            <p className="text-lg text-slate-600">
              Mange hyttekommuner innfører nå krav om rensing av utslipp også for fritidsboliger. BioCleaner for hytte er spesielt tilpasset varierende bruk og kuldeperioder.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>5 PE - minste kapasitet godkjent i Norge</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Kan ettermonteres på eksisterende hytter</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Robust mot frost</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Kan brukes uten veiforbindelse</span>
              </li>
            </ul>
          </div>
           <div className="order-2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src={cabinImage} 
                alt="BioCleaner Hytte" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* BioBox Rasteplasstoalett */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-slate-50 flex items-center justify-center p-8">
              <img 
                src={bioboxImage} 
                alt="BioBox Rasteplasstoalett" 
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 px-4 py-1.5 text-sm rounded-full border-0">
              Nyhet
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              BioBox Rasteplasstoalett
            </h2>
            <p className="text-lg text-slate-600">
              Et komplett, mobilt toalettsystem som renser alt avløpsvann før det går tilbake til naturen. BioBox er modulært og kan tilpasses til rasteplasser, byggebransjen, messer, idrettsarrangementer og konserter.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Mobilt og fleksibelt - kan leies eller kjøpes</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Modulær løsning - tilpass kapasitet etter behov</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>SINTEF-godkjent renseanlegg</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>100% driftsavtale for service og renhold tilgjengelig</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fordeler Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">Fordeler ved BioCleaner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-2">Ingen bevegelige deler</h3>
              <p className="text-slate-300 text-sm">Kontinuerlig renseprosess uten pumper for transport av vann mellom seksjoner.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-2">Miljøvennlig</h3>
              <p className="text-slate-300 text-sm">Problemfri, miljøvennlig prosess og høyeffektiv fjerning av organisk forurensning.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-2">Lave driftskostnader</h3>
              <p className="text-slate-300 text-sm">Lavt strømforbruk og minimalt vedlikehold gir lave årlige kostnader.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-2">Høy kvalitet</h3>
              <p className="text-slate-300 text-sm">8mm tykke vegger (mot normal 5mm). Uresirkulert høykvalitetsplast.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-2">Enkel styreenhet</h3>
              <p className="text-slate-300 text-sm">Uten printkort og elektronikk - robust og pålitelig i alle forhold.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-2">Komplett service</h3>
              <p className="text-slate-300 text-sm">Vedlikeholdspakke inkluderer alt - også bytte av pumpe og kjemi.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold font-display text-slate-900">Tekniske Spesifikasjoner</h2>
             <p className="text-slate-500 mt-2">Detaljert oversikt over alle BioCleaner modeller</p>
           </div>
           
           <div className="overflow-x-auto mb-12">
             <table className="w-full bg-white rounded-2xl shadow-sm border-separate border-spacing-0 overflow-hidden text-sm">
               <thead>
                 <tr className="bg-primary text-white">
                   <th className="p-3 text-left font-semibold">Modell</th>
                   <th className="p-3 text-left font-semibold">PE</th>
                   <th className="p-3 text-left font-semibold">Daglig kapasitet</th>
                   <th className="p-3 text-left font-semibold">Volum</th>
                   <th className="p-3 text-left font-semibold">Diameter</th>
                   <th className="p-3 text-left font-semibold">Høyde</th>
                   <th className="p-3 text-left font-semibold">Vekt</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 4</td>
                   <td className="p-3">1-4</td>
                   <td className="p-3">0,6 m³/dag</td>
                   <td className="p-3">2,3 m³</td>
                   <td className="p-3">1500 mm</td>
                   <td className="p-3">1850 mm</td>
                   <td className="p-3">135 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 6</td>
                   <td className="p-3">1-6</td>
                   <td className="p-3">0,9 m³/dag</td>
                   <td className="p-3">3,0 m³</td>
                   <td className="p-3">1600 mm</td>
                   <td className="p-3">2050 mm</td>
                   <td className="p-3">165 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 8</td>
                   <td className="p-3">1-8</td>
                   <td className="p-3">1,2 m³/dag</td>
                   <td className="p-3">4,0 m³</td>
                   <td className="p-3">1700 mm</td>
                   <td className="p-3">2200 mm</td>
                   <td className="p-3">195 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 10</td>
                   <td className="p-3">1-10</td>
                   <td className="p-3">1,5 m³/dag</td>
                   <td className="p-3">5,0 m³</td>
                   <td className="p-3">1700 mm</td>
                   <td className="p-3">2300 mm</td>
                   <td className="p-3">210 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 15</td>
                   <td className="p-3">1-15</td>
                   <td className="p-3">2,25 m³/dag</td>
                   <td className="p-3">7,5 m³</td>
                   <td className="p-3">1900 mm</td>
                   <td className="p-3">2400 mm</td>
                   <td className="p-3">280 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 20</td>
                   <td className="p-3">1-20</td>
                   <td className="p-3">3,0 m³/dag</td>
                   <td className="p-3">10,0 m³</td>
                   <td className="p-3">2000 mm</td>
                   <td className="p-3">2500 mm</td>
                   <td className="p-3">350 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 25</td>
                   <td className="p-3">1-25</td>
                   <td className="p-3">3,75 m³/dag</td>
                   <td className="p-3">12,5 m³</td>
                   <td className="p-3">2100 mm</td>
                   <td className="p-3">2550 mm</td>
                   <td className="p-3">400 kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-3 font-medium text-primary">BC 30</td>
                   <td className="p-3">1-30</td>
                   <td className="p-3">4,5 m³/dag</td>
                   <td className="p-3">15,0 m³</td>
                   <td className="p-3">2200 mm</td>
                   <td className="p-3">2600 mm</td>
                   <td className="p-3">450 kg</td>
                 </tr>
               </tbody>
             </table>
           </div>

           <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h3 className="font-bold text-lg text-slate-900 mb-4">Forklaring</h3>
             <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
               <div><strong>PE:</strong> Person-ekvivalenter (antall personer anlegget er dimensjonert for)</div>
               <div><strong>Daglig kapasitet:</strong> Maksimal mengde avløpsvann per dag</div>
               <div><strong>Volum:</strong> Total tankvolum</div>
             </div>
           </div>
        </div>
      </section>
    </Layout>
  );
}

function ProductCard({ image, title, subtitle, features, highlight = false }: { 
  image: string, 
  title: string, 
  subtitle: string, 
  features: string[],
  highlight?: boolean 
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-lg group ${highlight ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200'}`}>
      <div className="h-40 flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="max-h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1" 
        />
      </div>
      <h3 className="font-bold text-lg text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mb-4">{subtitle}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
