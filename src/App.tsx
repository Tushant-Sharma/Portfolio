// import "bootstrap/scss/bootstrap.scss"
import { Suspense, lazy, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ScrollToTop, publicRoutes } from "./components/routers"
import { LoadingSpinner } from "./utils/svgs"
// import "../src/assets/css/bootstrap.min.css"
// import '../src/index.css'
// import { HomeLayout } from "./components/pagelayout"
const HomeLayout = lazy(async () => import("./components/pagelayout").then(model => ({ default: model.HomeLayout })))


function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <>
      <ScrollToTop />
      <Suspense fallback={
        <div style={{ position: "absolute", top: "0", bottom: "0", right: "0", left: "0", backgroundColor: "#0f0f0f", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

          <LoadingSpinner  ></LoadingSpinner>
        </div>

      }>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            {
              publicRoutes.map((route) => (
                <Route key={route.title} path={route.path} element={
                  route.element
                } />
              ))
            }
          </Route>
        </Routes >
      </Suspense>

    </>
  )
}

export default App
