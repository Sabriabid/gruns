import AtlasSidebar from "./AtlasSidebar";
import AtlasTopbar from "./AtlasTopbar";

export default function AtlasShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-atlas-bg text-atlas-text">
      <div className="flex">
        <AtlasSidebar />
        <div className="flex-1 min-w-0 lg:ml-[260px]">
          <AtlasTopbar />
          <main className="px-6 py-8 lg:px-10 lg:py-10 max-w-[1400px]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
