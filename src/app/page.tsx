import { Shield, Scale } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-6 sm:p-12 bg-gradient-to-b from-[#F4F7F5] to-[#FFFFFF]">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-4 border-b border-stone-200">
        <div className="flex items-center space-x-2">
          <Scale className="w-7 h-7 text-[#0F382A]" />
          <span className="text-xl font-bold tracking-tight text-[#0F382A]">
            법률사무소 로앤이
          </span>
        </div>
        <div className="text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5" />
          <span>오직 피해자만 변호합니다</span>
        </div>
      </header>

      {/* Hero / Main Message */}
      <section className="w-full max-w-3xl my-auto text-center py-16 px-4">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#0F382A]/10 text-[#0F382A] text-sm font-semibold tracking-wide">
          COMING SOON
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F382A] mb-6">
          Hello World!
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-stone-700 mb-4">
          이 사이트는 곧 완성됩니다.
        </p>

        <p className="text-base text-stone-500 max-w-lg mx-auto leading-relaxed">
          억울하고 힘든 상황에 처한 피해자의 눈물을 닦고 일상을 되찾을 수 있도록 처음부터 끝까지 함께하겠습니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="px-6 py-3.5 rounded-lg bg-[#0F382A] text-white font-medium shadow-md">
            상담 준비 중
          </div>
          <div className="text-sm text-stone-500">
            문의 및 접수 시스템 오픈 예정
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center py-6 border-t border-stone-200 text-xs text-stone-400">
        <p>© 2026 법률사무소 로앤이 (Law & Lee). All rights reserved.</p>
      </footer>
    </main>
  );
}
