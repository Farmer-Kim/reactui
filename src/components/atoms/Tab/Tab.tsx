import React, { useState } from 'react';
import './Tab.css';

export interface TabMenuProps {
  tabs: string[];
  initialTab?: number;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, initialTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-menu">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab] && (
          <div>
            <h2>{tabs[activeTab]}</h2>
            <p>Content for {tabs[activeTab]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
