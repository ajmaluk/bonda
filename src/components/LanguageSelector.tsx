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
        <fieldset className="selector-container glass-panel" disabled={disabled}>
            <legend className="sr-only">Select Language</legend>
            <h3 aria-hidden="true">Language</h3>
            <div className="options-wrapper" role="radiogroup">
                <button
                    type="button"
                    className={`option-btn ${selectedLanguage === 'English' ? 'active blue' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectLanguage('English')}
                    disabled={disabled}
                    aria-checked={selectedLanguage === 'English'}
                    role="radio"
                    aria-label="Selection: English"
                >
                    <Globe className="option-icon" aria-hidden="true" />
                    <span>English</span>
                </button>
                <button
                    type="button"
                    className={`option-btn ${selectedLanguage === 'Malayalam' ? 'active blue' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectLanguage('Malayalam')}
                    disabled={disabled}
                    aria-checked={selectedLanguage === 'Malayalam'}
                    role="radio"
                    aria-label="Selection: Malayalam"
                >
                    <Languages className="option-icon" aria-hidden="true" />
                    <span>Malayalam</span>
                </button>
            </div>
        </fieldset>
    );
}
