import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NewProject from './pages/newProject'
import Projects from './pages/Projects'
import Dashboard from './pages/dashboard'
import ProjectDetails from './pages/ProjectDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Toaster } from './components/ui/toaster'

const queryClient = new QueryClient();
const App =()=>(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          {/* <Route path="/project/:id/deployment/:deploymentId" element={<DeploymentDetails />} /> */}
          <Route path="/new" element={<NewProject />} />
          {/* <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
