import React from "react";

const PreviewPanel = ({ customization }) => {
  const {
    borderRadius,
    borderColor,
    fontFamily,
    chatTitleBg,
    buttonIcon,
    userBubbleBg,
    userTextColor,
    botBubbleBg,
    botTextColor,
  } = customization;

  return (
    <div
      className="chatbox"
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: `${borderRadius}px`,
        fontFamily: fontFamily,
      }}
    >
      <div className="boxHeader" style={{ backgroundColor: chatTitleBg }}>
        <div className="headerTitle">
          <img className="botIcon" src={buttonIcon} />
          <p>
            <span>Jinn Live</span>
            <span>Demo Bot</span>
          </p>
        </div>
        <button className="closeChat">
          <svg
            height={20}
            width={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.707 3.293a1 1 0 0 0-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 1 0 1.414 1.414L12 13.414l7.293 7.293a1 1 0 0 0 1.414-1.414L13.414 12l7.293-7.293a1 1 0 0 0-1.414-1.414L12 10.586z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>

      <div className="messageArea">
        <div
          className="userBubble"
          style={{
            backgroundColor: userBubbleBg,
            color: userTextColor,
          }}
        >
          Hello Jinn
        </div>
        <div className="botBubbleWrapper">
          <img className="botIcon" src={buttonIcon} />
          <div
            className="botBubble"
            style={{
              backgroundColor: botBubbleBg,
              color: botTextColor,
            }}
          >
            Hello Anurag! How can I help you today?
          </div>
        </div>
      </div>

      <div className="boxFooter">
        <input
          type="text"
          className="messageInput"
          placeholder="Ask us anything..."
          style={{
            fontFamily: fontFamily,
          }}
        />
        <button className="sendButton">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0 20 10L0 20zm0 8v4l10-2z" fill="#AFAFAF" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel;
