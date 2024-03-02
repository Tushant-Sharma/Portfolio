import "bootstrap/scss/bootstrap.scss"
import './index.css'
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "./components/routers"
import { HomeLayout } from "./components/pagelayout"

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
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
