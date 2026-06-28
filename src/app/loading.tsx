// Shown automatically by Next.js while a route/segment is loading.
// Pure CSS spinner — no JS animation library needed, keeps it light.
export default function Loading() {
  return (
    <div className="fixed inset-0 z-60 flex flex-col items-center justify-center gap-6 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
      </div>
      <p className="text-sm font-medium tracking-wide text-blue-600 animate-pulse">
        Loading Zentric Technologies…
      </p>
    </div>
  );
}
