"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cam } from "@/data/cams"

export function CamCard({ cam }: { cam: Cam }) {
  return (
    <Card className="overflow-hidden bg-zinc-900/50 backdrop-blur-md border-white/5 hover:border-white/10 transition-all duration-300 group shadow-2xl">
      <CardHeader className="p-4 space-y-3">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">Live</span>
          </div>
        </div>
        <CardTitle className="text-sm font-semibold leading-tight text-zinc-200 line-clamp-2 group-hover:text-white transition-colors">
          {cam.location}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-video relative overflow-hidden bg-zinc-950">
          <iframe
            src={`https://www.youtube.com/embed/${cam.video_id}?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={cam.location}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardContent>
    </Card>
  )
}
