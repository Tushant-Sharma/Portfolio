// import "bootstrap/scss/bootstrap.scss"
import "../src/assets/css/bootstrap.min.css"
import './index.css'
import { Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ScrollToTop, publicRoutes } from "./components/routers"
import { HomeLayout } from "./components/pagelayout"

function App() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            {
              publicRoutes.map((route) => (
                <Route key={route.title} path={route.path} element={route.element} />
              ))
            }
          </Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default App
