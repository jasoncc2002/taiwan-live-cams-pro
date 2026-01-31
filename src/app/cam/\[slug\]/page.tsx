import { cams } from "@/data/cams"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

export default async function CamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cam = cams.find((c) => c.slug === slug)

  if (!cam) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </div>
            <span className="font-semibold tracking-tight text-zinc-400 group-hover:text-white transition-colors text-sm uppercase">Back to Dashboard</span>
          </Link>
          <div className="flex items-center gap-4">
             <Badge variant="outline" className="bg-white/5 border-white/10 text-zinc-400">
               {cam.category}
             </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Video Player Section */}
        <section className="space-y-6">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl relative">
            <iframe
              src={`https://www.youtube.com/embed/${cam.video_id}?autoplay=1&mute=0&rel=0&modestbranding=1&controls=1`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={cam.location}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Live Stream</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                {cam.location}
              </h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                Share
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full" />
                About this Location
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {cam.description}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-emerald-500 rounded-full" />
                Travel Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cam.highlights.map((highlight, i) => (
                  <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-500/10 rounded text-emerald-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className="text-zinc-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-4">
              <h3 className="text-lg font-semibold">More Live Views</h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {cams.filter(c => c.slug !== cam.slug).slice(0, 8).map((otherCam) => (
                    <Link key={otherCam.slug} href={`/cam/${otherCam.slug}`} className="flex gap-3 group">
                      <div className="w-24 aspect-video relative rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                        <img 
                          src={`https://img.youtube.com/vi/${otherCam.video_id}/mqdefault.jpg`} 
                          alt={otherCam.location}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-zinc-200 line-clamp-2 group-hover:text-white transition-colors">
                          {otherCam.location}
                        </p>
                        <Badge variant="secondary" className="text-[9px] h-4 py-0 px-1 bg-zinc-800 text-zinc-500 border-none">
                          {otherCam.category}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
              <Link href="/">
                <Button className="w-full mt-4 bg-white text-black hover:bg-zinc-200">
                  Explore All Cams
                </Button>
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return cams.map((cam) => ({
    slug: cam.slug,
  }))
}
