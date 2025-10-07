export default function FeatureCard({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-emerald-100/90 px-6 py-4 backdrop-blur-sm transition-all hover:bg-emerald-100 hover:shadow-lg">
      <Icon className="h-8 w-8 flex-shrink-0 text-emerald-800" strokeWidth={2} />
      <span className="text-lg font-semibold text-emerald-900 md:text-xl">{title}</span>
    </div>
  )
}
