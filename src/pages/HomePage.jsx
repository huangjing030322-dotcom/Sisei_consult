
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import {
  MapPin,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Package,
  Layers,
  FileText,
  ShoppingCart,
  Calculator,
  Sparkles,
  Bot,
  Store,
  Receipt,
  CheckCircle2
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

const HomePage = () => {
  const softwareProducts = [
    {
      icon: Package,
      name: 'イーマネージ',
      description: '物流・倉庫管理・EC一元管理システム',
      tag: '物流 / EC',
      link: '/features#emanage'
    },
    {
      icon: Calculator,
      name: 'スマ経営',
      description: '会計・経営分析 AI智能化ソフトウェア',
      tag: 'AI / 経営',
      link: '/features#ai-keiei'
    },
    {
      icon: Receipt,
      name: 'レジナビ',
      description: 'POS・受注管理・売上管理システム',
      tag: 'POS / 売上',
      link: '/features#regi-navi'
    }
  ];

  const strengths = [
    { title: '業務効率化', sub: 'DXの推進、事務負担の軽減' },
    { title: '経営課題解決', sub: '最適な助成金を選択して資金問題を解決' },
    { title: '高い採択率', sub: '最新の制度動向をリアルタイムで把握' }
  ];

  const steps = [
    { num: '01', title: '無料相談', desc: '現状のヒアリングと補助金・助成金適用可能性の診断を行います。' },
    { num: '02', title: '申請計画策定', desc: '審査ポイントを踏まえた最適な申請戦略を立案します。' },
    { num: '03', title: '書類作成・提出', desc: '採択率を最大化する申請書類を作成・提出いたします。' },
    { num: '04', title: '採択後の伴走', desc: '交付申請から実績報告・確定検査まで全面サポートします。' }
  ];

  return (
    <>
      <Helmet>
        <title>志成コンサル | 補助金・助成金申請支援 </title>
        <meta name="description" content="デジタル化・AI導入補助金（IT導入補助金）の申請支援，特別在庫管理ソフト、会計ソフト、レジソフトの導入補助金・助成金申請を中心に、企業向け補助金・助成金申請支援コンサルタントです。" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* ══════════════ HERO ══════════════ */}
          <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
            {/* 动态背景网格 */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'linear-gradient(hsl(0,0%,0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,0%) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
              initial={{ opacity: 0.03 }}
              animate={{
                opacity: [0.03, 0.08, 0.03],
                backgroundPosition: ['0px 0px', '120px 120px']
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                backgroundPosition: { duration: 8, repeat: Infinity, ease: 'linear' }
              }}
            />

            {/* 浮动几何装饰 - 圆圈 */}
            <motion.div
              className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full border border-[hsl(0,0%,85%)] z-0 hidden lg:block"
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.05, 0.8],
                y: [0, -20, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-[25%] right-[35%] w-20 h-20 rounded-full border border-[hsl(0,0%,88%)] z-0 hidden lg:block"
              initial={{ opacity: 0.2, scale: 0.9 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.9, 1.1, 0.9],
                y: [0, 15, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* 浮动几何装饰 - 方块 */}
            <motion.div
              className="absolute top-[30%] right-[8%] w-16 h-16 border border-[hsl(0,0%,90%)] z-0 hidden lg:block"
              initial={{ opacity: 0.25, rotate: 0 }}
              animate={{
                opacity: [0.25, 0.5, 0.25],
                rotate: [0, 90, 0],
                y: [0, -15, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-[20%] left-[15%] w-12 h-12 border border-[hsl(0,0%,92%)] z-0 hidden lg:block"
              initial={{ opacity: 0.2, rotate: 45 }}
              animate={{
                opacity: [0.2, 0.45, 0.2],
                rotate: [45, 135, 45],
                y: [0, 10, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />

            {/* 渐变光晕效果 */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full z-0 hidden lg:block"
              style={{
                background: 'radial-gradient(circle, hsla(0,0%,0%,0.03) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full z-0 hidden lg:block"
              style={{
                background: 'radial-gradient(circle, hsla(0,0%,0%,0.02) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* 右側装飾テキスト */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
              <span
                className="text-[8rem] font-bold text-[hsl(0,0%,95%)] select-none"
                style={{ fontFamily: '"Noto Serif JP", serif', writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
              >
                補助金・助成金申請
              </span>
            </div>

            {/* 黒サイドライン */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[hsl(0,0%,8%)] z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
              <div className="max-w-3xl pl-8">
                {/* タグ */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                  <span className="inline-block bg-[hsl(0,0%,8%)] text-white text-[0.68rem] tracking-[0.18em] px-3 py-1 mb-8 font-medium uppercase">
                    補助金・助成金 申請支援
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp} initial="hidden" animate="visible" custom={1}
                  className="text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.25] mb-8"
                  style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', fontWeight: 1000, letterSpacing: '0.03em' }}
                >
                  助成金・補助金のことなら
                  <br />
                  <span className="relative">
                    <span className="relative z-10">志成コンサル</span>
                    <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[hsl(0,0%,92%)] z-0" />
                  </span>
                  専門家にお任せ
                </motion.h1>

                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={2}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-[1px] w-10 bg-[hsl(0,0%,30%)]" />
                  <p className="text-sm tracking-[0.15em] text-[hsl(0,0%,45%)]">
                    登録から交付申請、実績・効果報告まで伴走します
                  </p>
                </motion.div>

                <motion.p
                  variants={fadeUp} initial="hidden" animate="visible" custom={3}
                  className="text-[0.95rem] text-[hsl(0,0%,42%)] leading-[2.1] mb-10 max-w-[52ch]"
                >
                  志成コンサルは、補助金・助成金の申請支援に特化した、企業向け補助金・助成金申請支援コンサルタントです。採択に向けた戦略設計、申請資料の最適化などを通じ、多くの企業様の補助金・助成金採択を実現してきました。
                </motion.p>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[hsl(0,0%,8%)] text-white px-8 py-4 text-sm font-medium tracking-[0.12em] transition-all duration-200 hover:bg-[hsl(0,0%,20%)] active:scale-[0.97]"
                    style={{ borderRadius: 0 }}
                  >
                    無料相談する
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 border border-[hsl(0,0%,20%)] text-[hsl(0,0%,20%)] px-8 py-4 text-sm font-medium tracking-[0.12em] transition-all duration-200 hover:bg-[hsl(0,0%,96%)] active:scale-[0.97]"
                    style={{ borderRadius: 0 }}
                  >
                    企業情報を見る
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════ 三柱バナー ══════════════ */}
          <section className="border-t border-b border-[hsl(0,0%,88%)] bg-[hsl(0,0%,97%)]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[hsl(0,0%,88%)]">
              {strengths.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="flex flex-col items-center justify-center py-12 px-6 text-center group hover:bg-[hsl(0,0%,8%)] transition-colors duration-300 cursor-default"
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-white text-[hsl(0,0%,8%)] transition-colors"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs text-[hsl(0,0%,50%)] tracking-wider group-hover:text-white/70 transition-colors">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ══════════════ 経営課題 ══════════════ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                  <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Our Strength</span>
                  <h2
                    className="text-[1.9rem] md:text-[2.5rem] leading-tight"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    補助金・助成金を見逃さないために
                  </h2>
                  <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
                </motion.div>
                <motion.p
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                  className="text-[0.95rem] text-[hsl(0,0%,42%)] leading-[2.1]"
                >
                  活用できる補助金・助成金を今すぐに逃さないため、
                  <br /><br />
                  実は 8 割を超える中小企業が、対象となる補助金・助成金の申請を行えていないのが現状です。
                  <br /><br />
                  受給漏れが頻発する補助金・助成金について、万全なサポート体制で効率的に活用できるよう支援。
                  <br /><br />
                  中小企業・個人事業主の今後の発展を支える専門スタッフが、申請から受給まで一貫して代行対応いたします。
                </motion.p>

                {/* 採択事例プレビュー */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                  className="mt-16 pt-12 border-t border-[hsl(0,0%,88%)]"
                >
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-2">Success Cases</span>
                      <h3
                        className="text-[1.4rem] md:text-[1.7rem]"
                        style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                      >
                        採択<span className="border-b-2 border-[hsl(0,0%,8%)]">事例</span>
                      </h3>
                    </div>
                    <Link
                      to="/cases"
                      className="hidden sm:inline-flex items-center gap-2 text-sm text-[hsl(0,0%,35%)] hover:text-[hsl(0,0%,8%)] transition-colors"
                    >
                      採択事例一覧 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        id: '01',
                        industry: '小売業',
                        title: 'POSシステム導入で売上管理を完全デジタル化',
                        result: '月30時間削減',
                        subsidy: '約150万円'
                      },
                      {
                        id: '02',
                        industry: '製造業',
                        title: '倉庫・在庫管理のDX化で物流コストを大幅削減',
                        result: '在庫誤差率95%削減',
                        subsidy: '約300万円'
                      },
                      {
                        id: '03',
                        industry: '飲食業',
                        title: 'レジナビソフト導入で経理業務を月20時間削減',
                        result: '月間売上15%向上',
                        subsidy: '約200万円'
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                      >
                        <Link to="/cases" className="block h-full">
                          <div className="h-full p-5 bg-[hsl(0,0%,97%)] hover:bg-[hsl(0,0%,8%)] group transition-colors duration-300">
                            <div className="flex items-start justify-between mb-3">
                              <span
                                className="text-[1.4rem] font-bold text-[hsl(0,0%,85%)] group-hover:text-[hsl(0,0%,35%)] transition-colors"
                                style={{ fontFamily: 'Georgia, serif' }}
                              >
                                {item.id}
                              </span>
                              <span className="text-[0.6rem] font-medium tracking-[0.12em] uppercase border border-[hsl(0,0%,80%)] text-[hsl(0,0%,45%)] group-hover:text-white/60 group-hover:border-white/30 px-2 py-0.5 transition-colors">
                                {item.industry}
                              </span>
                            </div>
                            <h4
                              className="text-sm font-bold leading-[1.6] mb-3 text-[hsl(0,0%,20%)] group-hover:text-white transition-colors"
                              style={{ fontFamily: '"Noto Serif JP", serif' }}
                            >
                              {item.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[hsl(0,0%,50%)] group-hover:text-white/60 transition-colors">{item.result}</span>
                              <span className="font-medium text-[hsl(0,0%,30%)] group-hover:text-white/80 transition-colors">{item.subsidy}</span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* モバイル用ボタン */}
                  <div className="mt-6 sm:hidden">
                    <Link
                      to="/cases"
                      className="inline-flex items-center gap-2 text-sm text-[hsl(0,0%,35%)] hover:text-[hsl(0,0%,8%)] transition-colors"
                    >
                      採択事例一覧 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════ 申請フロー ══════════════ */}
          <section className="py-24 bg-[hsl(0,0%,97%)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
                  <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Process</span>
                  <h2
                    className="text-[1.9rem] md:text-[2.5rem] leading-tight"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    申請サポートの<span className="border-b-2 border-[hsl(0,0%,8%)]">流れ</span>
                  </h2>
                  <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[hsl(0,0%,88%)]">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                      className={`p-8 bg-white group hover:bg-[hsl(0,0%,8%)] transition-colors duration-300 ${i < steps.length - 1 ? 'border-r border-[hsl(0,0%,88%)]' : ''}`}
                    >
                      <div className="text-[2.5rem] font-bold text-[hsl(0,0%,90%)] group-hover:text-[hsl(0,0%,25%)] mb-4 transition-colors"
                        style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
                      >
                        {step.num}
                      </div>
                      <h3 className="text-base font-bold mb-3 group-hover:text-white transition-colors"
                        style={{ fontFamily: '"Noto Serif JP", serif' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-[hsl(0,0%,50%)] group-hover:text-white/65 leading-[1.9] transition-colors">
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════ 補助金ポイント ══════════════ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                  <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Key Points</span>
                  <h2
                    className="text-[1.9rem] md:text-[2.5rem] leading-tight"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    補助金・助成金申請の
                    <span className="border-b-2 border-[hsl(0,0%,8%)]">ポイント</span>
                  </h2>
                  <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
                </motion.div>
                <motion.p
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                  className="text-[0.95rem] text-[hsl(0,0%,42%)] leading-[2.1]"
                >
                  補助金・助成金の採択は、制度の正確な理解、申請根拠の整理、計画書の説得力に直結します。
                  弊社では、最新の制度動向をリアルタイムで把握し、審査のポイントを踏まえ、
                  加点要素を意識した計画書づくりを徹底します。また、各ソフトの導入メリットを最大化し、
                  企業様の資金調達と生産性向上を両立する最適な補助金・助成金活用案をご提案いたします。
                </motion.p>
              </div>
            </div>
          </section>

          {/* ══════════════ DXパートナー ══════════════ */}
          <section className="py-24 bg-[hsl(0,0%,97%)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Partnership</span>
                    <h2
                      className="text-[1.9rem] md:text-[2.5rem] leading-tight mb-6"
                      style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                    >
                      DX推進の
                      <span className="border-b-2 border-[hsl(0,0%,8%)]">パートナー</span>として
                    </h2>
                    <p className="text-[0.95rem] text-[hsl(0,0%,42%)] leading-[2.1] mb-8">
                      補助金・助成金活用を通じて、エンドユーザー様の企業における在庫管理の効率化、会計業務の簡素化、レジ業務の最適化を実現し、
                      DX推進を支援する「最も頼れるパートナー」として、全程伴走いたします。
                    </p>
                    <ul className="flex flex-col gap-3">
                      {['補助金・助成金の申請代行', '採択後の実績報告まで一貫サポート', '専任担当者によるきめ細かい対応'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[hsl(0,0%,35%)]">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(0,0%,20%)] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                    className="hidden md:block"
                  >
                    <div className="relative">
                      <div className="bg-[hsl(0,0%,8%)] p-10 text-white">
                        <div className="text-xs tracking-[0.2em] text-[hsl(0,0%,55%)] uppercase mb-6">志成コンサル の強み</div>
                        {[
                          { label: '採択実績', val: '高い採択率' },
                          { label: '申請サポート', val: '登録〜報告まで' },
                          { label: '専門領域', val: '補助金・助成金の支援' },
                          { label: 'サービス', val: '完全伴走型' }
                        ].map((item, i) => (
                          <div key={i} className={`flex justify-between items-center py-4 ${i < 3 ? 'border-b border-[hsl(0,0%,18%)]' : ''}`}>
                            <span className="text-sm text-[hsl(0,0%,55%)]">{item.label}</span>
                            <span className="text-sm font-medium text-white tracking-wider">{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════ ソフトウェア製品 ══════════════ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
                <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Software</span>
                <h2
                  className="text-[1.9rem] md:text-[2.5rem]"
                  style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                >
                  主なソフトウェア<span className="border-b-2 border-[hsl(0,0%,8%)]">製品</span>
                </h2>
                <p className="mt-3 text-sm text-[hsl(0,0%,50%)] tracking-wide">
                  当社が提供する主要なソフトウェアソリューションをご紹介
                </p>
                <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[hsl(0,0%,88%)]">
                {softwareProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}
                  >
                    <Link to={product.link} className="block h-full">
                      <div className={`h-full p-8 bg-white hover:bg-[hsl(0,0%,8%)] group transition-colors duration-300 ${index < softwareProducts.length - 1 ? 'border-r border-[hsl(0,0%,88%)]' : ''}`}>
                        <span className="inline-block text-[0.65rem] font-medium tracking-[0.15em] text-[hsl(0,0%,35%)] group-hover:text-white/60 uppercase mb-5 border border-[hsl(0,0%,75%)] group-hover:border-white/30 px-2 py-0.5">
                          {product.tag}
                        </span>
                        <div className="mb-3">
                          <product.icon className="h-7 w-7 text-[hsl(0,0%,30%)] group-hover:text-white transition-colors" />
                        </div>
                        <h3
                          className="text-xl font-bold mb-3 group-hover:text-white transition-colors"
                          style={{ fontFamily: '"Noto Serif JP", serif' }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm text-[hsl(0,0%,50%)] group-hover:text-white/70 transition-colors leading-relaxed">
                          {product.description}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[hsl(0,0%,40%)] group-hover:text-white/70 transition-colors">
                          詳細を見る <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════ CTA ══════════════ */}
          <section className="py-24 bg-[hsl(0,0%,8%)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
                >
                  <div>
                    <div className="w-8 h-[1px] bg-[hsl(0,0%,40%)] mb-6" />
                    <h2
                      className="text-[1.9rem] md:text-[2.5rem] text-white leading-tight"
                      style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.03em' }}
                    >
                      補助金・助成金申請で
                      <br />
                      お困りですか？
                    </h2>
                    <p className="mt-5 text-sm text-[hsl(0,0%,55%)] leading-[2] max-w-[44ch]">
                      補助金・助成金の申請から採択まで、徹底的に支援いたします。
                      お気軽にお問い合わせください。
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 bg-white text-[hsl(0,0%,8%)] px-8 py-4 text-sm font-medium tracking-[0.12em] transition-all duration-200 hover:bg-[hsl(0,0%,90%)] active:scale-[0.97]"
                      style={{ borderRadius: 0 }}
                    >
                      無料相談を申し込む
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
