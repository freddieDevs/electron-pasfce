import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { SigninPage } from "./routes/signin"
import { ToastProvider } from "./providers/toast-provider"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SigninPage />
    },
  ])
  return (
    <>
      <ToastProvider />
      <RouterProvider router={router} />
    </>
  )
}

export default App