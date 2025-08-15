import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const AffiliateDisclosure = () => {
  return (
    <Card className="bg-blue-50 border-blue-200 my-6">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-blue-900 font-medium mb-1">Affiliate Disclosure</p>
            <p className="text-blue-800 leading-relaxed">
              NetworkServers participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. 
              When you click on product links and make a purchase, we may receive a small commission at no extra cost to you. This helps support our content creation and server infrastructure.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AffiliateDisclosure;