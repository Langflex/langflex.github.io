import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FileUploader from "../components/large/fileUploader_large";
import TranslationOptions from "../components/large/TranslationOptions_large";
import TranslationProgress from "../components/large/translationProgress_large";

function Large() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("Spanish");
  const [progress, setProgress] = useState(0);
  const [startTranslation, setStartTranslation] = useState(false);

  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    setProgress(0);
    setStartTranslation(false);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setProgress(0);
    setStartTranslation(false);
  };

  const handleTranslate = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
    setStartTranslation(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) clearInterval(interval);
    }, 500);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-container">
          <div className="logo-wrapper">
            <img
              src="/lang Flex Logo.svg"
              alt="LangFlex Logo"
              className="logo"
            />
          </div>

          <nav className="nav-menu">
            <NavLink to="/" end className="nav-link">
              Translate Files
            </NavLink>
            <NavLink to="/split-file" end className="nav-link">
              My Files
            </NavLink>
          </nav>
          <div className="user-info tooltip-container">
            <img
              src="https://api.dicebear.com/6.x/thumbs/svg?seed=Alex"
              alt="User Avatar"
              className="avatar"
            />
            <div className="block-user">
              <span className="username">Hi, Alex!</span>
              <span className="badge">Bonus</span>
            </div>

            <div className="tooltip">
              <p>
                Translate your files any size 2× faster with your own API key!
              </p>
              <a href="/instructions" className="tooltip-link">
                Instructions…
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="form">
        {startTranslation && (
          <div className="tp-warning">
            ⚠️ Large file detected — translation could take a few hours. You’ll
            get an email as soon as it’s ready!
          </div>
        )}

        <FileUploader onFileSelected={handleFileSelected} />

        <div className="translation-section">
          <TranslationOptions
            fileName={selectedFile ? selectedFile.name : "No file selected"}
            language={language}
            setLanguage={setLanguage}
            onTranslate={handleTranslate}
            onClearFile={handleClearFile}
          />

          <TranslationProgress
            totalPages={startTranslation ? 169 : 0} // 👈 change here
            startTranslation={startTranslation}
            email={"alex-ll@gmail.com"}
            downloadFileUrl={"/the_picture_of_dorian_gray_spanish.pdf"}
          />
        </div>

        {/* <div className="email-download-section">
          <button
            onClick={() => {
              window.open("/langflex-demo-email.eml", "_blank");
            }}
            style={{
              padding: "12px 20px",
              marginTop: "20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            📩 View Email from LangFlex
          </button>
        </div> */}
      </main>
    </div>
  );
}

export default Large;
