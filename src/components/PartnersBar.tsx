const partners = [
  { src: "/images/cepici.webp", alt: "CEPICI - Centre de Promotion des Investissements", url: "https://www.cepici.gouv.ci/" },
  { src: "/images/ministere-commerce.png", alt: "Ministère de la Communication et de l'Économie Numérique", url: "https://www.gouv.ci/_actualite-article.php?recordID=14210" },
  { src: "/images/cenam.jpeg", alt: "CNMCI - Chambre Nationale de Métiers de Côte d'Ivoire", url: "https://www.commerce.gouv.ci/carte-professionnelle-dartisan/" },
  { src: "/images/ministere-numerique.png", alt: "Ministère de la Transition Numérique et de la Digitalisation", url: "https://telecom.gouv.ci/new/index.php/accueil" },
  { src: "/images/pme.png", alt: "Ministère des PME", url: "https://pme.gouv.ci/views/cnmci/" },
  { src: "/images/la-poste.jpeg", alt: "La Poste CI", url: "https://www.documents.ci/UserRegister" },
];

const PartnersBar = () => {
  return (
    <section className="py-8 sm:py-10 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8">
          Nos partenaires institutionnels
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10">
          {partners.map((p) => (
            <a
              key={p.alt}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-8 sm:h-10 lg:h-14 w-auto max-w-[80px] sm:max-w-none object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
