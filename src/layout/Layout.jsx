import React from "react"
import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="content" >{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
