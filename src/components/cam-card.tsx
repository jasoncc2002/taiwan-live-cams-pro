"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cam } from "@/data/cams"
import Link from "next/link"
import Image from "next/image"

export function CamCard({ cam }: { cam: Cam }) {
  return (
    <Link href={`/cam/${cam.slug}`}>
      <Card className="overflow-hidden bg-zinc-900/50 backdrop-blur-md border-white/5 hover:border-white/20 transition-all duration-300 group shadow-2xl hover:scale-[1.02]">
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
            <Image
              src={`https://img.youtube.com/vi/${cam.video_id}/mqdefault.jpg`}
              alt={cam.location}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
               </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
