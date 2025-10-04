import { NextRequest, NextResponse } from 'next/server';

// SEO configurations duplicated for edge runtime compatibility
const seoConfigs: Record<string, any> = {
  '/': {
    title: 'NetworkServers - Expert Server Solutions & Hardware Guides',
    description: 'Expert insights on network servers, server costs, hardware guides, and infrastructure solutions. Compare enterprise vs cloud servers with detailed analysis and cost optimization.',
    keywords: 'network servers, server costs, enterprise servers, cloud servers, server hardware, network infrastructure, server guides',
  },
  '/network-server-cost': {
    title: 'Network Server Cost Analysis 2024 - Complete Pricing Guide',
    description: 'Comprehensive network server cost analysis including hardware, software, maintenance, and operational expenses. Compare enterprise vs small business server pricing.',
    keywords: 'network server cost, server pricing, enterprise server cost, server hardware cost, server maintenance cost',
  },
  '/best-network-server-small-business': {
    title: 'Best Network Servers for Small Business 2024 - Expert Reviews',
    description: 'Top network server recommendations for small businesses. Compare features, pricing, and performance of the best SMB servers with detailed buying guide.',
    keywords: 'best network server small business, SMB servers, small business server, business server recommendations, enterprise server small business',
  },
  '/best-network-server-under-1000': {
    title: 'Best Network Server Under $1000 - Top Budget Solutions 2025',
    description: 'Discover the best network servers under $1000 for small businesses and home offices. Compare performance, features, and value in our comprehensive budget server guide.',
    keywords: 'best network server under 1000, budget server, affordable network server, cheap business server, network server under $1000',
  },
  '/build-file-server-home-2025': {
    title: 'How to Build a File Server at Home in 2025 - Complete DIY Guide',
    description: 'Step-by-step guide to building your own home file server in 2025. Learn hardware selection, OS installation, configuration, and security best practices for DIY NAS solutions.',
    keywords: 'build file server home 2025, DIY file server, home NAS build, file server tutorial, build home server 2025',
  },
  '/network-server-vs-nas-office': {
    title: 'Network Server vs NAS for Small Office - Complete Comparison 2025',
    description: 'Network Server vs NAS for small office: Compare costs, performance, scalability, and management. Expert guide to choosing the right storage solution for your business.',
    keywords: 'network server vs nas, NAS vs server office, small office storage, NAS or server, business storage comparison',
  },
  '/cheapest-business-file-server': {
    title: 'Cheapest Way to Set Up Business File Server - Budget Guide 2025',
    description: 'Discover the most cost-effective ways to set up a business file server. Compare budget hardware, cloud vs on-premise costs, and money-saving strategies for SMBs.',
    keywords: 'cheapest business file server, budget file server, affordable business storage, cheap server setup, low cost file server',
  },
  '/enterprise-server-brands-2025': {
    title: 'Enterprise Server Brands Comparison 2025 - Dell, HP, Lenovo & More',
    description: 'Compare top enterprise server brands in 2025: Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem, and more. Expert analysis of reliability, performance, and value.',
    keywords: 'enterprise server brands 2025, Dell vs HP servers, server brand comparison, best server manufacturers, enterprise server reviews 2025',
  },
  '/dedicated-server-vs-cloud-server-pros-cons': {
    title: 'Dedicated Server vs Cloud Server - Pros, Cons & Cost Comparison 2024',
    description: 'Complete comparison of dedicated servers vs cloud servers. Analyze pros, cons, costs, performance, and security to make the right choice for your business.',
    keywords: 'dedicated server vs cloud server, dedicated vs cloud, server comparison, cloud vs on-premise, server pros cons',
  },
  '/network-server-setup-guide-beginners': {
    title: 'Network Server Setup Guide for Beginners - Step-by-Step Tutorial 2024',
    description: 'Complete beginner\'s guide to setting up a network server. Step-by-step instructions, hardware requirements, software configuration, and best practices.',
    keywords: 'network server setup guide, server setup tutorial, how to setup server, server installation guide, beginner server setup',
  },
  '/secure-home-network-server': {
    title: 'Secure Home Network Server Setup - Complete Security Guide 2024',
    description: 'Comprehensive guide to securing your home network server. Learn security best practices, firewall configuration, access control, and threat protection.',
    keywords: 'secure home network server, home server security, network security, server firewall, home network protection',
  },
  '/low-cost-network-server-home': {
    title: 'Low Cost Network Server for Home - Budget-Friendly Solutions 2024',
    description: 'Affordable home network server solutions. Compare low-cost options, DIY builds, and budget hardware recommendations for home use.',
    keywords: 'low cost network server, cheap home server, budget server, affordable network server, home server budget',
  },
  '/optimize-network-server-performance': {
    title: 'Optimize Network Server Performance - Complete Tuning Guide 2024',
    description: 'Expert guide to optimizing network server performance. Learn tuning techniques, hardware upgrades, software optimization, and monitoring best practices.',
    keywords: 'optimize server performance, server performance tuning, network server optimization, server speed improvement, server performance monitoring',
  },
  '/network-server-troubleshooting': {
    title: 'Network Server Troubleshooting Guide - Fix Common Issues 2024',
    description: 'Complete network server troubleshooting guide. Diagnose and fix common server problems, connectivity issues, and performance bottlenecks.',
    keywords: 'network server troubleshooting, server problems, server issues, network troubleshooting, server diagnostics',
  },
  '/best-hardware-file-server': {
    title: 'Best Hardware for File Server 2024 - Complete Component Guide',
    description: 'Expert recommendations for file server hardware. Compare CPUs, storage, RAM, and networking components for optimal file server performance.',
    keywords: 'best file server hardware, file server components, server storage, file server CPU, NAS hardware recommendations',
  },
  '/what-is-network-server': {
    title: 'What is a Network Server? Complete Guide for Beginners 2024',
    description: 'Complete beginner\'s guide to network servers. Learn what network servers are, types, functions, benefits, and how they work in modern IT infrastructure.',
    keywords: 'what is network server, network server definition, types of network servers, server basics, network infrastructure basics',
  },
  '/server-maintenance-checklist-smb': {
    title: 'Server Maintenance Checklist for SMB - Complete Guide 2024',
    description: 'Essential server maintenance checklist for small and medium businesses. Ensure optimal server performance with regular maintenance tasks and schedules.',
    keywords: 'server maintenance checklist, SMB server maintenance, server maintenance tasks, business server upkeep, server maintenance schedule',
  },
};

function generateMetaTags(pathname: string): string {
  const config = seoConfigs[pathname] || seoConfigs['/'];
  const url = `https://networkservers.expert${pathname}`;
  
  return `
    <title>${config.title}</title>
    <meta name="description" content="${config.description}" />
    <meta name="keywords" content="${config.keywords}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${url}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NetworkServers" />
    <meta property="og:image" content="https://networkservers.expert/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${config.title}" />
    <meta name="twitter:description" content="${config.description}" />
    <meta name="twitter:image" content="https://networkservers.expert/og-image.jpg" />
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${config.title}",
      "description": "${config.description}",
      "url": "${url}",
      "publisher": {
        "@type": "Organization",
        "name": "NetworkServers",
        "url": "https://networkservers.expert"
      }
    }
    </script>
  `;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only intercept HTML requests
  const acceptHeader = request.headers.get('accept') || '';
  if (!acceptHeader.includes('text/html')) {
    return NextResponse.next();
  }
  
  // Fetch the original response
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/network-server-cost',
    '/best-network-server-small-business',
    '/best-network-server-under-1000',
    '/build-file-server-home-2025',
    '/network-server-vs-nas-office',
    '/cheapest-business-file-server',
    '/enterprise-server-brands-2025',
    '/dedicated-server-vs-cloud-server-pros-cons',
    '/network-server-setup-guide-beginners',
    '/secure-home-network-server',
    '/low-cost-network-server-home',
    '/optimize-network-server-performance',
    '/network-server-troubleshooting',
    '/best-hardware-file-server',
    '/what-is-network-server',
    '/server-maintenance-checklist-smb',
  ],
};
