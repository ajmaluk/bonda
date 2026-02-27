import { Languages, Globe } from 'lucide-react';
import './OptionsSelector.css';

export type Language = 'English' | 'Malayalam';

interface LanguageSelectorProps {
    selectedLanguage: Language;
    onSelectLanguage: (language: Language) => void;
    disabled?: boolean;
}

export function LanguageSelector({ selectedLanguage, onSelectLanguage, disabled }: LanguageSelectorProps) {
    return (
        <div className="selector-container glass-panel">
            <h3>Language</h3>
            <div className="options-wrapper">
                <button
                    className={`option-btn ${selectedLanguage === 'English' ? 'active blue' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectLanguage('English')}
                    disabled={disabled}
                >
                    <Globe className="option-icon" />
                    <span>English</span>
                </button>
                <button
                    className={`option-btn ${selectedLanguage === 'Malayalam' ? 'active blue' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectLanguage('Malayalam')}
                    disabled={disabled}
                >
                    <Languages className="option-icon" />
                    <span>Malayalam</span>
                </button>
            </div>
        </div>
    );
}
