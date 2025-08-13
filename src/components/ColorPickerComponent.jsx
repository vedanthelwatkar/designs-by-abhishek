"use client";

import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [lightColor, setLightColor] = useState("#f8f9fa");
  const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);
  const [showLightPicker, setShowLightPicker] = useState(false);

  const handleSubmit = () => {
    // Update the actual Tailwind background and light colors
    const root = document.documentElement;

    // Override Tailwind's background and light colors
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --background: ${backgroundColor};
        --light: ${lightColor};
      }
      .bg-background {
        background-color: ${backgroundColor} !important;
      }
      .bg-light {
        background-color: ${lightColor} !important;
      }
      .text-background {
        color: ${backgroundColor} !important;
      }
      .text-light {
        color: ${lightColor} !important;
      }
      .border-background {
        border-color: ${backgroundColor} !important;
      }
      .border-light {
        border-color: ${lightColor} !important;
      }
    `;

    // Remove any existing color override styles
    const existingStyle = document.getElementById("color-picker-override");
    if (existingStyle) {
      existingStyle.remove();
    }

    // Add the new style
    style.id = "color-picker-override";
    document.head.appendChild(style);

    // Close pickers
    setShowBackgroundPicker(false);
    setShowLightPicker(false);

    console.log("Colors updated:", { backgroundColor, lightColor });
  };

  const popoverStyle = {
    position: "absolute",
    zIndex: 1000,
    top: "100%",
    left: 0,
    marginTop: "8px",
  };

  const coverStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Theme Color Picker
      </h2>

      {/* Background Color Picker */}
      <div className="mb-6 relative">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Background Color
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowBackgroundPicker(!showBackgroundPicker)}
            className="w-16 h-10 rounded-lg border-2 border-gray-300 shadow-sm hover:border-gray-400 transition-colors"
            style={{ backgroundColor: backgroundColor }}
          />
          <span className="text-sm font-mono text-gray-600 bg-gray-50 px-2 py-1 rounded">
            {backgroundColor.toUpperCase()}
          </span>
        </div>

        {showBackgroundPicker && (
          <>
            <div
              style={coverStyle}
              onClick={() => setShowBackgroundPicker(false)}
            />
            <div style={popoverStyle}>
              <SketchPicker
                color={backgroundColor}
                onChange={(color) => setBackgroundColor(color.hex)}
                disableAlpha={true}
              />
            </div>
          </>
        )}
      </div>

      {/* Light Color Picker */}
      <div className="mb-8 relative">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Light Color
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLightPicker(!showLightPicker)}
            className="w-16 h-10 rounded-lg border-2 border-gray-300 shadow-sm hover:border-gray-400 transition-colors"
            style={{ backgroundColor: lightColor }}
          />
          <span className="text-sm font-mono text-gray-600 bg-gray-50 px-2 py-1 rounded">
            {lightColor.toUpperCase()}
          </span>
        </div>

        {showLightPicker && (
          <>
            <div style={coverStyle} onClick={() => setShowLightPicker(false)} />
            <div style={popoverStyle}>
              <SketchPicker
                color={lightColor}
                onChange={(color) => setLightColor(color.hex)}
                disableAlpha={true}
              />
            </div>
          </>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm"
      >
        Apply Theme Colors
      </button>

      {/* Preview Section */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500 mb-2">Preview (after applying):</p>
        <div className="flex gap-2">
          <div className="flex-1 p-2 rounded text-center text-xs font-medium bg-background text-gray-800">
            bg-background
          </div>
          <div className="flex-1 p-2 rounded text-center text-xs font-medium bg-light text-gray-800">
            bg-light
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerComponent;
