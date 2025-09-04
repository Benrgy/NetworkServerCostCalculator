export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'NetworkServers - Expert Server Solutions & Hardware Guides',
    description: 'Expert insights on network servers, server costs, hardware guides, and infrastructure solutions. Compare enterprise vs cloud servers with detailed analysis and cost optimization.',
    keywords: 'network servers, server costs, enterprise servers, cloud servers, server hardware, network infrastructure, server guides',
    ogTitle: 'NetworkServers - Expert Server Solutions & Hardware Guides',
    ogDescription: 'Expert insights on network servers, server costs, hardware guides, and infrastructure solutions.',
    twitterTitle: 'NetworkServers - Expert Server Solutions',
    twitterDescription: 'Expert insights on network servers, server costs, and hardware guides.'
  },
  '/network-server-cost': {
    title: 'Network Server Cost Analysis 2024 - Complete Pricing Guide',
    description: 'Comprehensive network server cost analysis including hardware, software, maintenance, and operational expenses. Compare enterprise vs small business server pricing.',
    keywords: 'network server cost, server pricing, enterprise server cost, server hardware cost, server maintenance cost',
    ogTitle: 'Network Server Cost Analysis 2024 - Complete Pricing Guide',
    ogDescription: 'Comprehensive network server cost analysis including hardware, software, maintenance, and operational expenses.',
    twitterTitle: 'Network Server Cost Analysis 2024',
    twitterDescription: 'Complete server pricing guide with hardware and operational cost breakdowns.'
  },
  '/best-network-server-small-business': {
    title: 'Best Network Servers for Small Business 2024 - Expert Reviews',
    description: 'Top network server recommendations for small businesses. Compare features, pricing, and performance of the best SMB servers with detailed buying guide.',
    keywords: 'best network server small business, SMB servers, small business server, business server recommendations, enterprise server small business',
    ogTitle: 'Best Network Servers for Small Business 2024 - Expert Reviews',
    ogDescription: 'Top network server recommendations for small businesses with detailed comparisons and buying guide.',
    twitterTitle: 'Best Network Servers for Small Business 2024',
    twitterDescription: 'Expert reviews and recommendations for small business servers.'
  },
  '/dedicated-server-vs-cloud-server-pros-cons': {
    title: 'Dedicated Server vs Cloud Server - Pros, Cons & Cost Comparison 2024',
    description: 'Complete comparison of dedicated servers vs cloud servers. Analyze pros, cons, costs, performance, and security to make the right choice for your business.',
    keywords: 'dedicated server vs cloud server, dedicated vs cloud, server comparison, cloud vs on-premise, server pros cons',
    ogTitle: 'Dedicated Server vs Cloud Server - Complete Comparison 2024',
    ogDescription: 'Complete comparison of dedicated servers vs cloud servers including pros, cons, costs, and performance analysis.',
    twitterTitle: 'Dedicated vs Cloud Servers - Complete Guide',
    twitterDescription: 'Pros, cons, and cost comparison to help you choose the right server solution.'
  },
  '/network-server-setup-guide-beginners': {
    title: 'Network Server Setup Guide for Beginners - Step-by-Step Tutorial 2024',
    description: 'Complete beginner\'s guide to setting up a network server. Step-by-step instructions, hardware requirements, software configuration, and best practices.',
    keywords: 'network server setup guide, server setup tutorial, how to setup server, server installation guide, beginner server setup',
    ogTitle: 'Network Server Setup Guide for Beginners - Step-by-Step Tutorial',
    ogDescription: 'Complete beginner\'s guide to setting up a network server with step-by-step instructions and best practices.',
    twitterTitle: 'Network Server Setup Guide for Beginners',
    twitterDescription: 'Step-by-step tutorial for setting up your first network server.'
  },
  '/secure-home-network-server': {
    title: 'Secure Home Network Server Setup - Complete Security Guide 2024',
    description: 'Comprehensive guide to securing your home network server. Learn security best practices, firewall configuration, access control, and threat protection.',
    keywords: 'secure home network server, home server security, network security, server firewall, home network protection',
    ogTitle: 'Secure Home Network Server Setup - Complete Security Guide',
    ogDescription: 'Comprehensive guide to securing your home network server with best practices and threat protection.',
    twitterTitle: 'Secure Home Network Server Setup',
    twitterDescription: 'Complete security guide for protecting your home network server.'
  },
  '/low-cost-network-server-home': {
    title: 'Low Cost Network Server for Home - Budget-Friendly Solutions 2024',
    description: 'Affordable home network server solutions. Compare low-cost options, DIY builds, and budget hardware recommendations for home use.',
    keywords: 'low cost network server, cheap home server, budget server, affordable network server, home server budget',
    ogTitle: 'Low Cost Network Server for Home - Budget-Friendly Solutions',
    ogDescription: 'Affordable home network server solutions with budget hardware recommendations and cost-effective builds.',
    twitterTitle: 'Low Cost Network Server for Home',
    twitterDescription: 'Budget-friendly home server solutions and affordable hardware recommendations.'
  },
  '/optimize-network-server-performance': {
    title: 'Optimize Network Server Performance - Complete Tuning Guide 2024',
    description: 'Expert guide to optimizing network server performance. Learn tuning techniques, hardware upgrades, software optimization, and monitoring best practices.',
    keywords: 'optimize server performance, server performance tuning, network server optimization, server speed improvement, server performance monitoring',
    ogTitle: 'Optimize Network Server Performance - Complete Tuning Guide',
    ogDescription: 'Expert guide to optimizing network server performance with tuning techniques and monitoring best practices.',
    twitterTitle: 'Optimize Network Server Performance',
    twitterDescription: 'Complete guide to server performance tuning and optimization techniques.'
  },
  '/network-server-troubleshooting': {
    title: 'Network Server Troubleshooting Guide - Fix Common Issues 2024',
    description: 'Complete network server troubleshooting guide. Diagnose and fix common server problems, connectivity issues, and performance bottlenecks.',
    keywords: 'network server troubleshooting, server problems, server issues, network troubleshooting, server diagnostics',
    ogTitle: 'Network Server Troubleshooting Guide - Fix Common Issues',
    ogDescription: 'Complete troubleshooting guide to diagnose and fix common network server problems and issues.',
    twitterTitle: 'Network Server Troubleshooting Guide',
    twitterDescription: 'Fix common server problems with expert troubleshooting techniques.'
  },
  '/best-hardware-file-server': {
    title: 'Best Hardware for File Server 2024 - Complete Component Guide',
    description: 'Expert recommendations for file server hardware. Compare CPUs, storage, RAM, and networking components for optimal file server performance.',
    keywords: 'best file server hardware, file server components, server storage, file server CPU, NAS hardware recommendations',
    ogTitle: 'Best Hardware for File Server 2024 - Complete Component Guide',
    ogDescription: 'Expert recommendations for file server hardware including CPUs, storage, RAM, and networking components.',
    twitterTitle: 'Best Hardware for File Server 2024',
    twitterDescription: 'Complete guide to choosing the right hardware components for your file server.'
  },
  '/what-is-network-server': {
    title: 'What is a Network Server? Complete Guide for Beginners 2024',
    description: 'Complete beginner\'s guide to network servers. Learn what network servers are, types, functions, benefits, and how they work in modern IT infrastructure.',
    keywords: 'what is network server, network server definition, types of network servers, server basics, network infrastructure basics',
    ogTitle: 'What is a Network Server? Complete Guide for Beginners',
    ogDescription: 'Complete beginner\'s guide explaining what network servers are, their types, functions, and benefits.',
    twitterTitle: 'What is a Network Server?',
    twitterDescription: 'Complete beginner\'s guide to understanding network servers and their functions.'
  },
  '/server-maintenance-checklist-smb': {
    title: 'Server Maintenance Checklist for SMB - Complete Guide 2024',
    description: 'Essential server maintenance checklist for small and medium businesses. Ensure optimal server performance with regular maintenance tasks and schedules.',
    keywords: 'server maintenance checklist, SMB server maintenance, server maintenance tasks, business server upkeep, server maintenance schedule',
    ogTitle: 'Server Maintenance Checklist for SMB - Complete Guide',
    ogDescription: 'Essential server maintenance checklist for small and medium businesses with regular maintenance tasks.',
    twitterTitle: 'Server Maintenance Checklist for SMB',
    twitterDescription: 'Complete maintenance guide to keep your business servers running optimally.'
  },
  '/about': {
    title: 'About NetworkServers - Expert Server Solutions & Analysis',
    description: 'Learn about NetworkServers team of experts providing comprehensive server analysis, hardware reviews, and infrastructure guidance for businesses.',
    keywords: 'about networkservers, server experts, network infrastructure consulting, server analysis team',
    ogTitle: 'About NetworkServers - Expert Server Solutions & Analysis',
    ogDescription: 'Learn about our team of server experts providing comprehensive analysis and infrastructure guidance.',
    twitterTitle: 'About NetworkServers',
    twitterDescription: 'Expert team providing server solutions and infrastructure guidance for businesses.'
  },
  '/contact': {
    title: 'Contact NetworkServers - Get Expert Server Consultation',
    description: 'Contact our server experts for personalized consultation, technical support, and infrastructure planning. Get professional advice for your server needs.',
    keywords: 'contact networkservers, server consultation, technical support, server experts contact',
    ogTitle: 'Contact NetworkServers - Get Expert Server Consultation',
    ogDescription: 'Contact our server experts for personalized consultation and technical support.',
    twitterTitle: 'Contact NetworkServers',
    twitterDescription: 'Get expert server consultation and technical support from our team.'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];