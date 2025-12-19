import Layout from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Gavel, AlertCircle, Building2, Droplets, Zap, Shield, Leaf, Clock, Wrench } from "lucide-react";

export default function Info() {
  return (
    <Layout>
      <div className="bg-slate-50 pt-40 pb-12">
       <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
             Fakta og Spørsmål
           </h1>
           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             Alt du trenger å vite om BioCleaner minirenseanlegg og kommunale krav.
           </p>
       </div>
     </div>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Facts Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-8 text-center">Viktige fakta om BioCleaner</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 w-fit mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Biologisk rensing</h3>
              <p className="text-slate-600 text-sm">
                BioCleaner bruker naturens egen metode med bakterier og mikroorganismer for å rense avløpsvann - helt uten skadelige kjemikalier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-green-100 rounded-full text-green-600 w-fit mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">100% luktfritt</h3>
              <p className="text-slate-600 text-sm">
                Anlegget produserer ingen lukt og er usynlig i hagen etter installasjon. Perfekt for bolig og hytte.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-purple-100 rounded-full text-purple-600 w-fit mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Ingen bevegelige deler</h3>
              <p className="text-slate-600 text-sm">
                Ingen pumper eller mekaniske deler i selve renseanlegget. Kun én luftpumpe på utsiden sørger for oksygentilførsel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-amber-100 rounded-full text-amber-600 w-fit mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">100 års levetid</h3>
              <p className="text-slate-600 text-sm">
                Tanken er laget av 8mm tykk, uresirkulert høykvalitetsplast med forventet levetid på over 100 år. 15 års garanti.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-teal-100 rounded-full text-teal-600 w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Lavt strømforbruk</h3>
              <p className="text-slate-600 text-sm">
                Strømforbruket tilsvarer omtrent en lyspære som står på kontinuerlig. Lavere driftskostnader enn tradisjonelle løsninger.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-rose-100 rounded-full text-rose-600 w-fit mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Minimalt vedlikehold</h3>
              <p className="text-slate-600 text-sm">
                Alt vedlikehold inkluderes i den lovpålagte serviceavtalen - inkludert bytte av pumpe og kjemi ved behov.
              </p>
            </div>
          </div>
        </section>

        {/* Municipal Requirements Section */}
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
                 <p className="text-lg text-slate-700 leading-relaxed">Et renseanlegg for bolig med 5 PE (personer) starter fra ca. kr 115 000,- inkl. mva og innregulert.  Styreskap, søknad, graving og montering kommer i tillegg.</p>
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
               <h3 className="text-xl font-bold text-slate-900">Lovpålagt serviceavtale</h3>
             </div>
             <p className="text-slate-600 mb-4">
               Det er et lovpålagt krav fra norske myndigheter å ha en gyldig serviceavtale så lenge anlegget er i drift. Uten gyldig avtale vil utslippstillatelsen trekkes tilbake. Alle sider ved drift er inkludert i vedlikeholdsavtalen.
             </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
             <div className="flex items-center gap-4 mb-4">
               <div className="p-3 bg-green-100 rounded-full text-green-600">
                 <FileText className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900">EU-godkjent</h3>
             </div>
             <p className="text-slate-600 mb-4">
               BioCleaner følger alle EU-regler og standarder. Det rensede vannet oppfyller alle krav for nivåer av nitrogen, fosfor og restpartikler, og kan trygt slippes ut i grunnvann eller overflatevann.
             </p>
          </div>
        </div>

        {/* Product Types Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-8">Våre modellvarianter</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg text-primary mb-2">Basic</h3>
              <p className="text-sm text-slate-500 mb-3">Økonomi-løsning</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Rimeligste variant</li>
                <li>• Kan ikke oppgraderes</li>
                <li>• Tanktyper: BC4PP, BC 6PP, BC4 PP N, BC 6 PP</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg text-primary mb-2">Optima</h3>
              <p className="text-sm text-slate-500 mb-3">Optimal løsning</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Kan oppgraderes til COMFORT</li>
                <li>• Selvbærende tank</li>
                <li>• Tanktyper: BC 4 PP til BC 30 PP</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-primary shadow-md ring-2 ring-primary/20">
              <h3 className="font-bold text-lg text-primary mb-2">Comfort</h3>
              <p className="text-sm text-slate-500 mb-3">Komfort-løsning (anbefalt)</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Kontrollenhet COMFORT Plus</li>
                <li>• Fjernstyring inkludert</li>
                <li>• Tanktyper: BC 4 PP til BC 30 PP</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg text-primary mb-2">Exclusive</h3>
              <p className="text-sm text-slate-500 mb-3">Eksklusiv-løsning</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Tertiært filter</li>
                <li>• Valgfri intern UV-desinfeksjon</li>
                <li>• Tanktyper: BC 4PP til BC 30 PP</li>
              </ul>
            </div>
          </div>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">Spørsmål og svar</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hva er et biologisk minirenseanlegg?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Et biologisk minirenseanlegg er en liten og kostnadseffektiv måte å behandle avløpsvann på, uten å bruke mekaniske prosesser som filtre eller kjemiske behandlinger. Prosessen innebærer å behandle vannet med bakterier som fjerner faste stoffer ved å bryte dem ned. Vannet renner ut av seg selv gjennom rørsystemet - ingen pumper nødvendig!
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hvorfor er minirenseanlegg relevant for meg?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              I områder med brukerinteresser eller fare for overgjødsling (eutrofiering) er biologiske minirenseanlegg vanligvis det rimeligste alternativet der det er vanskelig å sette opp et infiltrasjonsanlegg. Kommunen kan pålegge deg å installere godkjent renseløsning hvis du ikke er tilkoblet offentlig avløp.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hvordan fungerer renseprosessen?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Anlegget bruker en kontinuerlig luftrenseprosess (D-N: Denitrifisering-nitrifisering). Avløpsvannet strømmer først gjennom en kurv som fanger partikler, deretter gjennom soner for biologisk fjerning av nitrogen og organiske stoffer. Mikroorganismer bryter ned forurensningene mens luft tilføres fra bunnen. Til slutt separeres vannet fra slammet i sedimenteringssonen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hvor ofte må anlegget tømmes?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              BioCleaner produserer svært lite slam sammenlignet med tradisjonelle anlegg. Normalt tømmeintervall er hvert 1-2 år, avhengig av bruk og modell. Stoffer som ikke er biologisk nedbrytbare (gummi, plast, tekstiler) fanges opp i kurven og må fjernes med jevne mellomrom.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Lager anlegget lyd?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Kompressoren (luftpumpen) som tilfører luft er den eneste delen som lager lyd. Denne er stillegående og plasseres ofte i en kjeller, garasje, eller i et eget styreskap. Lydnivået er omtrent som et moderne kjøleskap.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hva kan jeg kaste i toalettet?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Som med alle avløpssystemer skal man kun kaste toalettpapir og det som kommer naturlig fra kroppen. Q-tips, våtservietter, bind og kjemikalier (som klor og maling) skal IKKE i toalettet da dette kan ødelegge den biologiske prosessen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hva koster et renseanlegg?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Prisen varierer avhengig av størrelse og modell. Et renseanlegg for bolig med 5 PE (personer) starter fra ca. kr 115 000,- inkl. mva og innregulert. Tilvalg som styreskap, søknad til kommunen, graving og montering kan leveres mot tillegg.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Bruker det mye strøm?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Nei, BioCleaner er designet for å være energieffektivt. Strømforbruket tilsvarer omtrent en lyspære som står på kontinuerlig. Luftpumpen går i korte intervaller og leverer luft til renseanlegget.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Kan jeg bruke anlegget på hytta?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Ja! BioCleaner for hytte er spesielt tilpasset varierende bruk og kuldeperioder. BC 6 er den minste modellen og er godkjent for fritidsboliger. Anlegget tåler perioder uten bruk og starter opp igjen automatisk når du kommer tilbake.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border border-slate-200 rounded-xl px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-primary">
              Hva inkluderes i serviceavtalen?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Serviceavtalen er lovpålagt og inkluderer alt ved drift av anlegget: regelmessig kontroll, tilsetting av kjemi (aluminiumsulfat for fosforspalting), bytte av slitedeler, og rapportering til kommunen. Vi sørger for at anlegget alltid fungerer optimalt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 bg-amber-50 border border-amber-200 p-6 rounded-xl flex gap-4">
           <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
           <div>
             <h4 className="font-bold text-amber-800 mb-1">Viktig om kjemikalier</h4>
             <p className="text-sm text-amber-700">
               Unngå bruk av sterke vaskemidler som klorin og kaustisk soda i store mengder. Velg heller miljøvennlige vaskemidler for å ta vare på de gode bakteriene i anlegget. Kjemikalier kan ødelegge den biologiske prosessen!
             </p>
           </div>
        </div>
      </div>
    </Layout>
  );
}
