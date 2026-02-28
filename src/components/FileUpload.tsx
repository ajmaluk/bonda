import { useRef, useState, useEffect } from 'react';
import { UploadCloud, Trash2, FileText } from 'lucide-react';
import './FileUpload.css';

interface FileUploadProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
  disabled?: boolean;
}

export function FileUpload({ file, onFileSelect, disabled }: FileUploadProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file && file.type !== 'application/pdf') {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
  }, [file]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (newFile: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (validTypes.includes(newFile.type)) {
      onFileSelect(newFile);
    } else {
      alert('Please upload a valid image (JPG, PNG) or PDF file.');
    }
  };

  if (file) {
    const isPdf = file.type === 'application/pdf';
    return (
      <div className="file-preview glass-panel animate-fade-in">
        <div className="file-info">
          <div className="file-icon-bg">
            {isPdf ? (
              <FileText className="file-icon pdf" />
            ) : (
              <img src={previewUrl || ''} alt="preview" className="file-preview-img" />
            )}
          </div>
          <div className="file-details">
            <span className="file-name">{file.name}</span>
            <span className="file-size">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
          </div>
        </div>
        <button
          onClick={() => onFileSelect(null)}
          className="remove-btn"
          aria-label="Remove file"
          disabled={disabled}
        >
          <Trash2 size={18} />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`upload-zone glass-panel ${isDragActive ? 'drag-active' : ''} ${disabled ? 'disabled' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => !disabled && inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp,.pdf"
        onChange={handleChange}
        style={{ display: 'none' }}
        disabled={disabled}
      />

      <div className="upload-content">
        <div className="upload-icon-wrapper">
          <UploadCloud className="upload-cloud-icon" />
        </div>
        <h3>Drop your marksheet here</h3>
        <p>Supports Image (JPG, PNG) or PDF formats</p>
        <span className="upload-btn-fake">Browse Files</span>
      </div>
    </div>
  );
}
