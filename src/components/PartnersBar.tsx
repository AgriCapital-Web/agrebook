const partners = [
  { src: "/images/cepici.webp", alt: "CEPICI", url: "https://www.cepici.gouv.ci/" },
  { src: "/images/ministere-commerce.png", alt: "Ministère du Commerce", url: "https://www.gouv.ci/_actualite-article.php?recordID=14210" },
  { src: "/images/cenam.jpeg", alt: "CENAM", url: "https://www.commerce.gouv.ci/carte-professionnelle-dartisan/" },
  { src: "/images/ministere-numerique.png", alt: "Ministère du Numérique", url: "https://telecom.gouv.ci/new/index.php/accueil" },
  { src: "/images/pme.png", alt: "Ministère des PME", url: "https://pme.gouv.ci/views/cnmci/" },
  { src: "/images/la-poste.jpeg", alt: "La Poste CI", url: "https://www.documents.ci/UserRegister" },
];

const PartnersBar = () => {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Nos partenaires institutionnels
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {partners.map((p) => (
            <a
              key={p.alt}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
