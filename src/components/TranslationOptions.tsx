import React from "react";
import Select, { components } from "react-select";
import "./translation.css";

interface TranslationOptionsProps {
  fileName: string;
  language: string;
  setLanguage: (lang: string) => void;
  onTranslate: () => void;
  onClearFile: () => void;
}

const languageOptions = [
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Italian", label: "Italian" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "English", label: "English" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Chinese", label: "Chinese" },
  { value: "Japanese", label: "Japanese" },
  { value: "Korean", label: "Korean" },
  { value: "Russian", label: "Russian" },
  { value: "Polish", label: "Polish" },
  { value: "Romanian", label: "Romanian" },
  { value: "Dutch", label: "Dutch" },
  { value: "Swedish", label: "Swedish" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Danish", label: "Danish" },
  { value: "Finnish", label: "Finnish" },
  { value: "Arabic", label: "Arabic" },
  { value: "Turkish", label: "Turkish" },
  { value: "Hindi", label: "Hindi" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Czech", label: "Czech" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Greek", label: "Greek" },
  { value: "Hebrew", label: "Hebrew" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "Malay", label: "Malay" },
  { value: "Thai", label: "Thai" },
  { value: "Catalan", label: "Catalan" },
  { value: "Slovak", label: "Slovak" },
  { value: "Bulgarian", label: "Bulgarian" },
  { value: "Croatian", label: "Croatian" },
  { value: "Serbian", label: "Serbian" },
  { value: "Lithuanian", label: "Lithuanian" },
  { value: "Latvian", label: "Latvian" },
  { value: "Estonian", label: "Estonian" },
  { value: "Slovenian", label: "Slovenian" },
  { value: "Macedonian", label: "Macedonian" },
  { value: "Georgian", label: "Georgian" },
  { value: "Albanian", label: "Albanian" },
  { value: "Armenian", label: "Armenian" },
  { value: "Bengali", label: "Bengali" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Urdu", label: "Urdu" },
  { value: "Persian", label: "Persian" },
  { value: "Tamil", label: "Tamil" },
  { value: "Telugu", label: "Telugu" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Tagalog", label: "Tagalog" },
  { value: "Swahili", label: "Swahili" },
];

const MenuList = (props: any) => (
  <components.MenuList {...props}>
    <div className="language-options-grid">{props.children}</div>
  </components.MenuList>
);

const TranslationOptions: React.FC<TranslationOptionsProps> = ({
  fileName,
  language,
  setLanguage,
  onTranslate,
  onClearFile,
}) => {
  const selectedLanguage = languageOptions.find(
    (opt) => opt.value === language
  );

  return (
    <div className="translation-options-container">
      <div className="wrapper_translateto">
        <div className="input-group">
          <label className="label">Translate</label>
          <div className="custom-file-input">
            {fileName !== "No file selected" ? (
              <>
                <img className="pdf-icon" src="/pdf_img.svg" alt="PDF" />
                <span className="file-name-text">{fileName}</span>
                <span className="clear-file" onClick={onClearFile}>
                  ✕
                </span>
              </>
            ) : (
              <span className="file-placeholder">No file selected</span>
            )}
          </div>
        </div>

        <div className="input-group">
          <label className="label">to</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            value={selectedLanguage}
            onChange={(selectedOption) =>
              setLanguage(selectedOption?.value || "English")
            }
            options={languageOptions}
            placeholder="Select language..."
            isSearchable
            menuPlacement="top"
            components={{ MenuList }}
          />
        </div>
      </div>
      <span className="split_line"></span>
      <button className="translate-button" onClick={onTranslate}>
        Translate
        <img className="translate_img" src="/translate_icon.svg" alt="" />
      </button>
    </div>
  );
};

export default TranslationOptions;
