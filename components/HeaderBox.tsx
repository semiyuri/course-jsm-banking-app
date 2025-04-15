import React from "react";

interface Props {
  title: string;
  subtitle: string;
  type?: "title" | "greeting";
  userName?: string;
}

const HeaderBox = ({ title = "title", subtitle, type, userName }: Props) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{userName}</span>
        )}
      </h1>

      <p className="header-box-subtitle">{subtitle}</p>
    </div>
  );
};

export default HeaderBox;
