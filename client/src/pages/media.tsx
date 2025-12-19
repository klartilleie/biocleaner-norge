import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, ExternalLink, Leaf, FileCheck } from "lucide-react";

const articleImage1 = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/16230369-1024x681_orig.jpg";
const articleImage2 = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/16230548_orig.jpg";
const articleImage3 = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/16230505_orig.jpg";
const articleImage4 = "https://www.biocleaner.no/uploads/1/2/8/5/128515706/16230545_orig.jpg";

export default function Media() {
  return (
    <Layout>
      <div className="bg-slate-50 pt-40 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            I Media
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Les om BioCleaner og miljøvennlig avløpsrensing i media.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8">
            <p className="text-lg text-slate-700 font-medium mb-0">
              «Innen 1. januar 2021 skal alle utslipp kunne dokumenteres med minimum 90 prosent rensing. Du klarer ikke å nå 90 prosent rensing selv med en ny septiktank. Norge har en overgangsordning som gjør at både offentlige og private etter hvert vil få pålegg om å bytte til et minirenseanlegg som kan rense minimum 90 prosent.»
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">100% rensing er mulig</h3>
              <p className="text-slate-600">
                Våre biologiske minirenseanlegg kan rense 99,99 prosent av avløpet. Setter vi på en kumme med lecakuler når vi 100 prosent rensing, slik at det er rent det som kommer ut.
              </p>
              <p className="text-slate-600 mt-4">
                <strong>Slammet som blir igjen er så rent at du kan kompostere det i egen hage.</strong>
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={articleImage2} alt="BioCleaner innside" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <img src={articleImage3} alt="BioCleaner renseprosess" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Biologisk rensing uten kjemikalier</h3>
              <p className="text-slate-600">
                Ingen kjemikalier benyttes - kun oksygen. Dette gjør at avløpet renses helt naturlig.
              </p>
              <p className="text-slate-600 mt-4">
                Vi pumper inn luft i anlegget. Luften sørger for å holde liv i bakteriene, slik at de bryter ned slammet som kommer inn i tanken. Vannet filtreres videre og når vannet er renset oppfyller det alle krav for nivåer av nitrogen, fosfor og restpartikler.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Serviceavtale </h3>
              <p className="text-slate-600">
                Det følger en pliktig serviceavtale til hvert anlegg. Da har vi det hele og fulle driftsansvaret 365 dager i året.
              </p>
              <p className="text-slate-600 mt-4">
                Størrelsen på boligen er ingen hindring. Vi kan også installere BioCleaner på hytter som ligger utenfor bebygd område. Eneste krav er at tanken må stå frostfritt.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={articleImage4} alt="BioCleaner detaljer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* EU Directive Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-2xl hidden md:block">
              <FileCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">EUs vanndirektiv</h2>
              <p className="text-slate-300 text-lg mb-4">
                EU's vanndirektiv av 2010 krever at vann som slippes ut i norske bekker, vassdrag og fjorder, skal være tilnærmet like rent som det ble hentet. Rensingen må dokumenteres.
              </p>
              <p className="text-slate-300">
                Målsetningen er at alle anlegg i den enkelte kommune skal oppfylle forurensingsforskriftens rensekrav, slik at miljømålene etter vannforskriften kan nås innen 2027, og senest innen 2033.
              </p>
              <a 
                href="http://www.vannportalen.no/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-primary-foreground bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
              >
                Les mer på vannportalen.no
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="p-3 bg-green-100 rounded-full text-green-600 w-fit mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Miljøvennlig</h3>
              <p className="text-slate-600 text-sm">
                100% biologisk rensing uten kjemikalier. Slammet kan komposteres i egen hage.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 w-fit mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Dokumentert</h3>
              <p className="text-slate-600 text-sm">
                Oppfyller alle EU-krav og norske forskrifter for avløpsrensing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="p-3 bg-purple-100 rounded-full text-purple-600 w-fit mb-4">
                <Newspaper className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Anerkjent</h3>
              <p className="text-slate-600 text-sm">
                Omtalt i media som fremtidens løsning for private avløp.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
