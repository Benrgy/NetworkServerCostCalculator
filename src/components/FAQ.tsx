import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const faqs = [
  {
    q: "What is the difference between a client and a server in networking?",
    a: "A client requests services (like a web page or file), while a server provides those services. Clients initiate connections; servers listen and respond, often to many clients simultaneously."
  },
  {
    q: "How do I choose the best network server for my business?",
    a: "Match server specs to your workload. For <50 users: 6–8 core CPU, 16–32GB RAM, SSD storage, gigabit NIC. Prioritize reliability (ECC RAM, RAID) and support agreements."
  },
  {
    q: "What are the typical costs of running a small office network server?",
    a: "Hardware €800–€2,500, electricity €10–€35/mo, internet €30–€80/mo, maintenance €0–€100/mo. Cloud alternatives range €20–€200+/mo depending on usage."
  },
  {
    q: "How can I secure my home network server from hackers?",
    a: "Use VPN for remote access, strong unique passwords, enable firewalls, auto-updates, offsite backups, and intrusion prevention (e.g., fail2ban)."
  },
  {
    q: "What hardware do I need for building a reliable file server?",
    a: "Quad-core CPU, 16–32GB ECC RAM, SSD for OS, HDD/SSD array with RAID (preferably RAID 1/5/6 or ZFS), gigabit/10GbE NIC, quality PSU."
  },
  {
    q: "Cloud server vs dedicated network server: which is better for startups?",
    a: "Cloud wins for flexibility and low upfront cost; dedicated wins for predictable heavy workloads and lower long-term TCO at scale. Many start cloud, move hybrid later."
  },
  {
    q: "How do I troubleshoot slow network server performance?",
    a: "Measure first: CPU, RAM, disk I/O, network. Fix the highest bottleneck: upgrade to SSDs, add RAM, optimize DB queries, enable caching, tune network stack."
  },
  {
    q: "What’s the minimum internet speed required for hosting a server?",
    a: "Prioritize upload: 20–50 Mbps upload handles basic sites/file access for small teams. For media or many users, 100+ Mbps symmetric or fiber recommended."
  },
  {
    q: "Do I need RAID for a network file server at home?",
    a: "Recommended. RAID improves availability but is not a backup. Use RAID 1/5/6 or ZFS and keep offsite backups for true data protection."
  },
  {
    q: "Can I use an old PC as a network server?",
    a: "Yes for light tasks. Ensure SSD, sufficient RAM, reliable PSU, and add a NIC. For 24/7 reliability, purpose-built server hardware is safer."
  }
];

const FAQ = () => {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Expert answers to common network server questions
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium text-foreground">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Structured data for FAQ */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })}
          </script>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
