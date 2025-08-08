import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  category?: string;
  readingTime?: string;
  coverImage?: string;
  coverAlt?: string;
  children: ReactNode;
}

const ArticleLayout = ({
  title,
  subtitle,
  author = "Debar Sem",
  date,
  category,
  readingTime,
  coverImage,
  coverAlt,
  children,
}: ArticleLayoutProps) => {
  return (
    <main>
      <section className="bg-background">
        <div className="container mx-auto px-6 py-10">
          <header className="max-w-3xl mx-auto text-center mb-8">
            {category && (
              <Badge className="mb-4 bg-accent text-primary" aria-label={category}>{category}</Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>
            )}
            {(author || date || readingTime) && (
              <p className="mt-4 text-sm text-muted-foreground">
                {author} {date && <>• {date}</>} {readingTime && <>• {readingTime}</>}
              </p>
            )}
          </header>

          {coverImage && (
            <div className="max-w-5xl mx-auto mb-10">
              <Card className={cn("overflow-hidden border-border/60 bg-card/60 backdrop-blur")}> 
                <img 
                  src={coverImage} 
                  alt={coverAlt || title} 
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-64 md:h-96 object-cover" 
                />
              </Card>
            </div>
          )}

          <article className="max-w-3xl mx-auto">
            <Card className="border-border/60 bg-card/80 backdrop-blur">
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none p-6 md:p-10">
                {children}
              </CardContent>
            </Card>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ArticleLayout;
