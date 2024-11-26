import React from "react";

const CustomizationPanel = ({ customization, setCustomization }) => {
  const handleChange = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="customization-panel">
      <h3>Customize Chatbot</h3>
      <label>
        Button Icon:
        <input
          type="text"
          value={customization.buttonIcon}
          onChange={(e) => handleChange("buttonIcon", e.target.value)}
        />
      </label>
      <label>
        Border Color:
        <input
          type="color"
          value={customization.borderColor}
          onChange={(e) => handleChange("borderColor", e.target.value)}
        />
      </label>
      <label>
        Border Radius:
        <input
          type="number"
          value={customization.borderRadius}
          onChange={(e) => handleChange("borderRadius", e.target.value)}
        />
      </label>
      <label>
        Chat Title Background:
        <input
          type="color"
          value={customization.chatTitleBg}
          onChange={(e) => handleChange("chatTitleBg", e.target.value)}
        />
      </label>
      <label>
        Bot Bubble Background:
        <input
          type="color"
          value={customization.botBubbleBg}
          onChange={(e) => handleChange("botBubbleBg", e.target.value)}
        />
      </label>
      <label>
        Bot Text Color:
        <input
          type="color"
          value={customization.botTextColor}
          onChange={(e) => handleChange("botTextColor", e.target.value)}
        />
      </label>
      <label>
        User Bubble Background:
        <input
          type="color"
          value={customization.userBubbleBg}
          onChange={(e) => handleChange("userBubbleBg", e.target.value)}
        />
      </label>
      <label>
        User Text Color:
        <input
          type="color"
          value={customization.userTextColor}
          onChange={(e) => handleChange("userTextColor", e.target.value)}
        />
      </label>
      <label>
        Font Family:
        <select
          value={customization.fontFamily}
          onChange={(e) => handleChange("fontFamily", e.target.value)}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="'Courier New', monospace">Courier New</option>
          <option value="'Times New Roman', serif">Times New Roman</option>
          <option value="Lucida Console, monospace">Lucida Console</option>
        </select>
      </label>
    </div>
  );
};

export default CustomizationPanel;
