'use client'
import { usePathname } from "next/navigation"
import FloatingChatBox from "../FloatingChatBox/FloatingChatBox"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import { MyProvider } from "../utils/Context"

const Layout = ({ children }) => {

  const pathname = usePathname()

  const hiddenPaths = pathname.startsWith('/admin')

  return (
    <div>
      <MyProvider>
        {
          !hiddenPaths && < Navbar />
        }

        {children}

        {
          !hiddenPaths &&
          <Footer />
        }
        {
          !hiddenPaths &&
          <FloatingChatBox />
        }
      </MyProvider>
    </div>
  )
}

export default Layout