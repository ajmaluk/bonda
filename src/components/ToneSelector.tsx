import { Flame, Heart } from 'lucide-react';
import './OptionsSelector.css';

export type Tone = 'Motivation' | 'Troll';

interface ToneSelectorProps {
    selectedTone: Tone;
    onSelectTone: (tone: Tone) => void;
    disabled?: boolean;
}

export function ToneSelector({ selectedTone, onSelectTone, disabled }: ToneSelectorProps) {
    return (
        <fieldset className="selector-container glass-panel" disabled={disabled}>
            <legend className="sr-only">Select Vibe</legend>
            <h3 aria-hidden="true">Select Vibe</h3>
            <div className="options-wrapper" role="radiogroup">
                <button
                    type="button"
                    className={`option-btn ${selectedTone === 'Motivation' ? 'active motivation' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectTone('Motivation')}
                    disabled={disabled}
                    aria-checked={selectedTone === 'Motivation'}
                    role="radio"
                    aria-label="Selection: Motivation"
                >
                    <Heart className="option-icon" aria-hidden="true" />
                    <span>Motivation</span>
                </button>
                <button
                    type="button"
                    className={`option-btn ${selectedTone === 'Troll' ? 'active troll' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectTone('Troll')}
                    disabled={disabled}
                    aria-checked={selectedTone === 'Troll'}
                    role="radio"
                    aria-label="Selection: Brutal Roast"
                >
                    <Flame className="option-icon" aria-hidden="true" />
                    <span>Brutal Roast</span>
                </button>
            </div>
        </fieldset>
    );
}
