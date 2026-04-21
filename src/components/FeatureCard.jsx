
import React from 'react';
import { Check } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, benefits }) => {
  return (
    <div className="h-full flex flex-col bg-white border border-[hsl(0,0%,88%)] group hover:border-[hsl(0,0%,8%)] transition-colors duration-300">
      {/* 黒トップライン（hover時） */}
      <div className="h-[2px] bg-transparent group-hover:bg-[hsl(0,0%,8%)] transition-colors duration-300" />

      <div className="p-7 flex flex-col flex-1">
        {/* アイコン */}
        <div className="inline-flex h-11 w-11 items-center justify-center bg-[hsl(0,0%,8%)]/6 group-hover:bg-[hsl(0,0%,8%)] transition-colors duration-300 mb-5">
          <Icon className="h-5 w-5 text-[hsl(0,0%,20%)] group-hover:text-white transition-colors duration-300" />
        </div>

        {/* タイトル */}
        <h3
          className="text-[1rem] font-bold mb-4 group-hover:text-[hsl(0,0%,8%)] transition-colors"
          style={{ fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.03em' }}
        >
          {title}
        </h3>

        {/* 説明 */}
        <p className="text-[0.85rem] text-[hsl(0,0%,50%)] leading-[2] mb-5">
          {description}
        </p>

        {/* ベネフィット */}
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2 mt-auto pt-4 border-t border-[hsl(0,0%,90%)]">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2.5 text-[0.82rem] text-[hsl(0,0%,48%)]">
                <span className="shrink-0 mt-1 w-3 h-3 inline-flex items-center justify-center bg-[hsl(0,0%,8%)] rounded-none">
                  <Check className="h-2 w-2 text-white" strokeWidth={3} />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
