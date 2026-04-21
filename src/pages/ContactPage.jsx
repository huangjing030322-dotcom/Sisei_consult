import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: '本社所在地',
      content: '〒102-0093\n東京都千代田区平河町1丁目8番２号半蔵門パレス8階'
    },
    {
      icon: Phone,
      title: '電話番号',
      content: '03-6205-6789\n（平日 9:00-18:00）'
    },
    {
      icon: Mail,
      title: 'メールアドレス',
      content: '******@*****.***.jp'
    },
    {
      icon: Clock,
      title: '営業時間',
      content: '平日 9:00-18:00\n（土日祝日を除く）'
    }
  ];

  return (
    <>
      <Helmet>
        <title>お問い合わせ - 志成コンサル</title>
        <meta name="description" content="ソフトに関するお問い合わせはこちらから。製品デモのご依頼、導入のご相談など、お気軽にお問い合わせください。" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* ══════════════ HERO ══════════════ */}
          <section className="relative py-20 bg-[hsl(0,0%,8%)] border-b border-[hsl(0,0%,15%)]">
            {/* 背景グリッド */}
            <div className="absolute inset-0 z-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white z-10" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible"
                className="max-w-3xl pl-8"
              >
                <span className="inline-block text-white text-xs tracking-[0.2em] font-medium uppercase mb-5 bg-white/10 px-3 py-1">
                  Contact Us
                </span>
                <h1
                  className="text-[2.2rem] md:text-[3rem] leading-tight mb-4 text-white"
                  style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', letterSpacing: '0.03em' }}
                >
                  お<span className="border-b-2 border-[hsl(0,0%,60%)]">問い合わせ</span>
                </h1>
                <p className="text-[0.95rem] text-white/50 leading-[2] max-w-[60ch]">
                  申請とソフトに関するご質問、製品デモのご依頼、申請とソフト導入のご相談など、お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
                </p>
              </motion.div>
            </div>
          </section>

          {/* ══════════════ フォーム + 連絡先 ══════════════ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* 左：フォーム */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                  <div className="mb-8">
                    <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-3">Form</span>
                    <h2
                      className="text-[1.5rem] md:text-[1.8rem]"
                      style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.03em' }}
                    >
                      お問い合わせ<span className="border-b-2 border-[hsl(0,0%,8%)]">フォーム</span>
                    </h2>
                    <div className="mt-4 h-[1px] bg-[hsl(0,0%,88%)]" />
                  </div>

                  <div className="border border-[hsl(0,0%,88%)] p-8">
                    <ContactForm />
                  </div>
                </motion.div>

                {/* 右：連絡先情報 */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                >
                  <div className="mb-8">
                    <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-3">Info</span>
                    <h2
                      className="text-[1.5rem] md:text-[1.8rem]"
                      style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.03em' }}
                    >
                      お問い合わせ<span className="border-b-2 border-[hsl(0,0%,8%)]">先</span>
                    </h2>
                    <div className="mt-4 h-[1px] bg-[hsl(0,0%,88%)]" />
                  </div>

                  <div className="border border-[hsl(0,0%,88%)] divide-y divide-[hsl(0,0%,88%)]">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-5 p-6 group hover:bg-[hsl(0,0%,97%)] transition-colors">
                        <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-[hsl(0,0%,8%)]/6 group-hover:bg-[hsl(0,0%,8%)] transition-colors">
                          <info.icon className="h-4 w-4 text-[hsl(0,0%,20%)] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div
                            className="text-xs font-semibold tracking-[0.12em] text-[hsl(0,0%,40%)] uppercase mb-1.5"
                          >
                            {info.title}
                          </div>
                          <p className="text-sm text-[hsl(0,0%,30%)] whitespace-pre-line leading-[1.9]">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FAQ */}
                  <div className="mt-5 border border-[hsl(0,0%,8%)] p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-1 self-stretch bg-[hsl(0,0%,8%)]" />
                      <div>
                        <h3
                          className="font-semibold mb-2 text-[0.95rem]"
                          style={{ fontFamily: '"Noto Serif JP", serif' }}
                        >
                          よくあるご質問
                        </h3>
                        <p className="text-sm text-[hsl(0,0%,50%)] leading-relaxed mb-3">
                          お問い合わせの前に、よくあるご質問をご確認ください。多くの疑問が解決できます。
                        </p>
                        <a
                          href="/faq"
                          className="text-xs font-medium text-[hsl(0,0%,20%)] hover:underline tracking-wider"
                        >
                          FAQページを見る →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

        </main>

        {/* 地図 */}
        <section className="bg-[hsl(0,0%,97%)] border-t border-[hsl(0,0%,88%)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-12xl mx-auto">
              <div className="mb-8">
                <span className="inline-block text-[hsl(0,0%,45%)] text-xs tracking-[0.2em] font-medium uppercase mb-3">Access</span>
                <h2
                  className="text-[1.5rem]"
                  style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.03em' }}
                >
                  所<span className="border-b-2 border-[hsl(0,0%,8%)]">在地</span>
                </h2>
                <div className="mt-4 h-[1px] bg-[hsl(0,0%,88%)]" />
              </div>
              <div className="border border-[hsl(0,0%,88%)] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.759258910214!2d139.7390040771574!3d35.68292932987835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0d5cc71d13%3A0xee521dcf8575898d!2z5bGx5LqsIOWNiuiUtemWgOODkeODrOOCuQ!5e0!3m2!1szh-CN!2sjp!4v1776755211720!5m2!1szh-CN!2sjp"
                  width="100%"
                  height="450"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="会社所在地"
                />
              </div>
              <p className="text-center text-sm text-[hsl(0,0%,50%)] mt-4 tracking-wide">
                東京都千代田区平河町1丁目8番２号半蔵門パレス8階
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
