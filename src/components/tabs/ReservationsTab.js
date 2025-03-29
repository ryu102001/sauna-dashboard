import React from 'react';
import ChartCard from '../ChartCard';

// レッスンデータを受け取るように変更
const ReservationsTab = ({ lessonData }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <ChartCard
        title="予約・利用分析"
        description="（ここに実際の予約データを表示します）"
      >
        <div className="p-4 text-center text-gray-500">
          予約データの詳細分析が表示されます
          {/* ここにlessonDataを使った表示を追加できます */}
        </div>
      </ChartCard>
    </div>
  );
};

export default ReservationsTab;
