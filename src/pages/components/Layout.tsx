import {Header, Footer, Nav } from "./index"

const Layout = ({children}: any) => {
  return (
    <main >
        <Header />
        <Nav />
        <main>
          
            {children}
        </main>
        <Footer />
    </main>
  )
}

export default Layout