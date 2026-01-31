import { cams } from "@/data/cams"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Share2, Info, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const cam = cams.find((c) => 
    c.slug === slug || 
    c.slug === decodedSlug || 
    c.slug.toLowerCase() === decodedSlug.toLowerCase()
  )
  
  if (!cam) return { title: "Not Found | Taiwan Live Cams Pro" }

  return {
    title: `${cam.location} | Taiwan Live Cams Pro`,
    description: cam.description,
  }
}

export async function generateStaticParams() {
  return cams.map((cam) => ({
    slug: cam.slug,
  }))
}

// Ensure the page is treated as static. Dynamic params are disabled for static export.
export const dynamicParams = false

export default async function CamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Robust lookup
  const decodedSlug = decodeURIComponent(slug)
  const cam = cams.find((c) => 
    c.slug === slug || 
    c.slug === decodedSlug || 
    c.slug.toLowerCase() === decodedSlug.toLowerCase()
  )

  if (!cam) {
    return (
      <div className="min-h-screen bg-[#09090b] text-zinc-100 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-4xl font-black tracking-tighter">Stream Not Found</h1>
          <p className="text-zinc-500">We couldn't find a live stream with the ID: <span className="text-blue-400 font-mono">"{slug}"</span></p>
          <div className="pt-4">
            <Link href="/">
              <Button className="bg-white text-black hover:bg-zinc-200 font-bold px-8">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-white/10 selection:text-white pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8 lg:px-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-zinc-500 hover:text-white hover:bg-white/5 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Video */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5">
              <iframe
                src={`https://www.youtube.com/embed/${cam.video_id}?autoplay=1&mute=0`}
                title={cam.location}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={`text-[10px] uppercase tracking-wider font-bold border-none ${
                        cam.category === "City" 
                          ? "bg-blue-500/10 text-blue-400" 
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {cam.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 ml-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">Live Now</span>
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                    {cam.location}
                  </h1>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full bg-zinc-900 border-white/10 hover:bg-zinc-800">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Info */}
          <div className="space-y-6">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Info className="w-4 h-4 text-blue-400" />
                  About this Location
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {cam.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Highlights
                </div>
                <div className="flex flex-wrap gap-2">
                  {cam.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="bg-white/5 hover:bg-white/10 text-zinc-300 border-none text-[11px] py-1">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold text-sm mb-2">Taiwan Travel Tip</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                The best time to view mountain streams like Hehuanshan is during sunrise or early morning when the "sea of clouds" is most likely to appear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
