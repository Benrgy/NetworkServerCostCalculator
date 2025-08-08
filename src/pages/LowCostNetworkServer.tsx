import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import ArticleLayout from "@/components/ArticleLayout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import datacenterImg from "@/assets/server-datacenter.jpg";

const LowCostNetworkServer = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/low-cost-network-server-home` : undefined;

  const seo = {
    title: "Low-Cost Network Server for Home (2025)",
    description: "Build a quiet, reliable home server under €300. Parts list, power costs, and secure setup for backups, Plex, and more.",
    canonicalUrl: canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Low-Cost Network Server for Home (2025)",
      description: "Budget-friendly server builds with cost breakdowns and monthly running costs.",
      author: { "@type": "Person", name: "Debar Sem" },
      datePublished: "2025-01-15",
      dateModified: "2025-01-15",
      mainEntityOfPage: canonical,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <SEO {...seo} />
      <ArticleLayout
        title="Low‑Cost Network Server for Home"
        subtitle="Get dependable storage, backups, and media streaming without overspending"
        category="Budget Guide"
        date="2025"
        readingTime="9 min read"
        coverImage={datacenterImg}
        coverAlt="Compact home server setup on a desk with external drives"
      >
        <section>
          <h2>Who this is for</h2>
          <p>Home users who want private backups, photo storage, Plex/Stream, or a small lab—without noise, high power draw, or enterprise price tags.</p>
        </section>

        <Separator />

        <section>
          <h2>Three proven low-cost paths</h2>
          <h3>1) Repurpose an old PC (cheapest to start)</h3>
          <ul>
            <li>Upgrade to 16–32 GB RAM and add a 256 GB SSD for the OS</li>
            <li>Add 2× NAS HDDs (4–8 TB) in a mirror for redundancy</li>
            <li>Optional: 2.5GbE PCIe NIC for faster transfers</li>
          </ul>
          <p><strong>Cost:</strong> €120–€350 + disks • <strong>Idle power:</strong> 25–45 W</p>

          <h3>2) Mini PC (Intel N100/N305) + USB DAS</h3>
          <ul>
            <li>Silent, tiny, 6–10 W idle; runs Docker/containers well</li>
            <li>Attach a 2–4 bay USB 3.2 enclosure for data drives</li>
            <li>Great with Ubuntu Server + OpenMediaVault or TrueNAS SCALE</li>
          </ul>
          <p><strong>Cost:</strong> €200–€400 + disks • <strong>Idle power:</strong> 8–15 W</p>

          <h3>3) Raspberry Pi 5 (learning and backups)</h3>
          <ul>
            <li>Best for lightweight file serving and Home Assistant</li>
            <li>Attach SSDs via USB; avoid microSD for the OS</li>
            <li>Not ideal for multi-user heavy writes</li>
          </ul>
          <p><strong>Cost:</strong> €120–€250 + disks • <strong>Idle power:</strong> 3–7 W</p>
        </section>

        <section>
          <h2>The €300 starter build (recommended)</h2>
          <ul>
            <li>Intel N100 mini PC (8 GB RAM, 256 GB SSD)</li>
            <li>2× 4 TB NAS HDD (mirror) in a 2-bay USB 3.2 enclosure</li>
            <li>2.5GbE USB NIC if your switch supports it</li>
            <li>OS: OpenMediaVault or TrueNAS SCALE</li>
          </ul>
          <p><strong>What you get:</strong> 4 TB usable, quiet, ~10 W idle, easy upgrades later.</p>
        </section>

        <Separator />

        <section>
          <h2>Monthly running cost (Netherlands example)</h2>
          <p>
            Estimate: <em>Monthly € = kW × hours × € per kWh</em>. A 12 W average draw uses ~8.6 kWh/month. At €0.30/kWh, that’s about <strong>€2.60/month</strong>. Even a 30 W system is ~€6.50/month.
          </p>
          <ul>
            <li>Keep idle low with drive spin-down and efficient CPU settings</li>
            <li>Use 80+ Gold PSU and modern chipsets for best efficiency</li>
          </ul>
        </section>

        <section>
          <h2>Secure setup basics</h2>
          <ul>
            <li>Create a non-admin user for day-to-day access</li>
            <li>Enable automatic updates and security patches</li>
            <li>Use strong passwords and 2FA where available</li>
            <li>Expose services via VPN or Tailscale instead of raw port forwarding</li>
            <li>Follow the 3‑2‑1 backup rule: local mirror + external/offsite copy</li>
          </ul>
        </section>

        <section>
          <h2>Software quick start</h2>
          <ul>
            <li><strong>TrueNAS SCALE:</strong> ZFS, snapshots, apps, great UI. Best for reliability.</li>
            <li><strong>OpenMediaVault:</strong> Lightweight, plugins, great for Debian users.</li>
            <li><strong>Unraid:</strong> Easy drive expansion and Docker/VMs (paid license).</li>
            <li><strong>Ubuntu Server:</strong> Flexible DIY with Docker + Portainer.</li>
          </ul>
        </section>

        <Card className="mt-8">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Tip: Buy drives from different batches and run SMART tests. Silence and low idle power save you money every month.</p>
          </CardContent>
        </Card>
      </ArticleLayout>
      <BlogFooter />
    </div>
  );
};

export default LowCostNetworkServer;
