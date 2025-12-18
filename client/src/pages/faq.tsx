import Layout from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Gavel, AlertCircle, Building2 } from "lucide-react";

export default function Info() {
  return (
    <Layout>
       <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
              Krav og Informasjon
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Smart Hjem AS hjelper deg med å navigere i kommunale krav til rensing av kloakk.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* New Municipal Requirements Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 mb-16">
           <div className="flex items-start gap-6">
              <div className="p-4 bg-primary text-white rounded-2xl hidden md:block">
                 <Building2 className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                 <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">Krav fra kommunen?</h2>
                 <p className="text-lg text-slate-700 leading-relaxed">
                   Stadig flere norske kommuner strammer inn kravene til private avløp. Dette gjøres for å hindre forurensning av bekker, elver og grunnvann. 
                 </p>
                 <p className="text-lg text-slate-700 leading-relaxed">
                   Hvis du har mottatt varsel om pålegg, må du installere en godkjent renseløsning. BioCleaner er SINTEF-godkjent og tilfredsstiller alle standardkrav (BOF5, Fosfor, etc.).
                 </p>
                 <div className="pt-2">
                   <h3 className="font-bold text-slate-900 mb-2">Vi bistår med:</h3>
                   <ul className="grid sm:grid-cols-2 gap-2">
                     <li className="flex items-center gap-2 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Prosjektering</li>
                     <li className="flex items-center gap-2 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Søknad til kommunen</li>
                     <li className="flex items-center gap-2 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Installasjon</li>
                     <li className="flex items-center gap-2 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Serviceavtale</li>
                   </ul>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
             <div className="flex items-center gap-4 mb-4">
               <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                 <Gavel className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900">Serviceavtale</h3>
             </div>
             <p className="text-slate-600 mb-4">
               Det er et lovpålagt krav fra norske myndigheter å ha en gyldig serviceavtale så lenge anlegget er i drift. Uten gyldig avtale vil utslippstillatelsen trekkes tilbake. Vi sørger for at ditt anlegg følges opp i henhold til regelverket.
             </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
             <div className="flex items-center gap-4 mb-4">
               <div className="p-3 bg-green-100 rounded-full text-green-600">
                 <FileText className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900">Dokumentasjon</h3>
             </div>
             <p className="text-slate-600 mb-4">
               Vi i Smart Hjem AS sørger for at all nødvendig dokumentasjon er på plass, slik at du slipper papirmølla med kommunen.
             </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-display mb-8">Ofte stilte spørsmål</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hvor ofte må anlegget tømmes?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              BioCleaner produserer svært lite slam sammenlignet med tradisjonelle anlegg. Normalt tømmeintervall er hvert 1-2 år, avhengig av bruk og modell.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Lager det lyd?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Kompressoren som tilfører luft er den eneste delen som lager lyd. Denne er stillegående og plasseres ofte i en kjeller eller garasje, men kan også stå i selve anlegget (avhengig av modell). Lydnivået er omtrent som et moderne kjøleskap.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hva kan jeg kaste i toalettet?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Som med alle avløpssystemer skal man kun kaste toalettpapir og det som kommer naturlig fra kroppen. Q-tips, våtservietter, bind og kjemikalier (som klor og maling) skal IKKE i toalettet da dette kan ødelegge den biologiske prosessen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Bruker det mye strøm?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Nei, BioCleaner er designet for å være energieffektivt. Strømforbruket tilsvarer omtrent en lyspære som står på.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 bg-amber-50 border border-amber-200 p-6 rounded-xl flex gap-4">
           <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
           <div>
             <h4 className="font-bold text-amber-800 mb-1">Viktig om kjemikalier</h4>
             <p className="text-sm text-amber-700">
               Unngå bruk av sterke vaskemidler som klorin og kaustisk soda i store mengder. Velg heller miljøvennlige vaskemidler for å ta vare på de gode bakteriene i anlegget.
             </p>
           </div>
        </div>
      </div>
    </Layout>
  );
}
