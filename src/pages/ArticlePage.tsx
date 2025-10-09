import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import { articles } from "@/data/articles";
import { Calendar, Clock } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Mounja Slim"
    }
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <article className="flex-grow">
          {/* Hero Section */}
          <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-muted">
            <div className="absolute inset-0 z-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="container mx-auto px-4 z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
                {article.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {article.readTime} min de leitura
                </span>
              </div>
            </div>
          </div>

          {/* First CTA */}
          <div className="container mx-auto px-4 max-w-4xl py-12">
            <CTAButton text="Aproveite Esta Oferta Agora" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 max-w-4xl pb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8">{article.content.intro}</p>

              {article.content.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Middle CTA */}
            <div className="my-16">
              <CTAButton text="Clique Aqui e Garanta Já" />
            </div>

            {/* FAQ Section */}
            <FAQ items={article.faq} />

            {/* Final CTA */}
            <div className="mt-16 p-8 gradient-primary rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-4 text-primary-foreground">
                Pronto Para Começar Sua Transformação?
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Não perca mais tempo! Milhares de pessoas já estão transformando seus corpos com Mounja Slim.
              </p>
              <CTAButton text="Garantir Minha Oferta Especial" />
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default ArticlePage;
