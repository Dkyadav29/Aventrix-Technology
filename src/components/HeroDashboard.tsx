import { motion } from 'framer-motion';
import { FiActivity, FiCheck, FiCpu, FiLayers, FiZap, FiArrowUpRight, FiGitBranch } from 'react-icons/fi';

/**
 * Decorative product-dashboard mockup for the home hero.
 * Everything here is illustrative; the whole block is aria-hidden by the parent.
 */

const metrics = [
  { label: 'Active Projects', value: '24', delta: '+3 this month', icon: <FiLayers /> },
  { label: 'API Requests', value: '1.8M', delta: '+12.1%', icon: <FiActivity /> },
  { label: 'Automation', value: '96.4%', delta: '+2.3 pts', icon: <FiZap /> },
  { label: 'AI Tasks', value: '12.4K', delta: '+34.8%', icon: <FiCpu /> },
];

const integrations = [
  { name: 'Stripe', status: 'Connected' },
  { name: 'OpenAI', status: 'Connected' },
  { name: 'AWS', status: 'Connected' },
  { name: 'PostgreSQL', status: 'Healthy' },
];

// Smooth-ish API activity curve (viewBox 0 0 300 90)
const CHART_PATH =
  'M0 70 C 20 66, 30 58, 45 60 S 70 48, 90 50 S 120 40, 135 42 S 160 30, 180 34 S 210 20, 225 24 S 255 12, 275 16 L 300 10';

const Chart = () => (
  <svg viewBox="0 0 300 90" className="h-24 w-full" preserveAspectRatio="none">
    <defs>
      <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="hero-chart-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
    </defs>
    {[20, 40, 60].map((y) => (
      <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
    ))}
    <path d={`${CHART_PATH} L 300 90 L 0 90 Z`} fill="url(#hero-chart-fill)" />
    <path d={CHART_PATH} fill="none" stroke="url(#hero-chart-line)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="300" cy="10" r="4" fill="#38bdf8" />
    <circle cx="300" cy="10" r="8" fill="#38bdf8" fillOpacity="0.25" />
  </svg>
);

const panel = 'rounded-2xl border border-white/10 bg-white/[0.04]';

const FloatingCard = ({
  className,
  duration,
  children,
}: {
  className: string;
  duration: number;
  children: React.ReactNode;
}) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0d1528]/95 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl ${className}`}
  >
    {children}
  </motion.div>
);

const HeroDashboard = () => (
  <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
    {/* Glow behind the product */}
    <div
      className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_45%,rgba(56,189,248,0.22),transparent_70%)] blur-2xl"
      aria-hidden="true"
    />

    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      <div className="relative rounded-3xl border border-white/10 bg-[#0b1220]/90 shadow-[0_30px_80px_-20px_rgba(2,8,23,0.9)] backdrop-blur-xl lg:[transform:perspective(1400px)_rotateY(-5deg)_rotateX(2deg)]">
        {/* Header */}
        {/* Left padding on sm+ leaves room for the floating "API Connected" card over this corner */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:pl-48">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
              <svg viewBox="0 0 64 64" className="h-4 w-4" aria-hidden="true">
                <path d="M16 46 L32 16 L48 46 L41 46 L32 28 L23 46 Z" fill="#fff" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white leading-tight">Aventix Platform</p>
              <p className="text-[11px] text-gray-400 leading-tight">Demo workspace</p>
            </div>
          </div>
          <span className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </span>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-[1.4fr_1fr]">
          {/* Left column: metrics + chart */}
          <div className="space-y-4 min-w-0">
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className={`${panel} p-3.5`}>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[11px] font-medium uppercase tracking-wider">{m.label}</span>
                    <span className="text-primary-300">{m.icon}</span>
                  </div>
                  <p className="mt-2 font-display text-2xl font-extrabold text-white leading-none">{m.value}</p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-300">
                    <FiArrowUpRight size={11} />
                    {m.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className={`${panel} p-4`}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-white">API Activity</p>
                <span className="text-[11px] text-gray-400">Last 24h</span>
              </div>
              <Chart />
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>Now</span>
              </div>
            </div>
          </div>

          {/* Right column: automation, integrations, deployment */}
          <div className="hidden md:flex flex-col gap-4 min-w-0">
            <div className={`${panel} p-4`}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-white">AI Automation</p>
                <span className="rounded-full bg-primary-400/15 px-2 py-0.5 text-[10px] font-semibold text-primary-300">
                  Running
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-primary-400 to-secondary-400" />
              </div>
              <p className="mt-2 text-[11px] text-gray-400">1,284 tasks processed today</p>
            </div>

            <div className={`${panel} p-4`}>
              <p className="text-xs font-semibold text-white mb-3">Integrations</p>
              <ul className="space-y-2">
                {integrations.map((i) => (
                  <li key={i.name} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-gray-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {i.name}
                    </span>
                    <span className="text-[10px] text-gray-500">{i.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${panel} p-4 mt-auto`}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-white">Deployment</p>
                <span className="rounded-md bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-300">
                  LIVE
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-400">
                <FiGitBranch size={12} />
                main → production · 2m ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating status cards */}
    <FloatingCard className="-left-3 -top-4 lg:-left-6" duration={6}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
        <FiCheck size={18} />
      </span>
      <div>
        <p className="text-sm font-semibold text-white leading-tight">API Connected</p>
        <p className="text-[11px] text-gray-400">Production</p>
      </div>
    </FloatingCard>

    <FloatingCard className="-right-3 top-1/2 lg:-right-8" duration={8}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-400/15 text-primary-300">
        <FiCpu size={18} />
      </span>
      <div>
        <p className="text-sm font-semibold text-white leading-tight">AI Automation</p>
        <p className="text-[11px] font-medium text-emerald-300">+34.8%</p>
      </div>
    </FloatingCard>

    <FloatingCard className="-bottom-6 left-10 lg:left-6" duration={7}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white leading-tight">Deployment</p>
        <p className="text-[11px] text-gray-400">Live</p>
      </div>
    </FloatingCard>
  </div>
);

export default HeroDashboard;
