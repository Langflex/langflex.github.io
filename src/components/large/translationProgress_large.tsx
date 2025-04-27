import React, { useEffect, useState, useRef } from "react";
import "../translation.css";

interface TranslationProgressProps {
  totalPages: number;
  startTranslation: boolean;
  email: string;
  downloadFileUrl?: string;
}

const TranslationProgress: React.FC<TranslationProgressProps> = ({
  totalPages,
  startTranslation,
  email,
  downloadFileUrl,
}) => {
  const [processedPages, setProcessedPages] = useState(0);
  const [statusText, setStatusText] = useState("Waiting to start…");
  const [showNewUI, setShowNewUI] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

 const progress =
   totalPages === 0 ? 0 : Math.floor((processedPages / totalPages) * 100);

  const safeProgress = Math.min(progress, 100);

  useEffect(() => {
    if (!startTranslation) return;

    setTimeout(() => setShowNewUI(true), 600); // delay fade transition

    const processPage = () => {
      timeoutRef.current = setTimeout(() => {
        setProcessedPages((prev) => prev + 1);
      }, 100);
    };

    if (processedPages < totalPages) {
      setStatusText("Your translation is in progress…");
      processPage();
    } else {
      setStatusText("Translation complete!");
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [processedPages, startTranslation, totalPages]);

  return (
    <div className="tp-wrapper">
      {/* Old UI */}
      <div className={`tp-block ${!showNewUI ? "fade-in" : "fade-out"}`}>
        <p className="tp-old-info">
          Processed {processedPages}/{totalPages} pages
        </p>
        <div className="tp-old-bar">
          <div
            className="tp-old-fill"
            style={{
              width: `${safeProgress}%`,
              background: safeProgress > 0 ? "#fbbc04" : "transparent",
            }}
          ></div>
        </div>
        <p className="tp-old-status">{safeProgress}% Complete</p>
        <p className="tp-old-status ai-status-text">{statusText}</p>

        {totalPages > 0 && processedPages >= totalPages && downloadFileUrl && (
          <a href={downloadFileUrl} download className="tp-download-link">
            <button className="tp-download-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                viewBox="0 0 640 512"
              >
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                  fill="white"
                />
              </svg>
              <span>Download File</span>
            </button>
          </a>
        )}
      </div>

      {/* New UI */}
      <div className={`tp-block ${showNewUI ? "fade-in" : "fade-out"}`}>
        {processedPages < totalPages ? (
          <>
            <div className="tp-email-box">
              <img
                src="/Gmail_icon.svg"
                alt="Gmail"
                className="tp-gmail-icon"
              />
              <div className="tp-txt">
                <div className="tp-loader"></div>
                <strong className="tp-status-text">{statusText}</strong>
              </div>
            </div>
            <p className="tp-email-text">
              We will notify you as "mybook" translation will be finished.
            </p>
            <p className="time-left-text">Est. time left: ~2 h</p>
          </>
        ) : (
          <>
            <div className="tp-complete-box">
              <div className="block-done">
                <img
                  src="/success-svgrepo-com.svg"
                  alt="Success"
                  className="tp-success-icon"
                />
                <div>
                  {/* <p className="tp-complete-title">🎉 All done!</p> */}
                  <p className="tp-complete-subtitle">
                    Your translation is complete. We’ve emailed you at{" "}
                    <strong>{email}</strong>.
                  </p>
                </div>
              </div>
              {processedPages >= totalPages && downloadFileUrl && (
                <a href={downloadFileUrl} download className="tp-download-link">
                  <button className="dwnl_btn">
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
          </>
        )}
      </div>
    </div>
  );
};

export default TranslationProgress;
