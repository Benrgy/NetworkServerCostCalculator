import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { keywords, content } = await req.json()
    
    // Get Perplexity API key from environment
    const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY')
    
    if (!perplexityApiKey) {
      throw new Error('Perplexity API key not configured')
    }

    // Create comprehensive SEO analysis prompt
    const seoPrompt = `Analyze the SEO potential for these keywords: ${keywords.join(', ')}
    
    Content context: ${content}
    
    Provide:
    1. Current search trends and volume estimates
    2. Top 3 competing pages and their strengths
    3. Content gaps and opportunities
    4. Long-tail keyword suggestions
    5. Featured snippet optimization recommendations
    6. AI search optimization tips (ChatGPT, Perplexity, etc.)
    7. Technical SEO priorities
    
    Focus on network servers, file servers, and enterprise IT infrastructure.`

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are an expert SEO analyst specializing in B2B technology content. Provide actionable, data-driven insights.'
          },
          {
            role: 'user',
            content: seoPrompt
          }
        ],
        temperature: 0.2,
        top_p: 0.9,
        max_tokens: 2000,
        return_images: false,
        return_related_questions: true,
        search_recency_filter: 'month',
        frequency_penalty: 1,
        presence_penalty: 0
      }),
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status}`)
    }

    const data = await response.json()
    
    return new Response(
      JSON.stringify({
        analysis: data.choices[0].message.content,
        relatedQuestions: data.related_questions || [],
        timestamp: new Date().toISOString()
      }),
      {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      },
    )
  }
})