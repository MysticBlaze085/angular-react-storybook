import React from 'react';
import './Button.css';

interface ButtonProps {
  primary: boolean; // Changed type from string to boolean
  label: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ primary, size = 'medium', label, backgroundColor, onClick }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const buttonClasses = `storybook-button storybook-button--${size} ${mode}`;
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent', // Use provided backgroundColor or default to 'transparent'
  };

  return (
    <button onClick={onClick} className={buttonClasses} style={ buttonStyle }>
      {label}
    </button>
  );
};

export default Button;
