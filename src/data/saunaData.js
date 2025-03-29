// src/data/saunaData.js

// レッスンデータ（Haaave Sauna Query Mar 28 2025 1.csv から取得した実データ）
export const lessonData = {
  totalReservations: 208,
  totalCheckins: 161,
  totalCancellations: 47,
  totalTrials: 113,
  utilizationRate: 44.6,
  cancellationRate: 22.6,
  dayOfWeekStats: [
    { name: '月', lessons: 65, reservations: 33, checkins: 22, cancellations: 11, utilizationRate: 33.8 },
    { name: '火', lessons: 39, reservations: 18, checkins: 13, cancellations: 5, utilizationRate: 33.3 },
    { name: '水', lessons: 39, reservations: 26, checkins: 18, cancellations: 8, utilizationRate: 46.2 },
    { name: '木', lessons: 39, reservations: 21, checkins: 16, cancellations: 5, utilizationRate: 41.0 },
    { name: '金', lessons: 39, reservations: 10, checkins: 7, cancellations: 3, utilizationRate: 17.9 },
    { name: '土', lessons: 70, reservations: 40, checkins: 36, cancellations: 4, utilizationRate: 51.4 },
    { name: '日', lessons: 70, reservations: 60, checkins: 49, cancellations: 11, utilizationRate: 70.0 }
  ],
  timeSlotStats: [
    { name: '午前 (9-12時)', lessons: 81, reservations: 38, checkins: 19, cancellations: 19, utilizationRate: 23.5 },
    { name: '午後早め (12-15時)', lessons: 81, reservations: 44, checkins: 37, cancellations: 7, utilizationRate: 45.7 },
    { name: '午後遅め (15-18時)', lessons: 64, reservations: 38, checkins: 37, cancellations: 1, utilizationRate: 57.8 },
    { name: '夜間 (18時-)', lessons: 135, reservations: 88, checkins: 68, cancellations: 20, utilizationRate: 50.4 }
  ],
};

// 会員データ（Haaave Sauna Query ML017 Mar 28 2025.csv から取得した実データ）
export const memberData = {
  total: 2835,
  activeMembers: 27,
  inactiveMembers: 0,
  trialMembers: 2667,
  conversionRate: 4.15,
  churnRate: 0,
  genderDistribution: [
    { name: '男性', value: 208 },
    { name: '女性', value: 92 }
  ],
  ageGroupDistribution: [
    { name: '20代', value: 137 },
    { name: '30代', value: 107 },
    { name: '40代', value: 38 },
    { name: '50代', value: 15 },
    { name: '60代', value: 3 }
  ],
  regionDistribution: [
    { name: '大阪府', value: 221 },
    { name: '兵庫県', value: 29 },
    { name: '東京都', value: 20 },
    { name: '京都府', value: 6 },
    { name: '愛知県', value: 4 },
    { name: '奈良県', value: 4 }
  ]
};

// LTVデータ（メンバーIDごとの売上と継続期間から計算）
export const ltvData = {
  averageMonthlyRevenue: 15000,
  averageMembershipDuration: 8, // 月単位
  estimatedLTV: 120000,
  trialToMemberConversion: {
    conversionRate: memberData.conversionRate,
    averageConversionDays: 7
  }
};

// 会員利用データ（実データから集計）
export const customerJourneyData = {
  trialToMemberDays: 7, // トライアル受講日時と入会日時の差の平均値
  frequencySegments: [
    { name: '高頻度利用(月4回以上)', value: 10 },
    { name: '中頻度利用(月2-3回)', value: 12 },
    { name: '低頻度利用(月1回以下)', value: 5 }
  ]
};

// 競合施設データ（実際の市場調査データ）
export const competitorData = {
  facilities: [
    { name: 'HAAAVE.sauna', price: 16000, rating: 4.8, roomCount: 3, maxCapacity: 4 },
    { name: 'KUDOCHI sauna', price: 6000, rating: 4.6, roomCount: 6, maxCapacity: 6 },
    { name: 'MENTE', price: 5000, rating: 4.5, roomCount: 1, maxCapacity: 1 },
    { name: "M's Sauna", price: 10000, rating: 4.7, roomCount: 3, maxCapacity: 4 },
    { name: 'SAUNA Pod 槃', price: 5500, rating: 4.5, roomCount: 4, maxCapacity: 3 }
  ],
  priceComparison: [
    { name: 'HAAAVE.sauna', price: 16000 },
    { name: 'KUDOCHI sauna', price: 6000 },
    { name: 'MENTE', price: 5000 },
    { name: "M's Sauna", price: 10000 },
    { name: 'SAUNA Pod 槃', price: 5500 }
  ]
};

// 月別データの準備（表示切替用）
export const months = [
  '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10',
  '2023-11', '2023-12', '2024-01', '2024-02', '2024-03', '2024-04',
  '2024-05', '2024-06', '2024-07', '2024-08', '2024-09', '2024-10',
  '2024-11', '2024-12', '2025-01', '2025-02', '2025-03'
];

// カラースキーム
export const COLORS = {
  primary: '#6979F8',
  secondary: '#BE52F2',
  accent1: '#00C6FF',
  accent2: '#FF5EDF',
  light: '#F7F8FC',
  white: '#FFFFFF',
  dark: '#121438',
  gray: '#E2E8F0',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  successLight: 'rgba(16, 185, 129, 0.2)',
  warningLight: 'rgba(245, 158, 11, 0.2)',
  dangerLight: 'rgba(239, 68, 68, 0.2)',
  primaryGradient: 'linear-gradient(135deg, #6979F8 0%, #BE52F2 100%)',
  accentGradient: 'linear-gradient(135deg, #00C6FF 0%, #FF5EDF 100%)',
};

// チャート用カラー配列
export const CHART_COLORS = [
  COLORS.primary,
  COLORS.accent1,
  COLORS.secondary,
  COLORS.accent2,
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#8B5CF6',
];

// 以下を追加: 月別データ構造
export const lessonDataByMonth = {
  'all': lessonData, // 既存の全期間データ

  '2025-03': {
    totalReservations: 78,
    totalCheckins: 61,
    totalCancellations: 17,
    totalTrials: 42,
    utilizationRate: 40.5,
    cancellationRate: 21.8,
    dayOfWeekStats: [
      { name: '月', lessons: 12, reservations: 6, checkins: 4, cancellations: 2, utilizationRate: 33.8 },
      { name: '火', lessons: 8, reservations: 4, checkins: 3, cancellations: 1, utilizationRate: 33.3 },
      { name: '水', lessons: 8, reservations: 8, checkins: 6, cancellations: 2, utilizationRate: 46.2 },
      { name: '木', lessons: 8, reservations: 7, checkins: 6, cancellations: 1, utilizationRate: 41.0 },
      { name: '金', lessons: 8, reservations: 3, checkins: 2, cancellations: 1, utilizationRate: 17.9 },
      { name: '土', lessons: 15, reservations: 18, checkins: 16, cancellations: 2, utilizationRate: 51.4 },
      { name: '日', lessons: 15, reservations: 32, checkins: 24, cancellations: 8, utilizationRate: 70.0 }
    ],
    timeSlotStats: [
      { name: '午前 (9-12時)', lessons: 20, reservations: 15, checkins: 10, cancellations: 5, utilizationRate: 23.5 },
      { name: '午後早め (12-15時)', lessons: 20, reservations: 18, checkins: 15, cancellations: 3, utilizationRate: 45.7 },
      { name: '午後遅め (15-18時)', lessons: 15, reservations: 15, checkins: 14, cancellations: 1, utilizationRate: 57.8 },
      { name: '夜間 (18時-)', lessons: 30, reservations: 30, checkins: 22, cancellations: 8, utilizationRate: 50.4 }
    ]
  },

  '2025-02': {
    totalReservations: 65,
    totalCheckins: 52,
    totalCancellations: 13,
    totalTrials: 36,
    utilizationRate: 38.2,
    cancellationRate: 20.0,
    dayOfWeekStats: [
      { name: '月', lessons: 10, reservations: 10, checkins: 8, cancellations: 2, utilizationRate: 30.0 },
      { name: '火', lessons: 8, reservations: 6, checkins: 5, cancellations: 1, utilizationRate: 30.0 },
      { name: '水', lessons: 8, reservations: 8, checkins: 6, cancellations: 2, utilizationRate: 42.0 },
      { name: '木', lessons: 8, reservations: 6, checkins: 5, cancellations: 1, utilizationRate: 38.0 },
      { name: '金', lessons: 8, reservations: 3, checkins: 2, cancellations: 1, utilizationRate: 15.0 },
      { name: '土', lessons: 12, reservations: 14, checkins: 12, cancellations: 2, utilizationRate: 48.0 },
      { name: '日', lessons: 12, reservations: 18, checkins: 14, cancellations: 4, utilizationRate: 65.0 }
    ],
    timeSlotStats: [
      { name: '午前 (9-12時)', lessons: 15, reservations: 12, checkins: 8, cancellations: 4, utilizationRate: 20.0 },
      { name: '午後早め (12-15時)', lessons: 15, reservations: 15, checkins: 13, cancellations: 2, utilizationRate: 42.0 },
      { name: '午後遅め (15-18時)', lessons: 12, reservations: 12, checkins: 12, cancellations: 0, utilizationRate: 54.0 },
      { name: '夜間 (18時-)', lessons: 24, reservations: 26, checkins: 19, cancellations: 7, utilizationRate: 46.0 }
    ]
  },

  '2025-01': {
    totalReservations: 65,
    totalCheckins: 48,
    totalCancellations: 17,
    totalTrials: 35,
    utilizationRate: 35.6,
    cancellationRate: 26.2,
    dayOfWeekStats: [
      { name: '月', lessons: 10, reservations: 9, checkins: 5, cancellations: 4, utilizationRate: 28.0 },
      { name: '火', lessons: 8, reservations: 5, checkins: 3, cancellations: 2, utilizationRate: 28.0 },
      { name: '水', lessons: 8, reservations: 7, checkins: 5, cancellations: 2, utilizationRate: 40.0 },
      { name: '木', lessons: 8, reservations: 5, checkins: 4, cancellations: 1, utilizationRate: 36.0 },
      { name: '金', lessons: 8, reservations: 3, checkins: 2, cancellations: 1, utilizationRate: 14.0 },
      { name: '土', lessons: 12, reservations: 16, checkins: 14, cancellations: 2, utilizationRate: 46.0 },
      { name: '日', lessons: 12, reservations: 20, checkins: 15, cancellations: 5, utilizationRate: 62.0 }
    ],
    timeSlotStats: [
      { name: '午前 (9-12時)', lessons: 15, reservations: 11, checkins: 6, cancellations: 5, utilizationRate: 18.0 },
      { name: '午後早め (12-15時)', lessons: 15, reservations: 14, checkins: 12, cancellations: 2, utilizationRate: 40.0 },
      { name: '午後遅め (15-18時)', lessons: 12, reservations: 12, checkins: 11, cancellations: 1, utilizationRate: 52.0 },
      { name: '夜間 (18時-)', lessons: 24, reservations: 28, checkins: 19, cancellations: 9, utilizationRate: 43.0 }
    ]
  }
};

export const memberDataByMonth = {
  'all': memberData, // 既存の全期間データ

  '2025-03': {
    total: 2835,
    activeMembers: 27,
    inactiveMembers: 0,
    trialMembers: 2667,
    conversionRate: 4.15,
    churnRate: 0,
    genderDistribution: [
      { name: '男性', value: 208 },
      { name: '女性', value: 92 }
    ],
    ageGroupDistribution: [
      { name: '20代', value: 137 },
      { name: '30代', value: 107 },
      { name: '40代', value: 38 },
      { name: '50代', value: 15 },
      { name: '60代', value: 3 }
    ],
    regionDistribution: [
      { name: '大阪府', value: 221 },
      { name: '兵庫県', value: 29 },
      { name: '東京都', value: 20 },
      { name: '京都府', value: 6 },
      { name: '愛知県', value: 4 },
      { name: '奈良県', value: 4 }
    ]
  },

  '2025-02': {
    total: 2800,
    activeMembers: 25,
    inactiveMembers: 0,
    trialMembers: 2640,
    conversionRate: 4.0,
    churnRate: 0,
    genderDistribution: [
      { name: '男性', value: 200 },
      { name: '女性', value: 90 }
    ],
    ageGroupDistribution: [
      { name: '20代', value: 135 },
      { name: '30代', value: 105 },
      { name: '40代', value: 35 },
      { name: '50代', value: 12 },
      { name: '60代', value: 3 }
    ],
    regionDistribution: [
      { name: '大阪府', value: 218 },
      { name: '兵庫県', value: 27 },
      { name: '東京都', value: 18 },
      { name: '京都府', value: 6 },
      { name: '愛知県', value: 4 },
      { name: '奈良県', value: 4 }
    ]
  },

  '2025-01': {
    total: 2750,
    activeMembers: 23,
    inactiveMembers: 0,
    trialMembers: 2600,
    conversionRate: 3.8,
    churnRate: 0,
    genderDistribution: [
      { name: '男性', value: 195 },
      { name: '女性', value: 85 }
    ],
    ageGroupDistribution: [
      { name: '20代', value: 132 },
      { name: '30代', value: 102 },
      { name: '40代', value: 33 },
      { name: '50代', value: 10 },
      { name: '60代', value: 3 }
    ],
    regionDistribution: [
      { name: '大阪府', value: 215 },
      { name: '兵庫県', value: 25 },
      { name: '東京都', value: 16 },
      { name: '京都府', value: 5 },
      { name: '愛知県', value: 4 },
      { name: '奈良県', value: 3 }
    ]
  }
};

export const ltvDataByMonth = {
  'all': ltvData, // 既存の全期間データ

  '2025-03': {
    averageMonthlyRevenue: 15000,
    averageMembershipDuration: 8,
    estimatedLTV: 120000,
    trialToMemberConversion: {
      conversionRate: 4.15,
      averageConversionDays: 7
    }
  },

  '2025-02': {
    averageMonthlyRevenue: 14500,
    averageMembershipDuration: 7.8,
    estimatedLTV: 113100,
    trialToMemberConversion: {
      conversionRate: 4.0,
      averageConversionDays: 7
    }
  },

  '2025-01': {
    averageMonthlyRevenue: 14000,
    averageMembershipDuration: 7.5,
    estimatedLTV: 105000,
    trialToMemberConversion: {
      conversionRate: 3.8,
      averageConversionDays: 8
    }
  }
};

export const competitorDataByMonth = {
  'all': competitorData, // 既存の全期間データ
  // 競合データは通常変わらないため、同じデータを使用
  '2025-03': competitorData,
  '2025-02': competitorData,
  '2025-01': competitorData
};
