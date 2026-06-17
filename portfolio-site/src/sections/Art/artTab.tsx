'use client';

export default function ArtTab() {
  return (
    <nav className="bg-(--background) shadow-md fixed w-full z-15 top-16 left-0">
      <div className="flex text-(--secondary) items-center justify-center gap-24 h-12">
        <a>3D</a>
        <a>Illustration</a>
        <a>Design</a>
      </div>
    </nav>
  );
};

