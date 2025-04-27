import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FileUploader from "../components/fileUploader";
import TranslationOptions from "../components/TranslationOptions";
import TranslationProgress from "../components/translationProgress";
// import "./App.css";

function Start() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("Spanish");
  const [progress, setProgress] = useState(0);
  const [startTranslation, setStartTranslation] = useState(false);
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    setProgress(0);
  };
  const handleClearFile = () => {
    setSelectedFile(null);
    setProgress(0);
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
      <div className="form">
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
            totalPages={50}
            startTranslation={startTranslation}
            downloadFileUrl="/thinkpython2_spanish.pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
