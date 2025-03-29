import React from 'react';
import { ResponsiveContainer, PieChart, Pie, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { Users, UserPlus, Percent, Zap } from 'lucide-react';
import Card from '../Card';
import ChartCard from '../ChartCard';
import CustomTooltip from '../CustomTooltip';
import { lessonData, memberData, COLORS, CHART_COLORS } from '../../data/saunaData';

const OverviewTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card
          title="総会員数"
          icon={<Users size={24} className="text-blue-500" />}
          value={memberData.total.toLocaleString()}
          subValue={`${memberData.activeMembers} 名`}
          subLabel="アクティブ会員"
        />
        <Card
          title="総体験者数"
          icon={<UserPlus size={24} className="text-purple-500" />}
          value={memberData.trialMembers.toLocaleString()}
          subValue={`${memberData.conversionRate.toFixed(1)}%`}
          subLabel="入会率"
        />
        <Card
          title="施設利用率"
          icon={<Percent size={24} className="text-green-500" />}
          value={`${lessonData.utilizationRate.toFixed(1)}%`}
          subValue={`${lessonData.totalCheckins.toLocaleString()} / ${lessonData.totalReservations.toLocaleString()}`}
          subLabel="チェックイン/予約"
        />
        <Card
          title="キャンセル率"
          icon={<Zap size={24} className="text-orange-500" />}
          value={`${lessonData.cancellationRate.toFixed(1)}%`}
          subValue={`${lessonData.totalCancellations.toLocaleString()} 件`}
          subLabel="キャンセル数"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="利用客分布"
          description="会員・体験・ビジター比率"
        >
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={[
                    { name: '会員', value: lessonData.totalReservations - lessonData.totalTrials - 30 },
                    { name: '体験', value: lessonData.totalTrials },
                    { name: 'ビジター', value: 30 } // 推定値は避けるためビジター数は固定
                  ]}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {[0, 1, 2].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}人`, '人数']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="曜日別利用率"
          description="曜日ごとの施設利用率"
        >
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={lessonData.dayOfWeekStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip content={<CustomTooltip formatter={(value) => `${value}%`} />} />
                <Legend />
                <Bar dataKey="utilizationRate" name="利用率" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ChartCard
          title="時間帯別利用率・キャンセル率"
          description="時間帯ごとの利用状況とキャンセル率"
        >
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={lessonData.timeSlotStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`} />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar yAxisId="left" dataKey="utilizationRate" name="利用率" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="cancellations" name="キャンセル数" fill={COLORS.accent2} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </>
  );
};

export default OverviewTab;
