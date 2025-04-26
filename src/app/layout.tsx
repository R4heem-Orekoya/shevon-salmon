export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body style={{ margin: 0 }}>
            {children}
         </body>
      </html>
   )
}