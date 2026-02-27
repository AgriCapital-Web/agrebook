import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Search,
  Phone,
  FileWarning,
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle,
  User,
  Mail,
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  Hash,
  MessageSquare,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type ServiceView = "home" | "demande" | "verification" | "contact" | "perte";

const ServicesPage = () => {
  const [currentView, setCurrentView] = useState<ServiceView>("home");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => (currentView === "home" ? navigate("/") : setCurrentView("home"))}
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              {currentView === "home" ? "Retour au site" : "Retour aux services"}
            </button>
          </div>
          <div className="text-center">
            <a href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src="/images/agrebook-logo.jpg"
                alt="AGREBOOK CI"
                className="h-12 w-12 rounded-lg object-cover"
              />
            </a>
            <h1 className="font-display text-3xl lg:text-4xl font-bold">SERVICE AGREBOOK CI</h1>
            <p className="text-primary-foreground/80 mt-2">Un citoyen, une carte</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          {currentView === "home" && <HomeView key="home" onNavigate={setCurrentView} />}
          {currentView === "demande" && <DemandeForm key="demande" />}
          {currentView === "verification" && <VerificationForm key="verification" />}
          {currentView === "contact" && <ContactForm key="contact" />}
          {currentView === "perte" && <PerteForm key="perte" />}
        </AnimatePresence>
      </main>
    </div>
  );
};

/* ==================== HOME VIEW ==================== */
const HomeView = ({ onNavigate }: { onNavigate: (v: ServiceView) => void }) => {
  const services = [
    {
      id: "demande" as ServiceView,
      icon: CreditCard,
      title: "Demander une carte de travail",
      description: "Faites votre demande de carte de travail professionnelle",
      color: "bg-primary",
    },
    {
      id: "verification" as ServiceView,
      icon: Search,
      title: "Vérifier l'état de la demande",
      description: "Suivez l'avancement de votre demande en cours",
      color: "bg-secondary",
    },
    {
      id: "contact" as ServiceView,
      icon: Phone,
      title: "Contactez-nous",
      description: "Posez vos questions ou demandez des renseignements",
      color: "bg-primary",
    },
    {
      id: "perte" as ServiceView,
      icon: FileWarning,
      title: "Demande de déclaration de Perte",
      description: "Signalez la perte de votre carte de travail",
      color: "bg-accent",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Services de Carte de travail
        </h2>
        <p className="text-muted-foreground">
          Bienvenue dans notre entreprise de services de carte de travail.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <motion.button
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onNavigate(service.id)}
            className={`${service.color} text-primary-foreground rounded-xl p-6 text-left hover:opacity-90 transition-opacity group`}
          >
            <service.icon size={28} className="mb-3" />
            <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
            <p className="text-sm opacity-80">{service.description}</p>
            <ArrowRight
              size={18}
              className="mt-3 group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

/* ==================== DEMANDE FORM ==================== */
const DemandeForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    prenoms: "",
    dateNaissance: "",
    lieuNaissance: "",
    nationalite: "Ivoirienne",
    sexe: "",
    telephone: "",
    email: "",
    adresse: "",
    profession: "",
    secteurActivite: "",
    nomEntreprise: "",
    poste: "",
    numeroCNI: "",
    photo: null as File | null,
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    setSubmitted(true);
    toast({
      title: "Demande envoyée !",
      description: "Votre demande de carte de travail a été soumise avec succès. Vous recevrez un numéro de suivi par SMS.",
    });
  };

  if (submitted) return <SuccessMessage message="Votre demande de carte de travail a été enregistrée. Vous recevrez un numéro de suivi par SMS sous 24h." />;

  return (
    <FormWrapper title="Demande de Carte de Travail" icon={CreditCard}>
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`h-2 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          </div>
        ))}
        <span className="text-xs text-muted-foreground ml-2">Étape {step}/3</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <User size={18} /> Informations personnelles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nom *</label>
                <Input required value={form.nom} onChange={(e) => update("nom", e.target.value)} placeholder="Votre nom" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Prénoms *</label>
                <Input required value={form.prenoms} onChange={(e) => update("prenoms", e.target.value)} placeholder="Vos prénoms" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Date de naissance *</label>
                <Input required type="date" value={form.dateNaissance} onChange={(e) => update("dateNaissance", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Lieu de naissance *</label>
                <Input required value={form.lieuNaissance} onChange={(e) => update("lieuNaissance", e.target.value)} placeholder="Lieu de naissance" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nationalité</label>
                <Input value={form.nationalite} onChange={(e) => update("nationalite", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Sexe *</label>
                <select
                  required
                  value={form.sexe}
                  onChange={(e) => update("sexe", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Sélectionner</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">N° CNI</label>
              <Input value={form.numeroCNI} onChange={(e) => update("numeroCNI", e.target.value)} placeholder="Numéro de carte nationale d'identité" />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Mail size={18} /> Coordonnées
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Téléphone *</label>
                <Input required type="tel" value={form.telephone} onChange={(e) => update("telephone", e.target.value)} placeholder="+225 07 XX XX XX XX" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="votre@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Adresse / Commune *</label>
              <Input required value={form.adresse} onChange={(e) => update("adresse", e.target.value)} placeholder="Abidjan, Cocody..." />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Briefcase size={18} /> Informations professionnelles
            </h3>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Profession / Métier *</label>
              <Input required value={form.profession} onChange={(e) => update("profession", e.target.value)} placeholder="Ex: Commerçant, Artisan, Coiffeur..." />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Secteur d'activité *</label>
              <select
                required
                value={form.secteurActivite}
                onChange={(e) => update("secteurActivite", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Sélectionner</option>
                <option value="commerce">Commerce</option>
                <option value="artisanat">Artisanat</option>
                <option value="services">Services</option>
                <option value="agriculture">Agriculture</option>
                <option value="industrie">Industrie</option>
                <option value="transport">Transport</option>
                <option value="restauration">Restauration</option>
                <option value="batiment">Bâtiment</option>
                <option value="technologie">Technologie</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nom de l'entreprise</label>
                <Input value={form.nomEntreprise} onChange={(e) => update("nomEntreprise", e.target.value)} placeholder="Nom de votre entreprise" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Poste occupé</label>
                <Input value={form.poste} onChange={(e) => update("poste", e.target.value)} placeholder="Gérant, Employé, etc." />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Photo d'identité</label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setForm((prev) => ({ ...prev, photo: e.target.files?.[0] || null }))}
                className="file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground"
              />
            </div>
          </motion.div>
        )}

        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
              <ArrowLeft size={16} className="mr-2" /> Précédent
            </Button>
          )}
          <Button type="submit" className="flex-1">
            {step < 3 ? (
              <>Suivant <ArrowRight size={16} className="ml-2" /></>
            ) : (
              <>Envoyer la demande <Send size={16} className="ml-2" /></>
            )}
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};

/* ==================== VERIFICATION FORM ==================== */
const VerificationForm = () => {
  const { toast } = useToast();
  const [reference, setReference] = useState("");
  const [telephone, setTelephone] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    toast({
      title: "Recherche effectuée",
      description: "Aucune demande trouvée avec ces informations. Veuillez vérifier vos données ou nous contacter.",
    });
  };

  return (
    <FormWrapper title="Vérifier l'état de la demande" icon={Search}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">
            <Hash size={14} className="inline mr-1" />
            Numéro de référence *
          </label>
          <Input
            required
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Ex: AGR-2026-XXXX"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">
            <Phone size={14} className="inline mr-1" />
            Numéro de téléphone *
          </label>
          <Input
            required
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="+225 07 XX XX XX XX"
          />
        </div>
        <Button type="submit" className="w-full">
          <Search size={16} className="mr-2" /> Vérifier
        </Button>
      </form>

      {searched && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-lg bg-muted border border-border text-center"
        >
          <FileText size={32} className="mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Aucune demande trouvée avec la référence <strong className="text-foreground">{reference}</strong>.
            <br />
            Veuillez vérifier vos informations ou{" "}
            <button onClick={() => {}} className="text-primary underline">
              nous contacter
            </button>.
          </p>
        </motion.div>
      )}
    </FormWrapper>
  );
};

/* ==================== CONTACT FORM ==================== */
const ContactForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
  };

  if (submitted) return <SuccessMessage message="Votre message a bien été envoyé. Notre équipe vous répondra dans les plus brefs délais." />;

  return (
    <FormWrapper title="Contactez-nous" icon={Phone}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Nom complet *</label>
            <Input required placeholder="Votre nom et prénoms" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Téléphone *</label>
            <Input required type="tel" placeholder="+225 07 XX XX XX XX" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
          <Input type="email" placeholder="votre@email.com" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Objet *</label>
          <select
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Sélectionner</option>
            <option value="info">Demande d'information</option>
            <option value="reclamation">Réclamation</option>
            <option value="suivi">Suivi de demande</option>
            <option value="partenariat">Partenariat</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
          <textarea
            required
            rows={4}
            placeholder="Écrivez votre message ici..."
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
        </div>
        <Button type="submit" className="w-full">
          <Send size={16} className="mr-2" /> Envoyer le message
        </Button>
      </form>

      <div className="mt-6 p-4 rounded-lg bg-muted border border-border">
        <h4 className="font-semibold text-foreground text-sm mb-2">Autres moyens de contact</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><Phone size={14} /> 01.41.14.41.50 / 07.13.24.03.69</p>
          <p className="flex items-center gap-2"><Mail size={14} /> agrebook@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin size={14} /> Abidjan, Côte d'Ivoire</p>
        </div>
      </div>
    </FormWrapper>
  );
};

/* ==================== PERTE FORM ==================== */
const PerteForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Déclaration envoyée !", description: "Votre déclaration de perte a été enregistrée." });
  };

  if (submitted) return <SuccessMessage message="Votre déclaration de perte a été enregistrée. Nous vous contacterons pour les modalités de remplacement." />;

  return (
    <FormWrapper title="Déclaration de Perte" icon={FileWarning}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Nom *</label>
            <Input required placeholder="Votre nom" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Prénoms *</label>
            <Input required placeholder="Vos prénoms" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Téléphone *</label>
            <Input required type="tel" placeholder="+225 07 XX XX XX XX" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">N° de référence de la carte</label>
            <Input placeholder="Si connu" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Circonstances de la perte *</label>
          <textarea
            required
            rows={3}
            placeholder="Décrivez les circonstances de la perte..."
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Date approximative de la perte</label>
          <Input type="date" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Pièce justificative (optionnel)</label>
          <Input
            type="file"
            accept="image/*,.pdf"
            className="file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground"
          />
        </div>
        <Button type="submit" className="w-full">
          <Send size={16} className="mr-2" /> Déclarer la perte
        </Button>
      </form>
    </FormWrapper>
  );
};

/* ==================== SHARED COMPONENTS ==================== */
const FormWrapper = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-2xl mx-auto"
  >
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon size={22} className="text-primary" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  </motion.div>
);

const SuccessMessage = ({ message }: { message: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="max-w-md mx-auto text-center py-10"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <CheckCircle size={32} className="text-primary" />
    </div>
    <h3 className="font-display text-xl font-bold text-foreground mb-2">Succès !</h3>
    <p className="text-muted-foreground mb-6">{message}</p>
    <Button variant="outline" onClick={() => window.location.reload()}>
      Retour aux services
    </Button>
  </motion.div>
);

export default ServicesPage;
