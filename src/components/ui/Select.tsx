import React from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

export default function Select({
  label,
  error,
  helperText,
  options,
  placeholder,
  fullWidth = false,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  const selectClasses = cn(
    'w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-white',
    error 
      ? 'border-red-300 focus:ring-red-600' 
      : 'border-charcoal-300',
    className
  );

  const containerClasses = cn(
    'relative',
    fullWidth ? 'w-full' : 'w-auto'
  );

  return (
    <div className={containerClasses}>
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-sm font-medium text-charcoal-700 mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          id={selectId}
          className={selectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-charcoal-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      
      {(error || helperText) && (
        <div className="mt-2">
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          {!error && helperText && (
            <p className="text-sm text-charcoal-500">{helperText}</p>
          )}
        </div>
      )}
    </div>
  );
}
