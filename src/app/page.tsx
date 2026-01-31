"use client"

import { useState } from "react"
import { cams } from "@/data/cams"
import { CamCard } from "@/components/cam-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, Globe, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [filter, setFilter] = useState<string>("All")

  const filteredCams = filter === "All" 
    ? cams 
    : cams.filter(cam => cam.category === filter)

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-white/10 selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8 lg:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs mb-1">
              <MapPin className="w-3 h-3" />
              <span>Taiwan Live Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
              Live Cams Dashboard
            </h1>
            <p className="text-zinc-500 text-sm md:text-base max-w-xl font-medium">
              Explore the beautiful island of Taiwan through real-time HD streams. 
              From the bustling streets of Taipei to the serene peaks of Hehuanshan.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-zinc-900/50 border-white/5 hover:bg-zinc-800">
              <Github className="w-4 h-4 mr-2" />
              Source
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-bold">
              <Globe className="w-4 h-4 mr-2" />
              Official Portal
            </Button>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <Tabs defaultValue="All" className="w-full sm:w-auto" onValueChange={setFilter}>
            <TabsList className="bg-zinc-900/50 border border-white/5 p-1">
              <TabsTrigger value="All" className="px-6 data-[state=active]:bg-zinc-800 data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="City" className="px-6 data-[state=active]:bg-zinc-800 data-[state=active]:text-white">City</TabsTrigger>
              <TabsTrigger value="Nature" className="px-6 data-[state=active]:bg-zinc-800 data-[state=active]:text-white">Nature</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            {filteredCams.length} Streams Active
          </div>
        </div>

        {/* Grid */}
        <ScrollArea className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCams.map((cam) => (
              <CamCard key={cam.video_id} cam={cam} />
            ))}
          </div>
        </ScrollArea>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm pb-10">
          <p>© 2026 Taiwan Live Cams Pro. All streams powered by YouTube.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </footer>
      </div>
    </main>
  )
}
