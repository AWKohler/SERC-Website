import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SERC',
  description: 'Club website',
}

// script.setAttribute('data-id', "embedai-Qclufpg5");


export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Navbar/>
              {children}

              {/*<script type="application/javascript" dangerouslySetInnerHTML={{ __html: `function loadScript() { var head = document.getElementsByTagName('head')[0]; var script = document.createElement('script'); script.type = 'text/javascript'; script.src = "https://test-resources.vercel.app/embedchat.js"; script.setAttribute('data-id', "clqcmst850003umgxmzets2ou"); script.id = "embedchat"; head.appendChild(script); } if (!location.href.includes("ai-demo-my-chatbot")) { loadScript(); }`}}>*/}
              {/*</script>*/}


              <script type="application/javascript" dangerouslySetInnerHTML={{ __html: `
              	function loadScript() {
              	  var head = document.getElementsByTagName('head')[0];
              	  var script = document.createElement('script');
              	  script.type = 'text/javascript';
              	  script.src = "https://test-resources.vercel.app/embedchat.js";
              	  script.setAttribute('data-id', "clqcmst850003umgxmzets2ou");
              	  script.id = "embedchat";
              	  head.appendChild(script);
              	}
              	if (!location.href.includes("ai-demo-my-chatbot")) {
              	  loadScript();
              	}
                `}}>
              </script>
          </body>
      </html>
  )
}