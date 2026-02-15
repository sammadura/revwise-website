import HomeContent from '@/components/sections/HomeContent';

export default function PreviewPage() {
  return (
    <>
      <HomeContent />

      {/* Preview badge */}
      <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Preview Mode
      </div>
    </>
  );
}
