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
        <div className="selector-container glass-panel">
            <h3>Select Vibe</h3>
            <div className="options-wrapper">
                <button
                    className={`option-btn ${selectedTone === 'Motivation' ? 'active motivation' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectTone('Motivation')}
                    disabled={disabled}
                >
                    <Heart className="option-icon" />
                    <span>Motivation</span>
                </button>
                <button
                    className={`option-btn ${selectedTone === 'Troll' ? 'active troll' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelectTone('Troll')}
                    disabled={disabled}
                >
                    <Flame className="option-icon" />
                    <span>Troll/Roast</span>
                </button>
            </div>
        </div>
    );
}
