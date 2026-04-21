import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (location.pathname !== displayChildren?.props?.location?.pathname) {
      setIsAnimating(true);
      
      // 等待擦除动画完成后切换内容
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsAnimating(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [location, children, displayChildren]);

  return (
    <div className="relative">
      {/* 页面内容 */}
      {displayChildren}

      {/* 黑白擦除过渡动画 */}
      <AnimatePresence>
        {isAnimating && (
          <>
            {/* 黑色遮罩 - 从右向左擦除 */}
            <motion.div
              className="fixed inset-0 z-[100] bg-[hsl(0,0%,8%)]"
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              exit={{ clipPath: 'inset(0 100% 0 0%)' }}
              transition={{
                duration: 0,
                ease: [0.4, 0, 0.2, 1],
                exit: { duration: 0.4, delay: 0.25 }
              }}
            />
            
            {/* 白色遮罩 - 延迟跟随 */}
            <motion.div
              className="fixed inset-0 z-[101] bg-white"
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              exit={{ clipPath: 'inset(0 100% 0 0%)' }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
                exit: { duration: 0.35, delay: 0.25 }
              }}
            />

            {/* 过渡文字 */}
            <motion.div
              className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              <motion.span
                className="text-[hsl(0,0%,8%)] text-2xl font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                Loading
              </motion.span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
