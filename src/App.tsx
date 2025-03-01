import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/layout/layout';
import Dashboard from './pages/dashboard';
import VideoAnalysis from './pages/video-analysis';
import Metrics from './pages/metrics';
import Checklists from './pages/checklists';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="video-analysis" element={<VideoAnalysis />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="checklists" element={<Checklists />} />
            <Route path="resources" element={<ComingSoon title="Educational Resources" />} />
            <Route path="simulations" element={<ComingSoon title="AR Simulations" />} />
            <Route path="innovation" element={<ComingSoon title="Innovation Hub" />} />
            <Route path="articles" element={<ComingSoon title="Article Summaries" />} />
            <Route path="settings" element={<ComingSoon title="Settings" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

// Placeholder for pages that are not yet implemented
const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-6">This feature is coming soon!</p>
      <div className="w-24 h-24 rounded-full bg-turquoise/10 flex items-center justify-center text-turquoise">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    </div>
  );
};

export default App;
