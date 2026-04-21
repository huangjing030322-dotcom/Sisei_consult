
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import {
  Package,
  Layers,
  Globe,
  Truck,
  ShoppingCart,
  CreditCard,
  Sparkles,
  Wand2,
  Store,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Brain,
  Tablet,
  Tags,
  Users,
  ArrowRight
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' } })
};

const FeaturesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const features = [
    {
      icon: Truck,
      title: '物流管理',
      description: '海外仕入、海外倉庫での集荷や荷積み国際運送、通関手続き、国内配達の業務フロー管理システム。',
      benefits: ['荷物のステータス管理・追跡', '通関手続き書類の自動作成', '諸費用の登録と商品原価の自動計算', '海外輸入業者様の業務効率化']
    },
    {
      icon: Package,
      title: 'WMS倉庫管理システム',
      description: '倉庫内の運営をサポートするシステム。ロケーション管理や入出庫に伴う在庫情報の管理を実現。',
      benefits: ['ロケーション管理と在庫情報の一元管理', 'バーコード読み取り機器による棚卸業務の効率化', '納品書の自動作成', '帳票作成・ラベル発行の自動化']
    },
    {
      icon: Layers,
      title: '一元管理システム',
      description: 'ECモールの受注・在庫・商品を情報一括管理。APIやCSV取り込みで各ECモールと連携。',
      benefits: ['ECモール連携とリアルタイム在庫連動', '自動注文情報ダウンロード', 'ピッキング指示・出荷指示の自動生成', '送り状の一括発行・自動発行']
    },
    {
      icon: Globe,
      title: '貿易管理機能',
      description: 'ECモール連携から発注・受注、出荷管理までの完全な業務フロー管理。',
      benefits: ['ECモール連携機能（API・CSV取り込み）', '注文処理フロー自動化', '出荷管理対応', '販売実績に基づく動的な補充'],
      // image: 'https://horizons-cdn.hostinger.com/32cebae5-65f5-4df0-92b4-2f73f4465cc5/634d03432a1f130cc3a97c168ba98daf.png'
    },
    {
      icon: ShoppingCart,
      title: '発注・受注機能',
      description: '卸先にアカウントを発行し、在庫情報を共有。オンラインで直接注文を受け付け可能。',
      benefits: ['在庫情報の共有とオンライン注文受付', 'ピッキング指示・出荷指示の自動生成', '送り状の自動生成・発行', '出荷指示通りの自動処理']
    },
    {
      icon: CreditCard,
      title: '売掛・回収管理機能',
      description: '倉庫業務における保管料・出荷費用などの売掛金を一元管理し、請求書の自動作成から回収状況の管理までを効率化。',
      benefits: ['請求済・未請求・入金済・未回収のステータス可視化', '取引先別の売掛残高・回収状況のリアルタイム把握', '請求書の自動作成', '入金状況に応じた消込管理']
    },
    {
      icon: Sparkles,
      title: '生成AIによるスマート販売提案',
      description: '生成AI（大規模言語モデルのAPI接続）を活用し、顧客ごとの購買履歴・購買頻度・在庫状況・回転率データをもとに、最適な販売提案文・アクションプランを自動生成。',
      benefits: ['顧客購買履歴・頻度の分析', '在庫状況・回転率データの活用', '自然言語による販売提案の自動生成', 'AIアシスタントによる対話型提案']
    },
    {
      icon: Wand2,
      title: '生成AIによるMD支援',
      description: '生成AI（大規模言語モデルのAPI接続）を活用し、商品マスタ・商品説明・属性情報・販売向け表現などの商品情報を自動生成・自動補正・再構築。',
      benefits: ['商品情報の自動生成・自動補正', '表記ゆれの解消', '情報不足の根本解決', 'MD作業の標準化・高度化']
    },
    {
      icon: Store,
      title: '販売店管理',
      description: '複数店舗・複数拠点を一つの管理画面で統合管理し、本部・エリア・店舗ごとに最適な権限設計を実現。',
      benefits: ['複数店舗・複数拠点の統合管理', '本部・エリア・店舗ごとの権限設計', '運営状況のリアルタイム把握', '統制と現場の自律性の両立']
    }
  ];

  const aiKeieiFeatures = [
    {
      icon: ShoppingCart,
      title: '顧客管理システム',
      description: '基本ログイン機能、情報編集処理、お気に入り設定、便利なモジュール式カスタム顧客設定',
      benefits: ['ログイン機能', '情報編集処理', 'お気に入り設定', 'モジュール式カスタム設定']
    },
    {
      icon: TrendingUp,
      title: '供給管理',
      description: '販売予測、市場動向、過去データに基づき、将来の原材料および生産能力の需要計画を策定',
      benefits: ['販売予測', '市場動向分析', '長期・短期供給ニーズの区別', '事前準備によるリスク軽減']
    },
    {
      icon: BarChart3,
      title: '在庫・物流のスマート管理',
      description: 'データ駆動とシステム連携により、需給の精密なマッチング、在庫コストの最小化、物流効率の最大化',
      benefits: ['需給の精密なマッチング', '在庫コストの最小化', '物流効率の最大化', 'サプライチェーン競争力の向上']
    },
    {
      icon: Sparkles,
      title: '製品情報生成の最適化',
      description: 'AIによって商品タイトルと説明文を自動生成し、精緻化・専門化',
      benefits: ['商品タイトル自動生成', '説明文の精緻化・専門化', '断片化商品の分類・管理', '一元管理の実現']
    },
    {
      icon: PieChart,
      title: '会計・財務・経営可視化',
      description: '取引条件やロケーション、入出庫、在庫分析、納品、配送業者管理等を実施',
      benefits: ['供給チェーン全体の効率化', '在庫コストの削減', '配送精度の向上', 'ビジネス競争力の強化']
    },
    {
      icon: LineChart,
      title: '受注データの自動集計',
      description: '人気・売れ筋商品を自動集計し、市場の変化に応じて科学的に営業売上を向上',
      benefits: ['売れ筋商品の自動把握', '市場変化への対応', '営業売上の科学的向上', 'データに基づく意思決定']
    },
    {
      icon: Brain,
      title: 'AIモデルによるトレンド分析',
      description: '市場向け大規模モデルを用いて多次元で経営持続可能性を分析',
      benefits: ['多次元経営分析', '企業経営圧力の緩和', '持続可能性の評価', 'データドリブンな戦略立案']
    }
  ];

  const regiNaviFeatures = [
    {
      icon: Tablet,
      title: 'タブレットPOSレジ管理',
      description: 'タブレットアプリによる直感的な操作体験。レジ管理、会員管理、商品管理、在庫管理をシームレスに統合',
      benefits: ['直感的な操作体験', 'レジ管理の効率化', '会員管理の一元化', '商品在庫の一体管理']
    },
    {
      icon: Package,
      title: '在庫管理',
      description: 'リアルタイム在庫管理で業務効率化。棚卸管理、仕入先管理、入出庫管理を完備',
      benefits: ['リアルタイム在庫管理', '棚卸業務の効率化', '仕入先管理', '入出庫管理の自動化']
    },
    {
      icon: Tags,
      title: '商品管理',
      description: '商品登録・分類・価格設定・ロス管理を一元化。効率的な商品情報管理',
      benefits: ['商品登録の効率化', '分類・価格設定の一元化', 'ロス管理の最適化', '業務負担の軽減']
    },
    {
      icon: Users,
      title: '販売分析と会員レポート',
      description: '販売状況を自動集計し、一般客の会員化を促進。予約機能と連動',
      benefits: ['販売データの自動集計', '会員化の促進', '予約機能との連携', '消費習慣の多角的分析']
    },
    {
      icon: Sparkles,
      title: '生成AIスマート販売提案',
      description: '高級レポートの販売データ分析機能で、日別・月別・商品別の売上推移を可視化',
      benefits: ['売上推移の可視化', 'データに基づく経営判断', '販売戦略の最適化', 'AI活用の営業支援']
    },
    {
      icon: CreditCard,
      title: 'その他の機能',
      description: '多様な決済方法対応、受発注管理、経営テンプレートでビジネスを強化',
      benefits: ['多様な決済方法対応', '受発注管理', '経営テンプレートの提供', '包括的なビジネス支援']
    }
  ];

  const SectionHeader = ({ tag, title, sub }) => (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
      <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-4">{tag}</span>
      <h2
        className="text-[1.9rem] md:text-[2.5rem]"
        style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.04em' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && <p className="mt-3 text-sm text-[hsl(0,0%,50%)] tracking-wide max-w-3xl">{sub}</p>}
      <div className="mt-5 h-[1px] w-full bg-[hsl(0,0%,88%)]" />
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>ソフト機能 - 志成コンサル</title>
        <meta name="description" content="E-manageの主要機能をご紹介。注文管理、リアルタイム追跡、データ分析、在庫管理、通関手続き、レポート生成など、物流業務を効率化する機能が満載です。" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* ══════════════ HERO ══════════════ */}
          <section className="relative py-20 bg-[hsl(0,0%,97%)] border-b border-[hsl(0,0%,88%)]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[hsl(0,0%,8%)]" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible"
                className="max-w-3xl pl-8"
              >
                <span className="inline-block text-[hsl(0,0%,35%)] text-xs tracking-[0.2em] font-medium uppercase mb-5 bg-[hsl(0,0%,8%)]/8 px-3 py-1">
                  Software Features
                </span>
                <h1
                  className="text-[2.2rem] md:text-[3rem] leading-tight mb-4"
                  style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', letterSpacing: '0.03em' }}
                >
                  <span className="border-b-2 border-[hsl(0,0%,8%)]">イーマネージ</span>の機能
                </h1>
                <p className="text-[0.95rem] text-[hsl(0,0%,45%)] leading-[2] max-w-[62ch]">
                  物流業務を効率化し、ビジネスの成長を加速させる、包括的な機能セットをご提供します。
                </p>
              </motion.div>
            </div>
          </section>

          {/* ══════════════ イーマネージ ══════════════ */}
          <section className="py-24 bg-white" id="emanage">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}
                    className="h-full"
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════ スマ経営 ══════════════ */}
          <section className="py-24 bg-[hsl(0,0%,97%)]" id="ai-keiei">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                tag="AI / 経営"
                title='スマ<span style="border-bottom: 2px solid hsl(0,0%,8%)">経営</span>'
                sub="AIを活用した経営支援機能で、ビジネスを次のレベルへ"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {aiKeieiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}
                    className="h-full"
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════ レジナビ ══════════════ */}
          <section className="py-24 bg-white" id="regi-navi">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                tag="POS / 売上"
                title='レジ<span style="border-bottom: 2px solid hsl(0,0%,8%)">ナビ</span>'
                sub="POS・受注管理・売上管理の専門家"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {regiNaviFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}
                    className="h-full"
                  >
                    <FeatureCard {...feature} />
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
                      className="text-[1.9rem] md:text-[2.4rem] text-white leading-tight"
                      style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.03em' }}
                    >
                      すべてのソフトを
                      <br />
                      無料でお試しください
                    </h2>
                    <p className="mt-5 text-sm text-[hsl(0,0%,55%)] leading-[2] max-w-[44ch]">
                      14日間の無料トライアルで、すべての機能をお試しいただけます。クレジットカード登録は不要です。
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-[0.1em] bg-white text-[hsl(0,0%,8%)] hover:bg-[hsl(0,0%,90%)] transition-colors active:scale-[0.97]"
                      style={{ borderRadius: 0 }}
                    >
                      無料トライアルを始める
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="/about"
                      className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-[0.1em] border border-[hsl(0,0%,35%)] text-[hsl(0,0%,75%)] hover:border-white hover:text-white transition-colors active:scale-[0.97]"
                      style={{ borderRadius: 0 }}
                    >
                      詳しく見る
                    </a>
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

export default FeaturesPage;
