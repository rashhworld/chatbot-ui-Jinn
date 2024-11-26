import React, { useState } from "react";
import CustomizationPanel from "./components/CustomizationPanel";
import PreviewPanel from "./components/PreviewPanel";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "bot.png", //https://cdn1.iconfinder.com/data/icons/bots/280/bot-9-2-512.png
    borderColor: "#aaa",
    borderRadius: "8",
    chatTitleBg: "#000",
    botBubbleBg: "#F0F0F0",
    botTextColor: "#000",
    userBubbleBg: "#000",
    userTextColor: "#fff",
    fontFamily: "Arial, sans-serif",
  });

  return (
    <div className="app-container">
      <CustomizationPanel
        customization={customization}
        setCustomization={setCustomization}
      />
      <PreviewPanel customization={customization} />
    </div>
  );
};

export default App;
