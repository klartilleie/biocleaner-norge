import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, FileCheck, AlertTriangle, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Krav() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    municipality: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Melding sendt!",
          description: data.message,
        });
        setFormData({ name: "", email: "", phone: "", municipality: "", message: "" });
      } else {
        toast({
          title: "Feil",
          description: data.error || "Noe gikk galt. Prøv igjen.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Feil",
        description: "Kunne ikke sende melding. Sjekk internettforbindelsen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-40 pb-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            Krav fra kommunen?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Har du mottatt pålegg om å oppgradere avløpsanlegget? Vi hjelper deg gjennom hele prosessen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-amber-900 mb-2">Har du mottatt pålegg?</h3>
                  <p className="text-amber-800">
                    Stadig flere norske kommuner krever at private avløp skal oppgraderes for å hindre forurensning. 
                    Hvis du har mottatt varsel, må du handle innen fristen.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-display text-slate-900">Hvorfor stilles det krav?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">EU's vanndirektiv</h4>
                    <p className="text-slate-600 text-sm">
                      Vann som slippes ut i norske bekker, vassdrag og fjorder skal være tilnærmet like rent som det ble hentet. Miljømålene skal nås innen 2027-2033.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600 mt-1">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">90% rensekrav</h4>
                    <p className="text-slate-600 text-sm">
                      Alle utslipp skal kunne dokumenteres med minimum 90 prosent rensing. En vanlig septiktank klarer ikke dette - du trenger et godkjent minirenseanlegg.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">BioCleaner er løsningen</h4>
                    <p className="text-slate-600 text-sm">
                      Våre SINTEF-godkjente anlegg renser opptil 99,99% av avløpsvannet og oppfyller alle krav. Vi tar oss av søknad, installasjon og lovpålagt service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Vi hjelper deg med:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Gratis befaring og vurdering</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Prosjektering og dimensjonering</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Søknad til kommunen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Profesjonell installasjon</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Lovpålagt serviceavtale</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Kontakt oss</h2>
                  <p className="text-slate-500 text-sm">Vi svarer innen 24 timer</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Navn *</Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    placeholder="Ditt navn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-post *</Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="input-email"
                    placeholder="din@epost.no"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-testid="input-phone"
                    placeholder="Ditt telefonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="municipality">Kommune</Label>
                  <Input
                    id="municipality"
                    data-testid="input-municipality"
                    placeholder="Hvilken kommune bor du i?"
                    value={formData.municipality}
                    onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Melding *</Label>
                  <Textarea
                    id="message"
                    data-testid="input-message"
                    placeholder="Fortell oss om din situasjon. Har du mottatt pålegg fra kommunen? Når er fristen?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-full py-6 text-lg"
                  data-testid="button-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Send henvendelse"}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  Ved å sende inn skjemaet godtar du at vi kontakter deg angående din henvendelse.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
