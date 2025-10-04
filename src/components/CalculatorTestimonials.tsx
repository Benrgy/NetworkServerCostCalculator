import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This calculator saved us $3,200 in consulting fees. The comparison mode helped us present three different scenarios to our board with confidence.",
    author: "Michael Torres",
    role: "IT Director",
    company: "Riverside Manufacturing",
    initials: "MT"
  },
  {
    quote: "Finally, a server cost calculator that shows its work. The transparent methodology gave our CFO the confidence to approve our infrastructure upgrade.",
    author: "Jennifer Park",
    role: "CTO",
    company: "Nexus Solutions",
    initials: "JP"
  },
  {
    quote: "We used the calculator to compare 5 different scenarios before making our decision. The export feature made it easy to share with stakeholders. Saved us over $15K annually.",
    author: "David Chen",
    role: "Infrastructure Manager",
    company: "TechFlow Consulting",
    initials: "DC"
  },
  {
    quote: "As an MSP, I use this calculator daily for client proposals. The industry benchmarks help validate our recommendations. It's become an essential tool.",
    author: "Sarah Williams",
    role: "Founder & CEO",
    company: "CloudFirst IT",
    initials: "SW"
  }
];

const CalculatorTestimonials = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Trusted by IT Professionals Worldwide</h2>
        <p className="text-muted-foreground">
          Join 10,000+ decision-makers who rely on our calculator for accurate server cost estimates
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-primary/10 text-primary">
                  <AvatarFallback className="font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CalculatorTestimonials;
