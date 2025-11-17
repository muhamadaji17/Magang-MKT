/** @format */

import React, { useState } from "react";
import { Button } from "../atom";

export function Tabs({ defaultTab, children, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Ambil semua children bertipe <Tab />
  // const tabs = children.filter((child) => child.type.displayName === "Tab");
  // AMAN
  const tabs = React.Children.toArray(children).filter(
    (child) => child.type?.displayName === "Tab"
  );
  return (
    <div className={`w-full ${className}`}>
      {/* === Tab Buttons === */}
      <div className="flex gap-4 border-b border-gray-300 mb-0.5">
        {tabs.map((tab) => (
          <Button
            key={tab.props.id}
            onClick={() => setActiveTab(tab.props.id)}
            className={`text-black w-24 h-8 text-sm transition-colors ${
              activeTab === tab.props.id
                ? "border-b-2 border-sky-600"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {tab.props.label}
          </Button>
        ))}
      </div>

      {/* === Active Tab Content === */}
      <div className="mt-6 text-sm md:text-base w-full">
        {tabs.find((tab) => tab.props.id === activeTab)?.props.children}
      </div>
    </div>
  );
}

export function Tab({ children }) {
  return children;
}
Tab.displayName = "Tab";
