import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import Layout from '@/components/vercel/Layout';
// import Header from '@/components/vercel/Header';
// import DeploymentRow from '@/components/vercel/DeploymentRow';
import { ExternalLink, GitBranch, Globe, Settings, RotateCcw } from 'lucide-react';

const tabs = ['Deployments', 'Analytics', 'Logs', 'Settings'];

const mockDeployments = [
  {
    id: 'dep-1',
    status: 'ready' as const,
    commit: 'a1b2c3d',
    commitMessage: 'feat: add user authentication',
    branch: 'main',
    time: '2h ago',
    duration: '45s',
    url: 'portfolio-site.vercel.app',
  },
  {
    id: 'dep-2',
    status: 'ready' as const,
    commit: 'e4f5g6h',
    commitMessage: 'fix: resolve navbar responsiveness issue',
    branch: 'main',
    time: '5h ago',
    duration: '38s',
    url: 'portfolio-site.vercel.app',
  },
  {
    id: 'dep-3',
    status: 'error' as const,
    commit: 'i7j8k9l',
    commitMessage: 'chore: update dependencies',
    branch: 'develop',
    time: '1d ago',
    duration: '1m 12s',
  },
  {
    id: 'dep-4',
    status: 'ready' as const,
    commit: 'm0n1o2p',
    commitMessage: 'feat: implement dark mode toggle',
    branch: 'main',
    time: '2d ago',
    duration: '52s',
    url: 'portfolio-site.vercel.app',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Deployments');

  // Mock project data
  const project = {
    name: 'portfolio-site',
    repo: 'user/portfolio-site',
    url: 'portfolio-site.vercel.app',
    branch: 'main',
    framework: 'Next.js',
    region: 'iad1 (Washington, D.C.)',
  };

  return (
    <div>
      project details
    </div>
    // <Layout>
    //   <Header title={project.name} />

    //   <div className="p-6 space-y-6">
    //     {/* Project Info Bar */}
    //     <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
    //       <div className="flex items-center gap-6">
    //         <div className="flex items-center gap-2">
    //           <Globe size={16} className="text-muted-foreground" />
    //           <a
    //             href={`https://${project.url}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-sm hover:underline flex items-center gap-1"
    //           >
    //             {project.url}
    //             <ExternalLink size={12} />
    //           </a>
    //         </div>
    //         <div className="flex items-center gap-2">
    //           <GitBranch size={16} className="text-muted-foreground" />
    //           <span className="text-sm text-muted-foreground">{project.branch}</span>
    //         </div>
    //         <div className="text-sm text-muted-foreground">
    //           <span className="font-medium">{project.framework}</span> • {project.region}
    //         </div>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <button className="btn-secondary flex items-center gap-2 h-8 text-sm">
    //           <RotateCcw size={14} />
    //           <span>Redeploy</span>
    //         </button>
    //         <Link to={`/project/${id}/settings`} className="btn-secondary flex items-center gap-2 h-8 text-sm">
    //           <Settings size={14} />
    //           <span>Settings</span>
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Tabs */}
    //     <div className="border-b border-border">
    //       <div className="flex gap-0">
    //         {tabs.map((tab) => (
    //           <button
    //             key={tab}
    //             onClick={() => setActiveTab(tab)}
    //             className={activeTab === tab ? 'tab-active' : 'tab'}
    //           >
    //             {tab}
    //           </button>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Tab Content */}
    //     {activeTab === 'Deployments' && (
    //       <div className="bg-card border border-border rounded-lg overflow-hidden">
    //         <div className="px-4 py-3 border-b border-border bg-secondary/30">
    //           <h3 className="font-medium">Production Deployments</h3>
    //         </div>
    //         {mockDeployments.map((deployment) => (
    //           <DeploymentRow key={deployment.id} projectId={id!} {...deployment} />
    //         ))}
    //       </div>
    //     )}

    //     {activeTab === 'Analytics' && (
    //       <div className="bg-card border border-border rounded-lg p-8 text-center">
    //         <p className="text-muted-foreground">Analytics coming soon...</p>
    //       </div>
    //     )}

    //     {activeTab === 'Logs' && (
    //       <div className="bg-card border border-border rounded-lg p-8 text-center">
    //         <p className="text-muted-foreground">Function logs coming soon...</p>
    //       </div>
    //     )}

    //     {activeTab === 'Settings' && (
    //       <div className="bg-card border border-border rounded-lg p-8 text-center">
    //         <p className="text-muted-foreground">Settings coming soon...</p>
    //       </div>
    //     )}
    //   </div>
    // </Layout>
  );
};

export default ProjectDetails;
