import React, { useState } from 'react';
import { Menu, Moon, Sun, ChevronDown, RefreshCw, Filter, Activity, Users, Calendar, Target, BarChart2 } from 'lucide-react';
import NavItem from './NavItem';
import OverviewTab from './tabs/OverviewTab';
import MembersTab from './tabs/MembersTab';
import ReservationsTab from './tabs/ReservationsTab';
import LTVTab from './tabs/LTVTab';
import CompetitorsTab from './tabs/CompetitorsTab';
import {
  COLORS,
  months,
  // 以下を追加
  lessonData,
  memberData,
  ltvData,
  competitorData,
  lessonDataByMonth,
  memberDataByMonth,
  ltvDataByMonth,
  competitorDataByMonth
} from '../data/saunaData';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState('all');

  // ダークモード切替
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // サイドバー切替
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // 追加: 選択された月のデータを取得する関数
  const getFilteredData = (dataByMonth, defaultData) => {
    return dataByMonth[selectedMonth] || defaultData;
  };

  // 追加: フィルタリングされたデータを取得
  const filteredLessonData = getFilteredData(lessonDataByMonth, lessonData);
  const filteredMemberData = getFilteredData(memberDataByMonth, memberData);
  const filteredLtvData = getFilteredData(ltvDataByMonth, ltvData);
  const filteredCompetitorData = getFilteredData(competitorDataByMonth, competitorData);

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* サイドバー */}
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 fixed h-full`}
        style={{ background: COLORS.primaryGradient }}
      >
        <div className="p-5 flex items-center justify-between">
          <h1 className={`font-bold text-xl text-white transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            HAAAVE.sauna
          </h1>
          <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white">
            <Menu size={20} />
          </button>
        </div>

        <nav className="mt-8">
          <NavItem
            icon={<Activity />}
            label="概要"
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<Users />}
            label="会員分析"
            active={activeTab === 'members'}
            onClick={() => setActiveTab('members')}
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<Calendar />}
            label="予約・利用分析"
            active={activeTab === 'reservations'}
            onClick={() => setActiveTab('reservations')}
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<Target />}
            label="LTV分析"
            active={activeTab === 'ltv'}
            onClick={() => setActiveTab('ltv')}
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<BarChart2 />}
            label="競合分析"
            active={activeTab === 'competitors'}
            onClick={() => setActiveTab('competitors')}
            collapsed={!sidebarOpen}
          />
        </nav>

        <div className="absolute bottom-5 left-0 right-0 px-5">
          <div className={`flex items-center justify-between bg-white/10 rounded-lg p-3 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
            <span className="text-sm text-white">ダークモード</span>
            <button onClick={toggleDarkMode} className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white">
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <main className={`${sidebarOpen ? 'ml-64' : 'ml-20'} flex-1 p-6 transition-all duration-300`}>
        {/* ヘッダー */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">サウナ施設分析ダッシュボード</h1>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>データに基づいたマーケティング・経営判断をサポート</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className={`appearance-none border rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                }`}
              >
                <option value="all">全期間</option>
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>

            <button className={`p-2 rounded-lg shadow hover:shadow-md transition-shadow ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <RefreshCw size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>

            <button className={`p-2 rounded-lg shadow hover:shadow-md transition-shadow ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <Filter size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          </div>
        </header>

        {/* タブコンテンツ - ここを修正 */}
        <div className="space-y-6">
          {activeTab === 'overview' && <OverviewTab
            lessonData={filteredLessonData}
            memberData={filteredMemberData}
          />}
          {activeTab === 'members' && <MembersTab
            memberData={filteredMemberData}
          />}
          {activeTab === 'reservations' && <ReservationsTab
            lessonData={filteredLessonData}
          />}
          {activeTab === 'ltv' && <LTVTab
            ltvData={filteredLtvData}
          />}
          {activeTab === 'competitors' && <CompetitorsTab
            competitorData={filteredCompetitorData}
          />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
