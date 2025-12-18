import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import houseImage from "@assets/stock_images/modern_white_scandin_ee0df7ef.jpg";
import cabinImage from "@assets/stock_images/scandinavian_wooden__eebe26dd.jpg";
import communityImage from "@assets/stock_images/modern_white_scandin_177e9abd.jpg";

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 text-sm rounded-full border-0">
              Mest solgt
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              BC-Serien for Bolig
            </h2>
            <p className="text-lg text-slate-600">
              Vår standardmodell for eneboliger. BC-serien er et fullbiologisk renseanlegg som effektivt renser svartvann (toalett) og gråvann. Anlegget graves ned og tar minimalt med plass på tomten.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Tilfredsstiller strengeste utslippskrav</span>
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
                <span>Enkel adkomst for tømming</span>
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
              Mange hyttekommuner innfører nå krav om rensing av utslipp også for fritidsboliger. BioCleaner for hytte er spesielt tilpasset varierende bruk og kuldeperioder.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>"Feriemodus" sparer strøm</span>
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
            </ul>

            <div className="pt-6">
               <Button className="rounded-full px-8" size="lg">Les mer om hytteløsninger</Button>
            </div>
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

        {/* Product Category 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src={communityImage} 
                alt="BioCleaner Fellesanlegg" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1.5 text-sm rounded-full border-0">
              Stor kapasitet
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              Fellesanlegg & Næring
            </h2>
            <p className="text-lg text-slate-600">
              For grender, hyttefelt eller større bygg. Vi leverer skalerbare løsninger som håndterer store mengder avløpsvann kostnadseffektivt.
            </p>
            
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Opp til 200 personekvivalenter (PE)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>Sentralisert drift og vedlikehold</span>
              </li>
            </ul>
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
                   <th className="p-4 text-left font-semibold">Bruk</th>
                   <th className="p-4 text-left font-semibold">Kapasitet (PE)</th>
                   <th className="p-4 text-left font-semibold">Diameter / Høyde</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-4 font-medium text-primary">BC-5</td>
                   <td className="p-4">Enebolig / Hytte</td>
                   <td className="p-4">1-5 personer</td>
                   <td className="p-4">1.5m / 2.2m</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-4 font-medium text-primary">BC-10</td>
                   <td className="p-4">Stor enebolig / Tomannsbolig</td>
                   <td className="p-4">6-10 personer</td>
                   <td className="p-4">1.8m / 2.4m</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="p-4 font-medium text-primary">BC-20</td>
                   <td className="p-4">Firemannsbolig / Små felt</td>
                   <td className="p-4">11-20 personer</td>
                   <td className="p-4">2.2m / 2.6m</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>
    </Layout>
  );
}
