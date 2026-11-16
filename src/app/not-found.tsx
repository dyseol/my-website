import Link from "next/link";
import { Eye, ArrowLeft, Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06130E] text-[#E6EBE8] flex flex-col justify-between items-center p-6">
      {/* Header */}
      <header className="w-full max-w-5xl py-6 border-b border-[#163D2F] flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#163D2F] to-[#0A1D16] border border-[#C8A97E]/40 flex items-center justify-center">
            <Eye className="w-5 h-5 text-[#C8A97E]" />
          </div>
          <span className="text-lg font-bold text-white font-serif">
            탐정사무소 코난
          </span>
        </Link>
        <span className="text-xs text-[#C8A97E] border border-[#C8A97E]/30 px-3 py-1 rounded-full bg-[#0F2B21]">
          2인 전담
        </span>
      </header>

      {/* Main 404 Content */}
      <main className="my-auto text-center py-16 px-4 max-w-lg">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2B21] border border-[#C8A97E]/30 text-[#C8A97E] text-xs font-semibold mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>페이지를 찾을 수 없습니다</span>
        </div>

        <h1 className="text-6xl font-extrabold text-white font-serif mb-4">
          404
        </h1>

        <p className="text-lg font-medium text-white mb-2 font-serif">
          진실을 찾는 길에서 벗어났습니다.
        </p>

        <p className="text-sm text-[#8E9F97] leading-relaxed mb-8">
          요청하신 페이지가 삭제되었거나 주소가 잘못 입력되었습니다.
          메인 페이지에서 진실 추적 서비스를 확인해 주세요.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C8A97E] to-[#AA8A5F] text-[#06130E] text-sm font-bold shadow-lg shadow-[#C8A97E]/15 hover:opacity-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>메인 화면으로 돌아가기</span>
        </Link>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl py-6 border-t border-[#163D2F] text-center text-xs text-[#5F736A]">
        <p>© 2026 CONAN Private Investigation. All rights reserved.</p>
      </footer>
    </div>
  );
}
