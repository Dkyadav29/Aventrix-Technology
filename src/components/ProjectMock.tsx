import type { ProjectVisual } from '../constants/projects';

interface ProjectMockProps {
  visual: ProjectVisual;
  className?: string;
}

const Bar = ({ w = 'w-full', h = 'h-2', tone = 'bg-white/40' }: { w?: string; h?: string; tone?: string }) => (
  <div className={`${w} ${h} rounded-full ${tone}`} />
);

const Window = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-xl border border-white/20 border-b-0 bg-white/10 backdrop-blur-sm shadow-2xl overflow-hidden">
    <div className="flex items-center gap-1.5 border-b border-white/15 bg-white/10 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-white/50" />
      <span className="h-2 w-2 rounded-full bg-white/50" />
      <span className="h-2 w-2 rounded-full bg-white/50" />
      <span className="ml-2 h-2 w-24 rounded-full bg-white/25" />
    </div>
    <div className="p-3">{children}</div>
  </div>
);

const Dashboard = () => (
  <Window>
    <div className="flex gap-3">
      <div className="w-12 space-y-2 rounded-lg bg-white/15 p-2">
        {[...Array(5)].map((_, i) => (
          <Bar key={i} h="h-1.5" tone={i === 0 ? 'bg-white/80' : 'bg-white/30'} />
        ))}
      </div>
      <div className="flex-1 space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-lg bg-white/20 p-2 space-y-1.5">
              <Bar w="w-6" h="h-1" tone="bg-white/40" />
              <Bar w="w-10" h="h-2" tone="bg-white/80" />
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/20 p-2 space-y-1.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-white/50" />
              <Bar w="w-1/3" h="h-1.5" tone="bg-white/60" />
              <Bar w="w-1/4" h="h-1.5" tone="bg-white/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Window>
);

const Storefront = () => (
  <Window>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Bar w="w-12" h="h-2" tone="bg-white/80" />
        <div className="flex gap-1.5">
          <Bar w="w-6" h="h-1.5" />
          <Bar w="w-6" h="h-1.5" />
          <Bar w="w-6" h="h-1.5" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg bg-white/20 p-1.5 space-y-1.5">
            <div className="h-10 rounded-md bg-white/30" />
            <Bar w="w-3/4" h="h-1.5" tone="bg-white/70" />
            <Bar w="w-1/2" h="h-1.5" tone="bg-white/40" />
          </div>
        ))}
      </div>
    </div>
  </Window>
);

const Analytics = () => (
  <Window>
    <div className="space-y-2">
      <div className="grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg bg-white/20 p-1.5 space-y-1">
            <Bar w="w-6" h="h-1" tone="bg-white/40" />
            <Bar w="w-8" h="h-2" tone="bg-white/80" />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 rounded-lg bg-white/20 p-2 h-20">
        {[35, 55, 40, 70, 50, 85, 65, 95, 60, 80, 45, 90].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </Window>
);

const Booking = () => (
  <Window>
    <div className="flex gap-3">
      <div className="flex-1 space-y-2">
        <Bar w="w-16" h="h-2" tone="bg-white/80" />
        <div className="grid grid-cols-7 gap-1">
          {[...Array(21)].map((_, i) => (
            <div
              key={i}
              className={`h-4 rounded-sm ${i === 9 ? 'bg-white/90' : i % 5 === 0 ? 'bg-white/45' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
      <div className="w-24 space-y-2 rounded-lg bg-white/20 p-2">
        <Bar w="w-12" h="h-1.5" tone="bg-white/70" />
        <Bar w="w-full" h="h-1" />
        <Bar w="w-5/6" h="h-1" />
        <div className="mt-2 h-5 rounded-md bg-white/80" />
      </div>
    </div>
  </Window>
);

const VISUALS: Record<ProjectVisual, () => JSX.Element> = {
  dashboard: Dashboard,
  storefront: Storefront,
  analytics: Analytics,
  booking: Booking,
};

/** Decorative, abstract interface illustration standing in for a project screenshot */
const ProjectMock = ({ visual, className = '' }: ProjectMockProps) => {
  const Visual = VISUALS[visual];
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-500 to-secondary-700 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <Visual />
    </div>
  );
};

export default ProjectMock;
