
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ArrowRight, ArrowLeft, CheckCircle2, TrendingUp, Clock, Building2, Tag } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

const cases = [
  {
    id: '01',
    industry: '小売業',
    company: '大阪府 小売業（従業員18名）',
    software: 'レジナビ',
    tag: 'POS / 売上管理',
    title: 'POSシステム導入で売上管理を完全デジタル化',
    challenge: '手書きの売上管理・在庫カウントに毎日3時間以上を費やしており、月末の集計作業に膨大な労力がかかっていました。また、リアルタイムの在庫状況が把握できず、欠品による機会損失も頻発していました。',
    solution: 'IT導入補助金を活用してレジナビを導入。POSレジとの連携により売上・在庫データをリアルタイムで可視化。補助金申請から交付まで志成コンサルが一貫サポートしました。',
    results: [
      { label: '補助金採択額', value: '約150万円' },
      { label: '売上管理工数', value: '月30時間削減' },
      { label: '欠品発生率', value: '80%以上改善' }
    ],
    comment: '複雑な申請書類も全部おまかせできて、採択まで本当に安心でした。おかげで本業に集中できました。',
    period: '申請〜採択：約3ヶ月',
    subsidy: 'IT導入補助金 通常枠'
  },
  {
    id: '02',
    industry: '製造業',
    company: '兵庫県 製造業（従業員45名）',
    software: 'イーマネージ',
    tag: '在庫 / 物流管理',
    title: '倉庫・在庫管理のDX化で物流コストを大幅削減',
    challenge: 'Excel管理による在庫の重複・ミスが多発し、倉庫スタッフの作業効率が著しく低下していました。複数拠点間の在庫情報共有にも1日以上のタイムラグがあり、出荷遅延が常態化していました。',
    solution: 'イーマネージを導入し、複数倉庫のリアルタイム在庫管理・ピッキング最適化を実現。IT導入補助金の申請戦略設計から書類作成まで全面支援。',
    results: [
      { label: '補助金採択額', value: '約300万円' },
      { label: '在庫誤差率', value: '95%削減' },
      { label: '出荷リードタイム', value: '2日→当日出荷' }
    ],
    comment: '審査のポイントをきちんと教えてもらえたので、初めての補助金申請でも自信を持って臨めました。',
    period: '申請〜採択：約2ヶ月',
    subsidy: 'IT導入補助金 デジタル化基盤導入枠'
  },
  {
    id: '03',
    industry: '飲食業',
    company: '京都府 飲食チェーン（3店舗展開）',
    software: 'レジナビ',
    tag: 'POS / 売上管理',
    title: 'レジナビソフト導入で経理業務を月20時間削減',
    challenge: '飲食店 3 店舗の注文対応が手書き伝票とレジ手入力に依存し、注文ミス・会計ミスが頻発。ホールスタッフの業務負担が過大で接客に充てる時間が減少するほか、売上集計と商品別売上分析に毎日長時間を費やし、リアルタイムな経営判断が難しい状況が続いていました。',
    solution: '飲食店向けオーダーシステムを全店舗に導入し、注文から会計・売上自動集計まで一括管理を実現。IT 導入補助金申請では業務効率化と接客品質向上を軸に計画書を作成し、補助金採択を達成しました。',
    results: [
      { label: '補助金採択額', value: '約200万円' },
      { label: '月間売上', value: '15%向上' },
      { label: '人工コスト', value: '30%改善' }
    ],
    comment: '補助金の知識がゼロの状態から始めましたが、志成コンサルさんが手取り足取り教えてくださって本当に助かりました。',
    period: '申請〜採択：約2.5ヶ月',
    subsidy: 'IT導入補助金 通常枠'
  },
  {
    id: '04',
    industry: 'EC事業者',
    company: '東大阪市 EC事業者（従業員12名）',
    software: 'イーマネージ',
    tag: 'EC / 一元管理',
    title: 'EC複数モール在庫を一元管理し、受注処理ミスをゼロに',
    challenge: 'Amazon・楽天・Yahoo!の3モールを運営していたが、在庫管理が各モールで分散。在庫の二重販売・過剰在庫が頻発し、クレーム対応に多大な時間と費用がかかっていました。',
    solution: 'イーマネージのEC一元管理機能を導入し、全モールの在庫・受注をリアルタイム同期。補助金申請書では導入効果を定量的に示す資料を丁寧に作成し、スムーズに採択。',
    results: [
      { label: '補助金採択額', value: '約180万円' },
      { label: '受注ミス', value: '完全ゼロ達成' },
      { label: '受注処理時間', value: '1/3に短縮' }
    ],
    comment: '申請書の書き方から実績報告まで丸ごとサポートしてもらい、社内負担が最小限でした。',
    period: '申請〜採択：約3ヶ月',
    subsidy: 'IT導入補助金 デジタル化基盤導入枠'
  },
  {
    id: '05',
    industry: 'サービス業',
    company: '奈良県 美容サロン（2店舗）',
    software: 'レジナビ',
    tag: 'POS / 顧客管理',
    title: '顧客管理・予約連携で売上15%アップを達成',
    challenge: '紙の顧客台帳と予約ノートによる管理で、リピーター施策がほぼ手つかず。売上データも月末にならないと集計できず、効果的な販促活動ができていませんでした。',
    solution: 'レジナビで顧客データ・売上・予約を一元管理。リピーター分析とDM配信機能を活用した販促施策を実施。IT導入補助金申請では顧客管理の重要性を訴求した計画書を作成。',
    results: [
      { label: '補助金採択額', value: '約120万円' },
      { label: '年間売上', value: '15%向上' },
      { label: 'リピート率', value: '40%以上改善' }
    ],
    comment: '補助金が使えるとは知らなかったので、志成コンサルさんに相談して本当によかったです。',
    period: '申請〜採択：約2ヶ月',
    subsidy: 'IT導入補助金 通常枠'
  },
  {
    id: '06',
    industry: '卸売業',
    company: '堺市 卸売業（従業員60名）',
    software: 'スマ経営',
    tag: 'AI / 経営分析',
    title: 'AIによる経営可視化で意思決定スピードが2倍に',
    challenge: '月次の経営会議に必要な数字をExcelで集計するだけで2日かかり、経営判断が常に後手に回っていました。各部門のKPI管理も属人的で、経営層へのレポーティングが不透明でした。',
    solution: 'スマ経営のAIダッシュボードで全社KPIをリアルタイム可視化。IT導入補助金の申請では経営改善効果を定量的に訴求し、高得点で採択を実現。',
    results: [
      { label: '補助金採択額', value: '約350万円' },
      { label: 'データ集計時間', value: '2日→2時間' },
      { label: '意思決定速度', value: '2倍に向上' }
    ],
    comment: '採択率が高いと聞いていましたが、本当にスムーズに採択いただけて感謝しています。',
    period: '申請〜採択：約2.5ヶ月',
    subsidy: 'IT導入補助金 デジタル化基盤導入枠'
  }
];

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3, ease: 'easeIn' } })
};

const CasesPage = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (newIndex) => {
    const bounded = (newIndex + cases.length) % cases.length;
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(bounded);
  };

  const c = cases[current];

  return (
    <>
      <Helmet>
        <title>採択事例 | 志成コンサル</title>
        <meta name="description" content="志成コンサルのIT導入補助金申請支援による採択事例をご紹介します。在庫管理・会計・POSシステム導入での補助金活用成功事例集。" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* ══════ ページヘッダー ══════ */}
          <section className="relative pt-20 pb-16 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(hsl(0,0%,0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,0%) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[hsl(0,0%,8%)] z-10" />

            {/* 右装飾テキスト */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
              <span
                className="text-[7rem] font-bold text-[hsl(0,0%,95%)] select-none"
                style={{ fontFamily: '"Noto Serif JP", serif', writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
              >
                採択事例
              </span>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl pl-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                  <span className="inline-block bg-[hsl(0,0%,8%)] text-white text-[0.68rem] tracking-[0.18em] px-3 py-1 mb-6 font-medium uppercase">
                    Success Cases
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp} initial="hidden" animate="visible" custom={1}
                  className="text-[2rem] md:text-[2.8rem] leading-[1.25] mb-6"
                  style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', fontWeight: 900, letterSpacing: '0.03em' }}
                >
                  補助金・助成金
                  <br />
                  <span className="border-b-2 border-[hsl(0,0%,8%)]">採択事例集</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp} initial="hidden" animate="visible" custom={2}
                  className="text-[0.9rem] text-[hsl(0,0%,45%)] leading-[2] max-w-[50ch]"
                >
                  志成コンサルがサポートした企業様の補助金・助成金採択事例をご紹介します。
                  業種・規模を問わず、多くの中小企業様の補助金活用を実現してまいりました。
                </motion.p>
              </div>
            </div>
          </section>

          {/* ══════ 統計バナー ══════ */}
          <section className="border-t border-b border-[hsl(0,0%,88%)] bg-[hsl(0,0%,97%)]">
            <div className="grid grid-cols-3 divide-x divide-[hsl(0,0%,88%)]">
              {[
                { num: '6業種', label: '採択事例' },
                { num: '高採択率', label: '採択サポート実績' },
                { num: '全程伴走', label: '申請〜報告まで' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="flex flex-col items-center justify-center py-10 px-4 text-center"
                >
                  <div
                    className="text-xl md:text-2xl font-bold mb-1 text-[hsl(0,0%,8%)]"
                    style={{ fontFamily: '"Noto Serif JP", serif' }}
                  >
                    {item.num}
                  </div>
                  <div className="text-xs text-[hsl(0,0%,50%)] tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ══════ 事例スライダー ══════ */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Case Studies</span>
                <div className="flex items-end justify-between flex-wrap gap-4">
                  <h2
                    className="text-[1.7rem] md:text-[2.2rem]"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    導入<span className="border-b-2 border-[hsl(0,0%,8%)]">成功事例</span>
                  </h2>
                  {/* ページ番号 */}
                  <div className="flex items-center gap-3 pb-1">
                    <span className="text-sm text-[hsl(0,0%,30%)] font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                      {String(current + 1).padStart(2, '0')}
                    </span>
                    <div className="w-16 h-[1px] bg-[hsl(0,0%,75%)] relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[hsl(0,0%,8%)] transition-all duration-300"
                        style={{ width: `${((current + 1) / cases.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-[hsl(0,0%,65%)]" style={{ fontFamily: 'Georgia, serif' }}>
                      {String(cases.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
              </motion.div>

              {/* スライドカード */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[hsl(0,0%,88%)]">

                      {/* 左カラム：案件情報 */}
                      <div className="p-8 md:p-10 bg-white border-r border-[hsl(0,0%,88%)]">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-[2.5rem] font-bold text-[hsl(0,0%,90%)]"
                            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
                          >
                            {c.id}
                          </span>
                          <div>
                            <span className="inline-block text-[0.65rem] font-medium tracking-[0.15em] text-[hsl(0,0%,35%)] uppercase border border-[hsl(0,0%,75%)] px-2 py-0.5">
                              {c.tag}
                            </span>
                            <div className="text-xs text-[hsl(0,0%,50%)] mt-1">{c.industry}</div>
                          </div>
                        </div>

                        <h3
                          className="text-[1.2rem] md:text-[1.4rem] font-bold leading-[1.5] mb-6"
                          style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.02em' }}
                        >
                          {c.title}
                        </h3>

                        <div className="flex flex-col gap-1 mb-8 text-xs text-[hsl(0,0%,45%)]">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-3.5 w-3.5 shrink-0" />
                            <span>{c.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Tag className="h-3.5 w-3.5 shrink-0" />
                            <span>{c.subsidy}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 shrink-0" />
                            <span>{c.period}</span>
                          </div>
                        </div>

                        {/* 課題 */}
                        <div className="mb-6">
                          <div className="text-[0.7rem] tracking-[0.18em] text-[hsl(0,0%,40%)] uppercase font-medium mb-2">課題</div>
                          <p className="text-[0.875rem] text-[hsl(0,0%,40%)] leading-[1.95]">{c.challenge}</p>
                        </div>

                        {/* 解決策 */}
                        <div>
                          <div className="text-[0.7rem] tracking-[0.18em] text-[hsl(0,0%,40%)] uppercase font-medium mb-2">解決策</div>
                          <p className="text-[0.875rem] text-[hsl(0,0%,40%)] leading-[1.95]">{c.solution}</p>
                        </div>
                      </div>

                      {/* 右カラム：成果 */}
                      <div className="p-8 md:p-10 bg-[hsl(0,0%,97%)] flex flex-col justify-between">
                        <div>
                          <div className="text-[0.7rem] tracking-[0.18em] text-[hsl(0,0%,40%)] uppercase font-medium mb-6">導入効果</div>
                          <div className="flex flex-col gap-4 mb-8">
                            {c.results.map((r, i) => (
                              <div key={i} className="flex items-center justify-between py-4 border-b border-[hsl(0,0%,88%)]">
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="h-4 w-4 text-[hsl(0,0%,35%)]" />
                                  <span className="text-sm text-[hsl(0,0%,45%)]">{r.label}</span>
                                </div>
                                <span
                                  className="text-sm font-bold text-[hsl(0,0%,8%)] tracking-wider"
                                  style={{ fontFamily: '"Noto Serif JP", serif' }}
                                >
                                  {r.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* お客様の声 */}
                          <div className="border-l-2 border-[hsl(0,0%,8%)] pl-4 py-2">
                            <div className="text-[0.68rem] tracking-[0.15em] text-[hsl(0,0%,50%)] uppercase mb-2">お客様の声</div>
                            <p className="text-[0.875rem] text-[hsl(0,0%,35%)] leading-[1.85] italic">
                              「{c.comment}」
                            </p>
                            <div className="mt-2 text-xs text-[hsl(0,0%,55%)]">— {c.company}</div>
                          </div>
                        </div>

                        {/* 導入ソフト */}
                        <div className="mt-8 pt-6 border-t border-[hsl(0,0%,88%)]">
                          <div className="text-[0.68rem] tracking-[0.15em] text-[hsl(0,0%,50%)] uppercase mb-2">導入ソフトウェア</div>
                          <div className="inline-block bg-[hsl(0,0%,8%)] text-white text-sm font-medium tracking-wider px-4 py-2"
                            style={{ fontFamily: '"Noto Serif JP", serif' }}
                          >
                            {c.software}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ナビゲーションボタン */}
              <div className="mt-8 flex items-center justify-between">
                {/* ドット */}
                <div className="flex items-center gap-2">
                  {cases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`w-2 h-2 transition-all duration-200 ${
                        i === current ? 'bg-[hsl(0,0%,8%)] w-6' : 'bg-[hsl(0,0%,78%)] hover:bg-[hsl(0,0%,50%)]'
                      }`}
                      aria-label={`事例 ${i + 1}`}
                    />
                  ))}
                </div>

                {/* 矢印ボタン */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(current - 1)}
                    className="flex items-center justify-center w-11 h-11 border border-[hsl(0,0%,80%)] text-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,8%)] hover:text-white hover:border-[hsl(0,0%,8%)] transition-all duration-200"
                    aria-label="前の事例"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => go(current + 1)}
                    className="flex items-center justify-center w-11 h-11 border border-[hsl(0,0%,80%)] text-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,8%)] hover:text-white hover:border-[hsl(0,0%,8%)] transition-all duration-200"
                    aria-label="次の事例"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* ══════ 全事例インデックス ══════ */}
          <section className="py-20 bg-[hsl(0,0%,97%)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">All Cases</span>
                <h2
                  className="text-[1.7rem] md:text-[2.2rem]"
                  style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                >
                  事例<span className="border-b-2 border-[hsl(0,0%,8%)]">一覧</span>
                </h2>
                <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[hsl(0,0%,88%)]">
                {cases.map((item, i) => (
                  <motion.button
                    key={i}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 3}
                    onClick={() => { go(i); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                    className={`text-left p-6 group transition-all duration-300 ${
                      i % 3 < 2 ? 'border-r border-[hsl(0,0%,88%)]' : ''
                    } ${i < cases.length - (cases.length % 3 || 3) ? 'border-b border-[hsl(0,0%,88%)]' : ''} ${
                      i === current
                        ? 'bg-[hsl(0,0%,8%)]'
                        : 'bg-white hover:bg-[hsl(0,0%,8%)]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`text-[1.6rem] font-bold transition-colors ${
                          i === current ? 'text-white' : 'text-[hsl(0,0%,88%)] group-hover:text-[hsl(0,0%,35%)]'
                        }`}
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {item.id}
                      </span>
                      <span
                        className={`text-[0.62rem] font-medium tracking-[0.12em] uppercase border px-2 py-0.5 transition-colors ${
                          i === current
                            ? 'text-white border-white/40'
                            : 'text-[hsl(0,0%,45%)] border-[hsl(0,0%,80%)] group-hover:text-white/60 group-hover:border-white/30'
                        }`}
                      >
                        {item.industry}
                      </span>
                    </div>
                    <h3
                      className={`text-sm font-bold leading-[1.6] mb-2 transition-colors ${
                        i === current ? 'text-white' : 'text-[hsl(0,0%,20%)] group-hover:text-white'
                      }`}
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs leading-[1.8] transition-colors ${
                        i === current ? 'text-white/70' : 'text-[hsl(0,0%,50%)] group-hover:text-white/60'
                      }`}
                    >
                      {item.company}
                    </p>
                    <div className={`mt-4 flex items-center gap-1 text-xs font-medium transition-colors ${
                      i === current ? 'text-white' : 'text-[hsl(0,0%,45%)] group-hover:text-white/70'
                    }`}>
                      詳細を見る <ArrowRight className="h-3 w-3" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* ══════ CTA ══════ */}
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
                      御社でも
                      <br />
                      補助金を活用しませんか？
                    </h2>
                    <p className="mt-5 text-sm text-[hsl(0,0%,55%)] leading-[2] max-w-[44ch]">
                      まずは無料相談で、御社に最適な補助金活用プランをご提案します。
                      採択事例のような成果を、ぜひ御社でも実現しましょう。
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

export default CasesPage;
