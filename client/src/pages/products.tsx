import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import product1 from "@assets/generated_images/modern_biological_wastewater_treatment_unit.png";
import product2 from "@assets/generated_images/cabin_in_nature_with_eco_sanitation.png";

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
              Biocleaner leverer markedets mest pålitelige minirenseanlegg. Enten du trenger løsning for en enkelt hytte eller et helt boligfelt, har vi teknologien som sikrer rent vann.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Product Category 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src={product1} 
                alt="Biocleaner BC-Serie" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 text-sm rounded-full border-0">
              Bestselger
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              BC-Serien for Bolig
            </h2>
            <p className="text-lg text-slate-600">
              Vår toppmodell for eneboliger og flermannsboliger. BC-serien kombinerer avansert biologi med enkel drift. Anlegget er nedgravd og nesten usynlig i hagen.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Kapasitet: 5 - 50 personekvivalenter (PE)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Luktfritt og stillegående</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Lavt strømforbruk</span>
              </li>
            </ul>

            <div className="pt-6">
               <Button className="rounded-full px-8" size="lg">Last ned produktark</Button>
            </div>
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
              Spesialtilpassede løsninger for hytter med varierende belastning. Vår "feriemodus" sørger for at biologien overlever selv i perioder uten bruk.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Tåler ujevn belastning</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Kan installeres over bakken ved behov</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Enkel vinterkonservering</span>
              </li>
            </ul>

            <div className="pt-6">
               <Button className="rounded-full px-8" size="lg">Les mer om hytteløsninger</Button>
            </div>
          </div>
           <div className="order-2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src={product2} 
                alt="Hytte og Fritid" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Comparison Table Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold font-display text-slate-900">Tekniske Spesifikasjoner</h2>
             <p className="text-slate-500 mt-2">En rask oversikt over våre mest populære modeller</p>
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full bg-white rounded-2xl shadow-sm border-separate border-spacing-0 overflow-hidden">
               <thead>
                 <tr className="bg-primary text-white">
                   <th className="p-4 text-left font-semibold">Modell</th>
                   <th className="p-4 text-left font-semibold">Kapasitet (PE)</th>
                   <th className="p-4 text-left font-semibold">Diameter</th>
                   <th className="p-4 text-left font-semibold">Høyde</th>
                   <th className="p-4 text-left font-semibold">Vekt</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-4 font-medium text-primary">BC-5</td>
                   <td className="p-4">1 husholdning (5 PE)</td>
                   <td className="p-4">1.5m</td>
                   <td className="p-4">2.2m</td>
                   <td className="p-4">150kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-4 font-medium text-primary">BC-10</td>
                   <td className="p-4">2 husholdninger (10 PE)</td>
                   <td className="p-4">1.8m</td>
                   <td className="p-4">2.4m</td>
                   <td className="p-4">220kg</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-4 font-medium text-primary">BC-20</td>
                   <td className="p-4">4 husholdninger (20 PE)</td>
                   <td className="p-4">2.2m</td>
                   <td className="p-4">2.6m</td>
                   <td className="p-4">350kg</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>
    </Layout>
  );
}
