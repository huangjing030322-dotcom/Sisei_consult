
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ホーム', path: '/' },
    { label: 'ソフト機能', path: '/features' },
    { label: '採択事例', path: '/cases' },
    { label: '企業情報', path: '/about' },
    { label: 'お問い合わせ', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.10)]' : 'border-b border-[rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ロゴ */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-opacity duration-200 hover:opacity-70"
          >
            <div className="flex flex-col leading-none">
              <span
                style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif', letterSpacing: '0.06em' }}
                className="text-[1.05rem] font-bold text-[hsl(0,0%,8%)]"
              >
                志成コンサル
              </span>
              <span className="text-[0.6rem] tracking-[0.18em] text-[hsl(0,0%,50%)] mt-0.5 font-normal uppercase">
                Shiseikonsaru
              </span>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-[1.15rem] text-[0.8rem] font-medium tracking-widest transition-colors duration-150 ${
                  isActive(item.path)
                    ? 'text-[hsl(0,0%,8%)]'
                    : 'text-[hsl(0,0%,45%)] hover:text-[hsl(0,0%,8%)]'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[hsl(0,0%,8%)]" />
                )}
              </Link>
            ))}

            {/* 無料相談ボタン */}
            <Link
              to="/contact"
              className="ml-6 inline-flex items-center justify-center px-5 py-2 text-[0.8rem] font-medium tracking-widest text-white bg-[hsl(0,0%,8%)] transition-all duration-150 hover:bg-[hsl(0,0%,20%)] active:scale-[0.97] border border-[hsl(0,0%,8%)]"
              style={{ borderRadius: 0 }}
            >
              無料相談
            </Link>
          </nav>

          {/* モバイルメニュー */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 text-[hsl(0,0%,20%)] hover:text-[hsl(0,0%,8%)] transition-colors"
                aria-label="メニューを開く"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 rounded-none border-l border-[hsl(0,0%,88%)]">
              <div className="h-[3px] bg-[hsl(0,0%,8%)]" />
              <div className="px-8 py-8">
                <div className="mb-8">
                  <span
                    style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.06em' }}
                    className="text-sm font-bold text-[hsl(0,0%,8%)]"
                  >
                    志成コンサル
                  </span>
                </div>
                <nav className="flex flex-col">
                  {navItems.map((item, i) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`py-4 text-sm font-medium tracking-wider transition-colors duration-150 ${
                        i < navItems.length - 1 ? 'border-b border-[hsl(0,0%,90%)]' : ''
                      } ${
                        isActive(item.path)
                          ? 'text-[hsl(0,0%,8%)]'
                          : 'text-[hsl(0,0%,40%)] hover:text-[hsl(0,0%,8%)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-8 flex items-center justify-center py-3 text-sm font-medium tracking-widest text-white bg-[hsl(0,0%,8%)] hover:bg-[hsl(0,0%,20%)] transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    無料相談
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
