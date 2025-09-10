/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ExpandIcon } from './icons';

interface UpscalePanelProps {
  onApplyUpscale: () => void;
  isLoading: boolean;
}

const UpscalePanel: React.FC<UpscalePanelProps> = ({ onApplyUpscale, isLoading }) => {
  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm text-center">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-2 shadow-lg shadow-indigo-500/30">
        <ExpandIcon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-100">AI Image Upscaler</h3>
      <p className="max-w-md text-md text-gray-400">
        Your image appears to be low-resolution. Use AI to enhance its size and clarity, sharpen details, and remove compression artifacts for a high-quality result.
      </p>
      
      <button
        onClick={onApplyUpscale}
        disabled={isLoading}
        className="w-full max-w-sm mt-4 bg-gradient-to-br from-purple-600 to-indigo-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-px active:scale-95 active:shadow-inner text-lg disabled:from-indigo-800 disabled:to-indigo-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
      >
        Enhance Image
      </button>
    </div>
  );
};

export default UpscalePanel;
