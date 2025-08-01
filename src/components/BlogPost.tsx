import { Card, CardContent } from "@/components/ui/card";

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category?: string;
}

const BlogPost = ({ image, title, excerpt, author, date, category }: BlogPostProps) => {
  return (
    <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <CardContent className="md:w-2/3 p-6">
          <div className="mb-4">
            {category && (
              <span className="text-sm text-accent font-medium">{category}</span>
            )}
            <h2 className="text-xl font-semibold text-foreground mb-3 hover:text-primary cursor-pointer transition-colors">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {excerpt}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">
                {author.split(' ').map(name => name[0]).join('')}
              </span>
            </div>
            <div>
              <p className="font-medium text-foreground">{author}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogPost;