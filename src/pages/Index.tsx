import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTAButton from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";
import supplementImage from "@/assets/supplement-capsules.jpg";

const Index = () => {
  const recentArticles = [
    {
      slug: "como-perder-peso-rapido-forma-saudavel-2025",
      title: "Como Perder Peso Rápido de Forma Saudável em 2025",
      excerpt: "Descubra os métodos mais eficazes e saudáveis para perder peso rapidamente em 2025, com dicas baseadas em ciência.",
      image: supplementImage,
      date: "15 Jan 2025",
      readTime: "8"
    },
    {
      slug: "melhores-suplementos-para-emagrecer-com-saude",
      title: "Os 7 Melhores Suplementos para Emagrecer com Saúde",
      excerpt: "Descubra quais são os suplementos naturais mais eficazes para potencializar seu emagrecimento de forma saudável e segura.",
      image: supplementImage,
      date: "12 Jan 2025",
      readTime: "10"
    },
    {
      slug: "como-acelerar-metabolismo-naturalmente",
      title: "Como Acelerar o Metabolismo Naturalmente",
      excerpt: "Descubra métodos naturais e cientificamente comprovados para turbinar seu metabolismo e queimar gordura o dia todo.",
      image: supplementImage,
      date: "8 Jan 2025",
      readTime: "11"
    }
  ];

  const benefits = [
    "Acelera o metabolismo naturalmente",
    "Reduz o apetite e controla a compulsão alimentar",
    "Aumenta os níveis de energia",
    "100% natural e sem efeitos colaterais",
    "Resultados visíveis em poucas semanas",
    "Aprovado por milhares de pessoas"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Mulher atlética praticando exercícios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme Seu Corpo com{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Mounja Slim
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              O suplemento natural que acelera seu metabolismo e ajuda você a conquistar o corpo dos seus sonhos de forma saudável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://app.monetizze.com.br/r/AJZ25504136" target="_blank" rel="noopener noreferrer">
                  Garantir Minha Oferta Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/artigos">Ver Artigos Sobre Emagrecimento</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por Que Escolher Mounja Slim?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvido com ingredientes naturais cientificamente comprovados para resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-background rounded-lg shadow-card hover:shadow-elegant transition-smooth"
              >
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <CTAButton text="Clique Aqui e Garanta Já" className="mt-8" />
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={supplementImage}
                alt="Mounja Slim - Suplemento Natural"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">O Que é Mounja Slim?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mounja Slim é um suplemento em cápsulas desenvolvido especialmente para quem busca emagrecer de forma prática e eficaz. Sua fórmula exclusiva combina ingredientes naturais que trabalham em sinergia para:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Acelerar o metabolismo:</strong> Queime mais calorias mesmo em repouso
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Controlar o apetite:</strong> Reduza a compulsão e sinta-se satisfeito por mais tempo
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Aumentar energia:</strong> Mantenha-se ativo e motivado durante todo o dia
                  </div>
                </li>
              </ul>
              <CTAButton text="Aproveite Esta Oferta Agora" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Últimos Artigos</h2>
            <p className="text-xl text-muted-foreground">
              Dicas e informações para potencializar seus resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/artigos">Ver Todos os Artigos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Pronto Para Transformar Seu Corpo?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Não deixe para amanhã a mudança que você pode começar hoje. Milhares de pessoas já estão conquistando resultados incríveis.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 border-0"
            asChild
          >
            <a href="https://app.monetizze.com.br/r/AJZ25504136" target="_blank" rel="noopener noreferrer">
              Garantir Minha Oferta Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
