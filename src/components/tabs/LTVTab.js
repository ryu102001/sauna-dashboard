import React from 'react';
import ChartCard from '../ChartCard';

// LTVデータを受け取るように変更
const LTVTab = ({ ltvData }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <ChartCard
        title="顧客生涯価値（LTV）分析"
        description="（ここに実際のLTVデータを表示します）"
      >
        <div className="p-4 text-center text-gray-500">
          LTVデータの詳細分析が表示されます
          {/* ここにltvDataを使った表示を追加できます */}
        </div>
      </ChartCard>
    </div>
  );
};

export default LTVTab;
