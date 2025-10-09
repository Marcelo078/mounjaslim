import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import supplementImage from "@/assets/supplement-capsules.jpg";
import weightLossImage from "@/assets/weight-loss-success.jpg";
import detoxImage from "@/assets/detox-diet.jpg";
import metabolismImage from "@/assets/metabolism.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";
import fastingImage from "@/assets/intermittent-fasting.jpg";
import flatBellyImage from "@/assets/flat-belly.jpg";
import homeWorkoutImage from "@/assets/home-workout.jpg";
import thermogenicImage from "@/assets/thermogenic-foods.jpg";
import emotionalImage from "@/assets/emotional-control.jpg";

const ArticlesList = () => {
  const images = [
    weightLossImage, supplementImage, detoxImage, metabolismImage, greenTeaImage,
    fastingImage, flatBellyImage, homeWorkoutImage, thermogenicImage, emotionalImage
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Todos os Artigos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guias completos sobre emagrecimento, saúde e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} {...article} image={images[index]} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesList;
