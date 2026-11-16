"use client";

import { useState } from "react";
import {
  Shield,
  Search,
  Lock,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  Flame,
  ArrowRight,
  Eye,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    caseType: "증거 불충분 / 불송치 위기",
    contactMethod: "전화 상담",
    description: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("개인정보 보호 및 비밀 유지 서약에 동의해 주세요.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#06130E] text-[#E6EBE8] font-sans selection:bg-[#C8A97E]/30 selection:text-[#F4EDE4]">
      {/* 1. GNB 헤더 (통일된 높이 및 블러 배경) */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#06130E]/90 border-b border-[#163D2F] transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#163D2F] to-[#0A1D16] border border-[#C8A97E]/40 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-[#C8A97E] transition-colors">
              <Eye className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif">
                  탐정사무소 코난
                </span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[#0F2B21] text-[#C8A97E] border border-[#C8A97E]/30 font-medium">
                  2인 전담
                </span>
              </div>
              <p className="text-[10px] text-[#8E9F97] tracking-wider uppercase">
                Conan Private Investigation
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm text-[#8E9F97]">
            <a href="#manifesto" className="hover:text-[#C8A97E] transition-colors">
              신뢰 원칙
            </a>
            <a href="#specialties" className="hover:text-[#C8A97E] transition-colors">
              조사 분야
            </a>
            <a href="#process" className="hover:text-[#C8A97E] transition-colors">
              진실 추적 과정
            </a>
            <a href="#partners" className="hover:text-[#C8A97E] transition-colors">
              대표 탐정
            </a>
            <a href="#consultation" className="hover:text-[#C8A97E] transition-colors">
              비밀 상담
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="#consultation"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#163D2F] bg-[#0A1D16] text-xs font-medium text-[#C8A97E] hover:border-[#C8A97E]/50 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>24시 문의</span>
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C8A97E] to-[#AA8A5F] text-[#06130E] text-xs sm:text-sm font-bold hover:opacity-95 transition-all shadow-md shadow-[#C8A97E]/20"
            >
              <Lock className="w-3.5 h-3.5 text-[#06130E]" />
              <span>1:1 비밀 접수</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. 히어로 섹션 */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 overflow-hidden">
        {/* 시네마틱 앰비언트 글로우 */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] bg-gradient-to-tr from-[#163D2F]/25 to-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B21] border border-[#C8A97E]/40 text-[#C8A97E] text-xs font-semibold tracking-wide mb-8 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>대한민국 최초 · 범죄 피해자 전담 2인 공인탐정</span>
          </div>

          {/* 메인 헤드라인 (세리프 적용) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.3] sm:leading-[1.25] mb-8 font-serif">
            가해자의 거짓말은 수십 가지이지만,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFCAAC] via-[#C8A97E] to-[#DFCAAC]">
              당신이 겪은 진실은 언제나 하나입니다.
            </span>
          </h1>

          {/* 서브 카피 */}
          <p className="text-base sm:text-xl text-[#8E9F97] max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            경찰이 <span className="text-white font-medium underline decoration-[#C8A97E] underline-offset-4">&ldquo;증거가 부족하다&rdquo;</span>며 수사를 멈추려 할 때,
            <br className="hidden sm:inline" />
            탐정사무소 코난이 끝까지 찾아내 법정이 채택하는 결정적 증거로 만듭니다.
          </p>

          {/* CTA 버튼 그룹 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#consultation"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C8A97E] to-[#AA8A5F] text-[#06130E] text-base font-bold shadow-xl shadow-[#C8A97E]/15 hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
            >
              <Lock className="w-4 h-4 text-[#06130E]" />
              <span>익명 1:1 비밀 상담 신청</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#specialties"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#163D2F] bg-[#0A1D16] text-base font-medium text-[#E6EBE8] hover:border-[#C8A97E]/50 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-[#C8A97E]" />
              <span>주력 조사 분야 살펴보기</span>
            </a>
          </div>

          {/* 3대 핵심 신뢰 지표 바 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-2xl bg-[#0A1D16] border border-[#163D2F] flex items-start space-x-3.5">
              <Shield className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">100% 합법 증거주의</h4>
                <p className="text-xs text-[#8E9F97] mt-1">수사기관과 법원이 즉시 채택하는 적법 증거</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#0A1D16] border border-[#163D2F] flex items-start space-x-3.5">
              <UserCheck className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">2인 대표 직접 현장 투입</h4>
                <p className="text-xs text-[#8E9F97] mt-1">알바·하청 제로, 파트너 탐정이 직접 채증</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#0A1D16] border border-[#163D2F] flex items-start space-x-3.5">
              <Flame className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">종결 즉시 영구 파기</h4>
                <p className="text-xs text-[#8E9F97] mt-1">의뢰인 기록 및 녹취 일체 100% 파기 보증</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 신뢰 원칙 선언 (Manifesto) */}
      <section id="manifesto" className="scroll-mt-24 py-24 sm:py-32 bg-[#0A1D16]/50 border-y border-[#163D2F] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase">
              Manifesto of Trust
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-4 tracking-tight font-serif">
              &ldquo;우리는 어떠한 경우에도<br />
              <span className="text-[#C8A97E]">가해자의 의뢰는 받지 않습니다.</span>&rdquo;
            </h2>
            <p className="text-sm sm:text-base text-[#8E9F97] font-light leading-relaxed">
              탐정사무소 코난은 오직 억울하게 눈물 흘리는 피해자의 편에서만 뜁니다.
              불법 흥신소의 관행과 타협하지 않으며, 다음 3대 원칙을 목숨처럼 지킵니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0F2B21]/60 border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#163D2F] border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] mb-6 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#C8A97E] tracking-widest">RULE 01</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-3 font-serif">100% 합법 증거 원칙</h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed">
                위법하게 수집된 증거는 재판에서 증거능력을 잃고 의뢰인을 역고소 위험에 빠뜨립니다. 코난은 법률 전문가의 검토 하에 <strong>법정이 즉시 채택 가능한 적법한 증거</strong>만을 수집합니다.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F2B21]/60 border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#163D2F] border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] mb-6 group-hover:scale-105 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#C8A97E] tracking-widest">RULE 02</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-3 font-serif">2인 파트너 직접 조사제</h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed">
                아르바이트나 하청 직원에게 의뢰인의 비밀과 현장을 맡길 수 없습니다. <strong>두 명의 대표 탐정이 처음 면담부터 현장 잠복, 증거 분석까지 모든 과정을 100% 직접 수행</strong>합니다.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F2B21]/60 border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#163D2F] border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] mb-6 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#C8A97E] tracking-widest">RULE 03</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-3 font-serif">종결 즉시 데이터 영구 파기</h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed">
                조사 결과 보고서가 의뢰인에게 안전하게 전달되는 순간, 사무소 내 모든 관련 녹취, 위치 데이터, 메모 일체를 <strong>복구 불가능한 방식으로 영구 파기</strong>하며 파기 확인서를 발급합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 핵심 조사 분야 (Specialties - 증거 불충분 타파) */}
      <section id="specialties" className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase">
              Core Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-4 tracking-tight font-serif">
              &ldquo;증거가 없다&rdquo;는 수사관의 말,<br />
              <span className="text-[#C8A97E]">코난이 현장에서 뒤집습니다.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8E9F97] font-light leading-relaxed">
              가해자가 치밀하게 지운 흔적도 물리적 공간과 디지털 세상에 반드시 남습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-[#0A1D16] border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#163D2F] text-[#C8A97E] font-medium">
                  특화 분야 01
                </span>
                <AlertTriangle className="w-4 h-4 text-[#C8A97E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif">
                경찰 불송치(무혐의) 위기 사건의 재조사
              </h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed mb-4">
                담당 수사관이 확인하지 못한 CCTV 사각지대 분석, 현장 주변 주차 차량의 블랙박스 전수 조사, 주변 목격자 심층 탐문을 통해 혐의를 입증할 결정적 스모킹 건을 확보합니다.
              </p>
              <ul className="space-y-2 text-xs text-[#8E9F97] border-t border-[#163D2F] pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>CCTV 각도별 동선 재구성 및 음영지역 추적</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>주변 주차 차량 블랙박스 메모리 수집 지원</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A1D16] border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#163D2F] text-[#C8A97E] font-medium">
                  특화 분야 02
                </span>
                <Search className="w-4 h-4 text-[#C8A97E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif">
                지능형 사기범 잠적 및 은닉재산 추적
              </h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed mb-4">
                &ldquo;돈이 없다&rdquo;며 파산 신청을 하거나 잠적한 사기범의 위장 전입지, 실거주지, 차명 차량 운행 사실 및 은닉된 사업체 운영 정황을 합법적으로 포착합니다.
              </p>
              <ul className="space-y-2 text-xs text-[#8E9F97] border-t border-[#163D2F] pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>잠적한 가해자의 실거주지 및 은신처 특정</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>강제집행 및 가압류를 위한 은닉 생활상 채증</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A1D16] border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#163D2F] text-[#C8A97E] font-medium">
                  특화 분야 03
                </span>
                <Eye className="w-4 h-4 text-[#C8A97E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif">
                스토킹 · 교제폭력 상습성 증명 및 동선 보호
              </h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed mb-4">
                교묘하게 접근 금지 명령을 피하거나 증거를 남기지 않는 가해자의 은밀한 미행 및 배회 행위를 정밀 채증하여 영장 청구 및 엄벌에 필요한 상습성 자료를 만듭니다.
              </p>
              <ul className="space-y-2 text-xs text-[#8E9F97] border-t border-[#163D2F] pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>반복적 접근 및 스토킹 행위 적법 영상 채증</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>피해자 출퇴근길 안전 동선 확보 및 위기 대응 지원</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A1D16] border border-[#163D2F] hover:border-[#C8A97E]/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#163D2F] text-[#C8A97E] font-medium">
                  특화 분야 04
                </span>
                <Lock className="w-4 h-4 text-[#C8A97E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif">
                디지털 성범죄 유포 경로 및 사이버 가해자 특정
              </h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed mb-4">
                익명 뒤에 숨어 협박하거나 온라인에 불법 유포를 시도하는 가해자의 디지털 흔적과 계정 연계성을 분석하여 고소장에 첨부할 결정적 포렌식 증거를 구축합니다.
              </p>
              <ul className="space-y-2 text-xs text-[#8E9F97] border-t border-[#163D2F] pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>온라인 불법 게시물 확산 경로 채증 및 캡처 무결성 보장</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>익명 계정의 동일인 식별 사실관계 자료화</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4단계 진실 추적 프로세스 (Process) */}
      <section id="process" className="scroll-mt-24 py-24 sm:py-32 bg-[#0A1D16]/40 border-y border-[#163D2F] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase">
              Investigation Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-4 tracking-tight font-serif">
              진실을 밝혀내는 4단계 절차
            </h2>
            <p className="text-sm sm:text-base text-[#8E9F97] font-light leading-relaxed">
              처음 털어놓는 순간부터 사건이 종결될 때까지, 피해자분의 안전과 비밀을 최우선으로 지킵니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-[#06130E] border border-[#163D2F] relative">
              <span className="text-2xl font-extrabold text-[#C8A97E]/30 font-mono">01</span>
              <h4 className="text-base font-bold text-white mt-3 mb-2 font-serif">익명 사전 진단</h4>
              <p className="text-xs text-[#8E9F97] leading-relaxed">
                가명으로도 접수 가능합니다. 현재 상태에서 합법적 증거 수집이 가능한지 승산을 정직하게 진단합니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#06130E] border border-[#163D2F] relative">
              <span className="text-2xl font-extrabold text-[#C8A97E]/30 font-mono">02</span>
              <h4 className="text-base font-bold text-white mt-3 mb-2 font-serif">2인 대표 현장 투입</h4>
              <p className="text-xs text-[#8E9F97] leading-relaxed">
                외주 없이 두 명의 대표 탐정이 직접 현장 잠복, 주변 탐문 및 디지털 데이터 수집에 착수합니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#06130E] border border-[#163D2F] relative">
              <span className="text-2xl font-extrabold text-[#C8A97E]/30 font-mono">03</span>
              <h4 className="text-base font-bold text-white mt-3 mb-2 font-serif">법정 공인 보고서 완성</h4>
              <p className="text-xs text-[#8E9F97] leading-relaxed">
                경찰서나 검찰청, 담당 변호사에게 그대로 제출할 수 있는 공증급 정밀 사실조사 보고서를 납품합니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#06130E] border border-[#163D2F] relative">
              <span className="text-2xl font-extrabold text-[#C8A97E]/30 font-mono">04</span>
              <h4 className="text-base font-bold text-white mt-3 mb-2 font-serif">데이터 영구 파기</h4>
              <p className="text-xs text-[#8E9F97] leading-relaxed">
                납품 완료 즉시 의뢰인 관련 모든 메모, 녹취, 원본 데이터를 파기하여 사후 유출 위험을 원천 차단합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 2인 대표 탐정 프로필 (Partners) */}
      <section id="partners" className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase">
              Partners Profile
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-4 tracking-tight font-serif">
              &ldquo;조사와 하청은 양립할 수 없습니다.&rdquo;
            </h2>
            <p className="text-sm sm:text-base text-[#8E9F97] font-light leading-relaxed">
              의뢰인의 고통을 깊이 공감하는 두 명의 파트너 탐정이 처음부터 끝까지 직접 뜁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 탐정 1: 코난 */}
            <div className="p-8 rounded-2xl bg-[#0A1D16] border border-[#163D2F] flex flex-col justify-between hover:border-[#C8A97E]/50 transition-all">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#163D2F] border border-[#C8A97E]/40 flex items-center justify-center text-[#C8A97E] font-bold text-xl font-serif">
                    코
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif">코난 대표 탐정</h3>
                    <p className="text-xs text-[#C8A97E] mt-0.5">현장 채증 및 사실관계 재구성 총괄</p>
                  </div>
                </div>
                <p className="text-sm text-[#8E9F97] leading-relaxed mb-6 font-light">
                  &ldquo;수사관이 보지 못한 현장의 1mm를 찾아내는 것이 제 역할입니다. 가해자가 거짓으로 둘러친 벽을 현장 증거로 무너뜨리겠습니다.&rdquo;
                </p>
                <div className="space-y-2 border-t border-[#163D2F] pt-4 text-xs text-[#8E9F97]">
                  <p>· 공인 탐정 자격 및 사실조사 전문 과정 이수</p>
                  <p>· 형사·범죄 피해 사건 현장 채증 전담</p>
                  <p>· CCTV 각도별 동선 재구성 및 영상 분석 전문</p>
                </div>
              </div>
            </div>

            {/* 탐정 2: 베카 */}
            <div className="p-8 rounded-2xl bg-[#0A1D16] border border-[#163D2F] flex flex-col justify-between hover:border-[#C8A97E]/50 transition-all">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#163D2F] border border-[#C8A97E]/40 flex items-center justify-center text-[#C8A97E] font-bold text-xl font-serif">
                    베
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif">베카 대표 탐정</h3>
                    <p className="text-xs text-[#C8A97E] mt-0.5">디지털 포렌식 및 가해자 소재 추적 총괄</p>
                  </div>
                </div>
                <p className="text-sm text-[#8E9F97] leading-relaxed mb-6 font-light">
                  &ldquo;지워진 디지털 흔적, 위장된 주소지, 숨겨둔 재산은 반드시 흔적을 남깁니다. 피해자의 정당한 권리를 되찾아드리겠습니다.&rdquo;
                </p>
                <div className="space-y-2 border-t border-[#163D2F] pt-4 text-xs text-[#8E9F97]">
                  <p>· 디지털 포렌식 데이터 분석 전문</p>
                  <p>· 지능형 금융 사기 및 은닉 자산 추적 전담</p>
                  <p>· 사이버 증거 무결성 입증 및 가해자 특정 분석</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 비밀 상담 신청 폼 (Consultation Form) */}
      <section id="consultation" className="scroll-mt-24 py-24 sm:py-32 bg-[#0A1D16]/70 border-t border-[#163D2F] px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase">
              Strictly Confidential
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-3 tracking-tight font-serif">
              1:1 익명 비밀 상담 신청
            </h2>
            <p className="text-sm text-[#8E9F97] leading-relaxed">
              본 상담 내용은 암호화되어 두 명의 대표 탐정에게만 안전하게 전달됩니다.
              <br />
              이름이 부담스러우시면 <strong>가명이나 이니셜</strong>로 적어주셔도 괜찮습니다.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-[#0F2B21] border border-[#C8A97E]/50 text-center animate-fade-in shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#163D2F] text-[#C8A97E] mx-auto flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">
                비밀 상담이 안전하게 접수되었습니다.
              </h3>
              <p className="text-sm text-[#8E9F97] leading-relaxed max-w-md mx-auto mb-6">
                기재해 주신 연락처로 <strong>대표 탐정이 직접 암호화된 채널을 통해 1시간 이내(업무시간 기준)에 연락</strong>드리겠습니다. 마음 편히 기다려 주세요.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-[#C8A97E]/40 text-xs text-[#C8A97E] hover:bg-[#C8A97E]/10 transition-colors"
              >
                다른 문의 추가 접수하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-2xl bg-[#06130E] border border-[#163D2F] shadow-2xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#E6EBE8] mb-2">
                    신청인 성함 <span className="text-xs text-[#C8A97E] font-normal">(가명/익명 가능)</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 김민지 (가명 가능)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A1D16] border border-[#163D2F] text-white text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#E6EBE8] mb-2">
                    연락받으실 번호 <span className="text-[#C8A97E]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A1D16] border border-[#163D2F] text-white text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#E6EBE8] mb-2">
                  피해 유형 및 조사 분야 <span className="text-[#C8A97E]">*</span>
                </label>
                <select
                  value={formData.caseType}
                  onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A1D16] border border-[#163D2F] text-white text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                >
                  <option value="증거 불충분 / 불송치 위기">경찰 증거 불충분 · 불송치 위기 사건</option>
                  <option value="사기 가해자 잠적 / 은닉재산 추적">지능형 사기범 잠적 · 은닉 재산 추적</option>
                  <option value="스토킹 / 교제폭력 채증">스토킹 · 교제폭력 상습성 채증</option>
                  <option value="디지털 성범죄 / 사이버 폭력">디지털 성범죄 · 사이버 폭력 가해자 특정</option>
                  <option value="기타 범죄 피해 사실조사">기타 범죄 피해 사실조사</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#E6EBE8] mb-2">
                  희망하시는 상담 방식
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["전화 상담", "카카오톡 상담", "대면 비밀 상담"].map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, contactMethod: method })}
                      className={`py-3 rounded-xl border text-center transition-all ${
                        formData.contactMethod === method
                          ? "bg-[#C8A97E] text-[#06130E] border-[#C8A97E] font-bold"
                          : "bg-[#0A1D16] text-[#8E9F97] border-[#163D2F] hover:border-[#C8A97E]/50"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#E6EBE8] mb-2">
                  겪고 계신 피해 상황 및 문의 내용 <span className="text-[#C8A97E]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="언제, 어떤 피해를 입으셨는지, 경찰 수사에서 어떤 증거가 부족하다고 하는지 편하게 적어주세요."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A1D16] border border-[#163D2F] text-white text-sm focus:outline-none focus:border-[#C8A97E] transition-colors resize-none"
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-1 accent-[#C8A97E] w-4 h-4 rounded cursor-pointer"
                />
                <label htmlFor="agree" className="text-xs text-[#8E9F97] leading-relaxed cursor-pointer">
                  [필수] 상담 접수를 위한 개인정보 수집 및 암호화 처리에 동의하며, 사건 종결 즉시 모든 데이터가 영구 파기되는 비밀 유지 조항을 확인했습니다.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C8A97E] to-[#AA8A5F] text-[#06130E] font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-[#C8A97E]/15 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-[#06130E]" />
                <span>100% 비밀 보장 상담 접수하기</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 8. 긴급 접수 안내 (Spacing 일관성) */}
      <section className="py-20 px-4 sm:px-6 border-t border-[#163D2F] bg-[#06130E]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs text-[#C8A97E] font-medium tracking-wider uppercase">Direct Assistance</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif">24시간 비밀 상담 접수 채널</h3>
            <p className="text-xs sm:text-sm text-[#8E9F97] mt-1">
              급박한 위협이나 증거 인멸 우려가 있는 경우 1:1 비밀 상담 접수를 남겨주시면 대표 탐정이 즉시 확인합니다.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#consultation"
              className="px-6 py-3.5 rounded-xl bg-[#0F2B21] border border-[#C8A97E]/50 text-[#C8A97E] font-bold text-sm sm:text-base hover:bg-[#163D2F] transition-all flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>온라인 비밀 상담 신청하기</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. 푸터 */}
      <footer className="py-12 border-t border-[#163D2F] bg-[#040C09] text-xs text-[#5F736A] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-sm mb-1 font-serif">탐정사무소 코난 (CONAN PI)</p>
            <p className="leading-relaxed text-[#8E9F97]">
              대표 탐정: 코난 · 베카 | 사업자등록번호: [등록 예정]<br />
              소재지: [추후 업데이트 예정] | 연락처: [상담 폼 접수 후 안내]
            </p>
            <p className="text-[11px] text-[#5F736A] mt-2">
              ※ 탐정사무소 코난은 신용정보법 및 개인정보보호법 등 관련 법령을 엄격히 준수하며, 일체의 불법 도청·위치추적·해킹 의뢰는 받지 않습니다.
            </p>
          </div>
          <p className="text-[11px]">© 2026 CONAN Private Investigation. All rights reserved.</p>
        </div>
      </footer>

      {/* 10. 모바일 플로팅 긴급 상담 바 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#06130E]/95 backdrop-blur-md border-t border-[#163D2F] flex gap-2">
        <a
          href="#specialties"
          className="flex-1 py-3 rounded-xl bg-[#0F2B21] border border-[#C8A97E]/40 text-[#C8A97E] text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Search className="w-3.5 h-3.5" />
          <span>조사 분야</span>
        </a>
        <a
          href="#consultation"
          className="flex-[1.4] py-3 rounded-xl bg-gradient-to-r from-[#C8A97E] to-[#AA8A5F] text-[#06130E] text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-lg shadow-[#C8A97E]/20"
        >
          <Lock className="w-3.5 h-3.5 text-[#06130E]" />
          <span>1:1 익명 비밀 상담</span>
        </a>
      </div>
    </div>
  );
}
