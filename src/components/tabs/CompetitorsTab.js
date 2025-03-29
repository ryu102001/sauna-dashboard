import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartCard from '../ChartCard';
import { COLORS } from '../../data/saunaData';
// competitorDataのimportを削除

// 競合データを受け取るように変更
const CompetitorsTab = ({ competitorData }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <ChartCard
        title="競合施設 料金比較"
        description="大阪市内の主なプライベートサウナ施設の料金比較"
      >
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={competitorData.priceComparison} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis type="number" tickFormatter={(value) => `${value.toLocaleString()}円`} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip formatter={(value) => [`${value.toLocaleString()}円`, '料金']} />
              <Legend />
              <Bar dataKey="price" name="料金" fill={COLORS.primary} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        title="競合施設詳細比較"
        description="各施設の特徴比較"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">施設名</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">料金</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">評価</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">部屋数</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最大収容人数</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {competitorData.facilities.map((facility, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{facility.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{facility.price.toLocaleString()}円</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{facility.rating}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{facility.roomCount}室</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{facility.maxCapacity}名/室</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      <ChartCard
        title="市場ポジショニング分析"
        description="価格と評価のポジショニング"
      >
        <div className="p-4 text-center text-gray-500">
          市場ポジショニング分析が表示されます
        </div>
      </ChartCard>
    </div>
  );
};

export default CompetitorsTab;
