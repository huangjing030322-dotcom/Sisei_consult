import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(0,0%,8%)] text-[hsl(0,0%,75%)]">
      {/* グレートップライン */}
      <div className="h-[1px] bg-[hsl(0,0%,20%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* 会社情報 */}
          <div>
            <div className="mb-6">
              <span
                style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', letterSpacing: '0.06em' }}
                className="text-[1rem] font-bold text-white"
              >
                志成コンサル
              </span>
              <p className="text-[0.62rem] tracking-[0.18em] text-[hsl(0,0%,45%)] mt-1 uppercase">
                Shiseikonsaru
              </p>
            </div>
            <div className="w-8 h-[1px] bg-[hsl(0,0%,35%)] mb-5" />
            <p className="text-sm leading-loose text-[hsl(0,0%,55%)]">
              補助金・助成金の申請のことなら、私たちへお任せください。
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] text-[hsl(0,0%,45%)] mb-6 uppercase"
            >
              Quick Links
            </h3>
            <nav className="flex flex-col gap-0">
              {[
                { to: '/', label: 'ホーム' },
                { to: '/features', label: 'ソフト機能' },
                { to: '/cases', label: '採択事例' },
                { to: '/about', label: '企業情報' },
                { to: '/contact', label: 'お問い合わせ' }
              ].map((item, i, arr) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`py-3 text-sm text-[hsl(0,0%,60%)] hover:text-white transition-colors duration-150 ${
                    i < arr.length - 1 ? 'border-b border-[hsl(0,0%,15%)]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] text-[hsl(0,0%,45%)] mb-6 uppercase"
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-[hsl(0,0%,60%)]">
                <MapPin className="h-4 w-4 text-[hsl(0,0%,50%)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">〒102-0093<br />東京都千代田区平河町1丁目8番２号半蔵門パレス8階</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[hsl(0,0%,60%)]">
                <Phone className="h-4 w-4 text-[hsl(0,0%,50%)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">03-6205-6789</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[hsl(0,0%,60%)]">
                <Mail className="h-4 w-4 text-[hsl(0,0%,50%)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">******@*****.***.jp</span>
              </div>
              <div className="mt-2 text-xs text-[hsl(0,0%,40%)] leading-relaxed">
                営業時間：平日 9:00〜18:00<br />
                （土日祝日を除く）
              </div>
            </div>
          </div>
        </div>

        {/* ボトムバー */}
        <div className="border-t border-[hsl(0,0%,15%)] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[hsl(0,0%,35%)] tracking-wider">
            © {currentYear} 志成コンサル. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-[hsl(0,0%,40%)] hover:text-white transition-colors duration-150"
            >
              プライバシーポリシー
            </Link>
            <Link
              to="/terms"
              className="text-xs text-[hsl(0,0%,40%)] hover:text-white transition-colors duration-150"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
