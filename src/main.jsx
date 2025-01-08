// LIBS IMPORT
import { StrictMode } from 'react'  
import { createRoot} from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom'
import './index.css'

// COMPONENTS IMPORT
import App from './App.jsx'



// ROUTES IMPORT
import { HomePage } from './routes/HomePage.jsx'
import { FormSign } from './routes/FormSign.jsx'
import { ErrorPage } from './routes/NotFound/index.jsx'
import { Home } from './routes/Home.jsx'
import { ConfirmRegister } from './routes/ConfirmRegister/index.jsx'
import { ProjectCfi } from './routes/ProjectCfi/index.jsx'
import { DoTest } from './routes/DoTest.jsx'
import { Events } from './routes/Events.jsx'

// CUSTOM HOOKS IMPORT
import { useUserData } from './hooks/useUserData.jsx'

const id = useUserData()
console.log(id)



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/cfi" />,
      },
      {
        path: '/cfi',
        element: <FormSign />
      },
      {
        path: `/cfi/area-do-candidato`,
        element: <Home />,
        children: [
          {
            path: '/cfi/area-do-candidato',
            element: <Navigate to={`/cfi/area-do-candidato/${id[1]}`} />,
          },
          {
            path: `/cfi/area-do-candidato/:id`,
            element: <HomePage />
          },
          {
            path: `/cfi/area-do-candidato/:id/project-cfi`,
            element: <ProjectCfi />
          },
          {
            path: `/cfi/area-do-candidato/:id/events`,
            element: <Events />
          },
          {
            path: `/cfi/area-do-candidato/:id/test`,
            element: <DoTest />
          },
        ]
      },
      {
        path: `cfi/confirm-register`,
        element: <Home />
      },
      {
        path: `cfi/confirmed-register`,
        element: <ConfirmRegister />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
