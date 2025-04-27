"use client"

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), {
   ssr: false,
   loading: () => <p>Loading video...</p>,
})

export default function VideoPlayer({ url }: { url: string }) {
   return (
      <div className="max-w-4xl aspect-video bg-zinc-100 mx-auto mb-16 rounded-lg overflow-hidden">
         <ReactPlayer 
            url={url} 
            width="100%"
            height="100%"
            controls
         />
      </div>
   );
}
