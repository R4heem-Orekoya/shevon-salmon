import { Marquee } from "@/components/ui/marquee";
import { cn, getRandomColor } from "@/lib/utils";

const reviews = [
   {
      name: "Alice",
      username: "@alice",
      body: "This experience has completely changed the way I see things. The attention to detail, the design, and the overall execution are truly inspiring. It's rare to come across something that feels so carefully crafted and thoughtful.",
   },
   {
      name: "Bob",
      username: "@bob",
      body: "Absolutely incredible. I can't recommend it enough! From start to finish, everything about this was amazing. It has set a new standard for quality and creativity. I’m genuinely blown away.",
   },
   {
      name: "Charlie",
      username: "@charlie",
      body: "Every detail is perfect, from the smallest touch to the big picture. This is truly a masterpiece that reflects both skill and passion. I am in awe of how much effort must have gone into making this.",
   },
   {
      name: "Daisy",
      username: "@daisy",
      body: "It's refreshing and unique in a way I haven't experienced before. Every moment spent with this feels rewarding. I absolutely love everything about it, and I can't wait to share it with others.",
   },
   {
      name: "Eve",
      username: "@eve",
      body: "This exceeded my expectations in every possible way. The thoughtfulness that went into every element is apparent, and the result is something truly phenomenal. I’m genuinely impressed by the quality and execution.",
   },
   {
      name: "Frank",
      username: "@frank",
      body: "I can't believe how good this is. It feels like something straight out of the future. Every feature is well thought out and serves a purpose. I highly recommend it to anyone who values excellence.",
   },
   {
      name: "Grace",
      username: "@grace",
      body: "I’m beyond impressed. This is innovation at its best. The creativity and originality here are unmatched. It’s the kind of thing you experience once and can’t stop thinking about for weeks afterward.",
   },
   {
      name: "Hank",
      username: "@hank",
      body: "It’s flawless in every way. Truly a groundbreaking experience that stands out from everything else I’ve seen. The level of care and attention put into this is unparalleled. Amazing work!",
   },
   {
      name: "Ivy",
      username: "@ivy",
      body: "I feel so lucky to have discovered this. It’s like it was made just for me. The design, the functionality, and the overall experience are simply amazing. I can't stop telling everyone about it!",
   },
   {
      name: "Jake",
      username: "@jake",
      body: "Mind-blowing in every sense of the word. I keep coming back to it every day because it’s just that good. It has transformed how I think about what’s possible. Truly remarkable.",
   },
]

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
   return (
      <section className="py-16 max-w-5xl mx-auto">
         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-mono_sans tracking-tight">
            Testimonials
         </h2>
         <p className="text-muted-foreground mt-2 max-w-lg leading-1 font-poppins">
            Your Brand, Shevon's Influence:
            Discover the Impact of Collaborating with
            Shevon and Reaching His Engaged Audience
         </p>

         <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
            <Marquee pauseOnHover className="[--duration:20s]">
               {firstRow.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
               ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
               {secondRow.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
               ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
         </div>
      </section>
   )
}

interface TestimonialCardProps {
   name: string
   username: string
   body: string
}

const TestimonialCard = ({ name, username, body }: TestimonialCardProps) => {
   return (
      <div className="bg-zinc-100/50 p-4 w-64 md:w-96 rounded-md border border-zinc-200/20">
         <div className="flex gap-3 items-center">
            <img 
               style={{
                  backgroundColor: getRandomColor()
               }}
               src={`https://api.dicebear.com/9.x/miniavs/svg?seed=${name}`} alt={name} 
               className={cn("size-12 rounded-full object-cover")}
            />
            
            <div className="flex flex-col">
               <p className="text-sm font-semibold font-mono_sans">{name}</p>
               <p className="text-xs font-light text-muted-foreground italic">{username}</p>
            </div>
         </div>
         
         <div className="mt-4">
            <p className="text-sm font-light">{body}</p>
         </div>
      </div>
   )
}

export default Testimonials