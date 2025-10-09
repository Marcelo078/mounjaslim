import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const ArticleCard = ({ slug, title, excerpt, image, date, readTime }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.02]">
      <Link to={`/artigo/${slug}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>
      <CardContent className="p-6">
        <Link to={`/artigo/${slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-smooth">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {date}
          </span>
          <span>{readTime} min de leitura</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/artigo/${slug}`}>Ler Artigo Completo</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
