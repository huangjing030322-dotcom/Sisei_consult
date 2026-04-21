import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ShieldCheck, Cpu, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: '高い採択率と信頼',
      description: '官公庁の審査基準を深く理解し、精緻な申請書類を作成。お客様の挑戦を確実な成果へと導きます。'
    },
    {
      icon: Cpu,
      title: '技術への深い造詣',
      description: '単なる書類作成代行ではありません。AIシステムアーキテクチャを理解した技術コンサルタントが、事業の革新性を正確に言語化します。'
    },
    {
      icon: FileText,
      title: '徹底した伴走支援',
      description: '交付申請から効果報告、確定検査まで、複雑な行政手続きをトータルサポート。お客様は本来の事業開発に集中できる環境を提供します。'
    },
    {
      icon: TrendingUp,
      title: 'DXによる競争力強化',
      description: '補助金の取得を支援するのは、より低価格で当社のAIソフトウェアを導入していただくため、AI導入を通じた業務効率化と新規事業創出により、企業の長期的かつ持続的な成長を支援します。'
    }
  ];

  const companyInfo = [
    { label: '社名', value: '志成コンサル（shiseiConsult）' },
    { label: '所在地', value: '〒102-0093 東京都千代田区平河町1丁目8番２号半蔵門パレス8階' },
    { label: '電話番号', value: '03-6205-6789' },
    { label: 'メール', value: '******@*****.***.jp' },
    { label: '営業時間', value: '9:00〜18:00' },
    { label: '事業内容', value: '補助金・助成金申請支援コンサルティング' }
  ];

  return (
    <>
      <Helmet>
        <title>企業情報 - 志成コンサル</title>
        <meta name="description" content="志成コンサルは、AI技術の社会実装を支援するスペシャリスト集団です。補助金申請からDX戦略立案まで、技術と行政の架け橋として企業の革新をサポートします。" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* ══════════════ HERO ══════════════ */}
          <section className="relative min-h-[62vh] flex items-center overflow-hidden bg-[hsl(0,0%,8%)]">
            {/* 背景グリッド */}
            <div className="absolute inset-0 z-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
            {/* 右側装飾テキスト */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
              <span
                className="text-[6rem] font-bold text-[hsl(0,0%,12%)] select-none"
                style={{ fontFamily: '"Noto Serif JP", serif', writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
              >
                企業情報
              </span>
            </div>

            {/* 白サイドライン */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
              <div className="max-w-3xl pl-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                  <span className="inline-block bg-white text-[hsl(0,0%,8%)] text-[1.36rem] tracking-[0.18em] px-5 py-2 mb-8 font-medium uppercase">
                    About Us
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp} initial="hidden" animate="visible" custom={1}
                  className="text-[2.2rem] md:text-[3rem] lg:text-[3.2rem] text-white leading-[1.25] mb-6"
                  style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', letterSpacing: '0.03em' }}
                >
                  イノベーションと事業成長を、
                  <br />
                  <span className="border-b-2 border-[hsl(0,0%,60%)]">確固たる補助金・助成金</span>
                  <br />
                  <span className="border-b-2 border-[hsl(0,0%,60%)]">で加速させる</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp} initial="hidden" animate="visible" custom={2}
                  className="text-[0.95rem] text-white/55 leading-[2.1] max-w-[56ch]"
                >
                  志成コンサルは、中小企業の挑戦を全力で支援いたします。
                  当社は認定経営革新等支援機関として、各中小企業の多岐にわたる事業展開をサポートし、持続可能な社会の発展と豊かさの実現に貢献してまいります。
                </motion.p>
              </div>
            </div>
          </section>

          {/* ══════════════ ミッション ══════════════ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                  <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-5">Mission</span>
                  <h2
                    className="text-[1.9rem] md:text-[2.4rem] leading-tight mb-2"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    私たちの<span className="border-b-2 border-[hsl(0,0%,8%)]">ミッション</span>
                  </h2>
                  <div className="h-[1px] w-full bg-[hsl(0,0%,88%)] mb-8" />
                  <p className="text-[1.25rem] text-[hsl(0,0%,42%)] leading-[2.1] mb-6">
                    当社は認定経営革新等支援機関として、中小企業の経営課題解決を軸にコンサルティングサービスを提供しております。
                  </p>
                  <p className="text-[1.25rem] text-[hsl(0,0%,42%)] leading-[2.1]">
                    製造業をはじめ、卸売業、小売業、飲食・各種サービス業など、業種を問わず多岐にわたる分野の企業様を支援してまいりました。

                  </p>
                  <p className="text-[1.25rem] text-[hsl(0,0%,42%)] leading-[2.1] mb-6">
                    多くの経営者の方々と接する中で、独自のアイデアと高い技術力を活かしたものづくりに取り組み、社会を豊かにするサービスを創出し続ける職人気質に深く感銘を受け、心より尊敬しております。
                  </p>
                  <p className="text-[1.25rem] text-[hsl(0,0%,42%)] leading-[2.1]">
                    当社の役割は、お客様が持つ事業価値や想いを客観的な視点で整理し、実効性のある事業モデルへと具体化することです。
                  </p>
                  <p className="text-[1.25rem] text-[hsl(0,0%,42%)] leading-[2.1] mb-6">お客様の事業に真摯に向き合い、自身の業務に責任と誇りを持ち、十分に応えられない業務はお引き受けいたしません。
                  </p>
                  <p className="text-[1.25rem] text-[hsl(0,0%,42%)] leading-[2.1]">これまで積み重ねてきた豊富な支援実績と経験を活かし、各企業の事業特性に合わせた現実的かつ実践的な支援を行ってまいります。
                  </p>

                </motion.div>

                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                >
                  <div className="relative">
                    <img
                      src="https://i.ibb.co/r2WtQ1kk/pexels-thirdman-7651920.jpg"
                      alt="コンサルティング風景"
                      className="w-full h-[400px] object-cover"
                    />
                    {/* 装飾枠 */}
                    <div className="absolute -bottom-3 -right-3 w-full h-full border border-[hsl(0,0%,8%)] -z-10" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════ 会社概要 ══════════════ */}
          <section className="py-24 bg-[hsl(0,0%,97%)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                  <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Company</span>
                  <h2
                    className="text-[1.9rem] md:text-[2.5rem]"
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                  >
                    会社<span className="border-b-2 border-[hsl(0,0%,8%)]">概要</span>
                  </h2>
                  <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
                </motion.div>

                <div className="border border-[hsl(0,0%,88%)]">
                  {companyInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index * 0.3}
                      className={`flex flex-col sm:flex-row ${index < companyInfo.length - 1 ? 'border-b border-[hsl(0,0%,88%)]' : ''}`}
                    >
                      <div className="w-full sm:w-36 bg-[hsl(0,0%,8%)] text-white px-6 py-4 text-xs font-semibold tracking-[0.1em] flex items-center shrink-0">
                        {item.label}
                      </div>
                      <div className="px-6 py-4 text-sm text-[hsl(0,0%,30%)] leading-[1.9] flex items-center">
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════ 価値観 ══════════════ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
                <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">Values</span>
                <h2
                  className="text-[1.9rem] md:text-[2.5rem]"
                  style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
                >
                  私たちの<span className="border-b-2 border-[hsl(0,0%,8%)]">提供価値</span>
                </h2>
                <p className="mt-3 text-sm text-[hsl(0,0%,50%)] tracking-wide max-w-2xl">
                  高度な技術理解と行政実務の融合により、最高品質の支援をお約束します。
                </p>
                <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[hsl(0,0%,88%)]">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index * 0.5}
                    className={`p-10 bg-white group hover:bg-[hsl(0,0%,8%)] transition-colors duration-300 ${
                      index % 2 === 0 ? 'border-r border-[hsl(0,0%,88%)]' : ''
                    } ${index < 2 ? 'border-b border-[hsl(0,0%,88%)]' : ''}`}
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center bg-[hsl(0,0%,8%)]/8 group-hover:bg-white/10 transition-colors mb-6">
                      <value.icon className="h-5 w-5 text-[hsl(0,0%,20%)] group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-4 group-hover:text-white transition-colors"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-[0.9rem] text-[hsl(0,0%,48%)] group-hover:text-white/60 leading-[2] transition-colors">
                      {value.description}
                    </p>
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
                      共に、より高く、
                      <br />
                      より遠い未来へ
                    </h2>
                    <p className="mt-5 text-sm text-[hsl(0,0%,50%)] leading-[2] max-w-[44ch]">
                      補助金の対象になるかどうかの診断から、技術的な機能定義の整理まで、まずは無料でご相談ください。
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-[0.12em] text-[hsl(0,0%,8%)] bg-white transition-all duration-200 hover:bg-[hsl(0,0%,90%)] active:scale-[0.97]"
                      style={{ borderRadius: 0 }}
                    >
                      無料診断を申し込む
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

export default AboutPage;
