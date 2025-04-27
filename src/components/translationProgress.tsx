import React, { useEffect, useState, useRef } from "react";
import "./translation.css";

interface TranslationProgressProps {
  totalPages: number;
  startTranslation: boolean;
  downloadFileUrl: string; // URL of the file to download
}

const TranslationProgress: React.FC<TranslationProgressProps> = ({
  totalPages,
  startTranslation,
  downloadFileUrl,
}) => {
  const [processedPages, setProcessedPages] = useState(0);
  const [statusText, setStatusText] = useState("Waiting to start...");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const progress = Math.floor((processedPages / totalPages) * 100);

  useEffect(() => {
    if (!startTranslation) return;

    const processPage = () => {
      timeoutRef.current = setTimeout(() => {
        setProcessedPages((prev) => prev + 1);
      }, Math.random() * 2000 + 1000); // between 1-3 seconds per page
    };

    if (processedPages < totalPages) {
      setStatusText("AI translating...");
      processPage();
    } else {
      setStatusText("Translation Complete!");
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [processedPages, startTranslation, totalPages]);

  const safeProcessedPages = Math.min(processedPages, totalPages);
  const safeProgress = Math.min(progress, 100);

  return (
    <div className="tp-wrapper">
      <p className="progress-info">
        Processed {safeProcessedPages}/{totalPages} pages
      </p>
      <div className="custom-progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${safeProgress}%` }}
        ></div>
      </div>
      <p className="progress-percentage">{safeProgress}% Complete</p>
      <p className="ai-status-text">{statusText}</p>

      {processedPages >= totalPages && (
        <a href={downloadFileUrl} download className="tp-download-link">
          <button className="dwnl_btn dwnl_btn_short">
            <svg
              className="saveicon"
              stroke="currentColor"
              stroke-width="1.7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            download
          </button>
        </a>
      )}
    </div>
  );
};

export default TranslationProgress;
