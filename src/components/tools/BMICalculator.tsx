'use client';

import { useState, useEffect } from 'react';

interface BMIResult {
  bmi: number;
  category: string;
  description: string;
}

interface ErrorMessage {
  id: string;
  message: string;
  type: 'error' | 'warning';
  icon: string;
}

export default function BMICalculator() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const showError = (message: string, type: 'error' | 'warning' = 'error') => {
    const id = Date.now().toString();
    const icon = type === 'error' ? '!' : 'i';
    
    const newError: ErrorMessage = { id, message, type, icon };
    setErrors(prev => [...prev, newError]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      setErrors(prev => prev.filter(error => error.id !== id));
    }, 4000);
  };

  const removeError = (id: string) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  };

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    // Clear previous errors
    setErrors([]);

    // Validation with error messages
    if (!height.trim() && !weight.trim()) {
      showError('Please enter both height and weight to calculate your BMI', 'warning');
      return;
    }
    
    if (!height.trim()) {
      showError('Height is missing. How tall are you?', 'error');
      return;
    }
    
    if (!weight.trim()) {
      showError('Weight is required. Please enter your weight', 'error');
      return;
    }

    if (isNaN(h) || h <= 0) {
      const unitText = unit === 'metric' ? 'centimeters' : 'inches';
      showError(`That doesn't look like a valid height in ${unitText}. Please try again!`, 'error');
      return;
    }

    if (isNaN(w) || w <= 0) {
      const unitText = unit === 'metric' ? 'kilograms' : 'pounds';
      showError(`That doesn't look like a valid weight in ${unitText}. Please try again!`, 'error');
      return;
    }

    // Additional realistic range checks
    if (unit === 'metric') {
      if (h < 50 || h > 300) {
        showError('Height seems unusual! Please enter height between 50-300 cm', 'warning');
        return;
      }
      if (w < 10 || w > 500) {
        showError('Weight seems unusual! Please enter weight between 10-500 kg', 'warning');
        return;
      }
    } else {
      if (h < 20 || h > 120) {
        showError('Height seems unusual! Please enter height between 20-120 inches', 'warning');
        return;
      }
      if (w < 20 || w > 1100) {
        showError('Weight seems unusual! Please enter weight between 20-1100 lbs', 'warning');
        return;
      }
    }

    let bmi: number;
    
    if (unit === 'metric') {
      // Height in cm, weight in kg
      const heightInM = h / 100;
      bmi = w / (heightInM * heightInM);
    } else {
      // Height in inches, weight in pounds
      bmi = (w / (h * h)) * 703;
    }

    let category: string;
    let description: string;

    if (bmi < 18.5) {
      category = 'Underweight';
      description = 'You may need to gain weight. Consider consulting with a healthcare provider.';
    } else if (bmi < 25) {
      category = 'Normal weight';
      description = 'You have a healthy weight for your height. Maintain your current lifestyle.';
    } else if (bmi < 30) {
      category = 'Overweight';
      description = 'You may benefit from weight loss. Consider a healthy diet and exercise.';
    } else {
      category = 'Obese';
      description = 'Weight loss is recommended. Please consult with a healthcare provider.';
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      description
    });
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
    setErrors([]); // Clear any error messages
  };

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shrink {
        from { width: 100%; }
        to { width: 0%; }
      }
      
      @keyframes slide-in-from-top-2 {
        from {
          transform: translateY(-8px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      .animate-in {
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-fill-mode: both;
      }
      
      .slide-in-from-top-2 {
        animation-name: slide-in-from-top-2;
      }
      
      .fade-in-0 {
        animation-name: fadeIn;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="space-y-3">
          {errors.map((error) => (
            <div
              key={error.id}
              className={`
                relative p-4 rounded-xl border-l-4 shadow-lg transform transition-all duration-500 ease-in-out
                animate-in slide-in-from-top-2 fade-in-0
                ${error.type === 'error' 
                  ? 'bg-red-50 border-red-400 text-red-800' 
                  : 'bg-amber-50 border-amber-400 text-amber-800'
                }
              `}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-2xl mr-3">{error.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{error.message}</p>
                </div>
                <button
                  onClick={() => removeError(error.id)}
                  className={`
                    ml-4 flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors
                    ${error.type === 'error' ? 'text-red-600 hover:text-red-800' : 'text-amber-600 hover:text-amber-800'}
                  `}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Progress bar for auto-dismiss */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-[4000ms] ease-linear ${
                    error.type === 'error' ? 'bg-red-600' : 'bg-amber-600'
                  }`}
                  style={{ 
                    width: '100%',
                    animation: 'shrink 4s linear forwards'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Unit Selection */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setUnit('metric')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            unit === 'metric'
              ? 'bg-[#00B5AD] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Metric (cm/kg)
        </button>
        <button
          onClick={() => setUnit('imperial')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            unit === 'imperial'
              ? 'bg-[#00B5AD] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Imperial (in/lbs)
        </button>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Height {unit === 'metric' ? '(cm)' : '(inches)'}
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in pounds'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 justify-center">
        <button
          onClick={calculateBMI}
          className="bg-[#00B5AD] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#009B94] transition-colors"
        >
          Calculate BMI
        </button>
        <button
          onClick={reset}
          className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00B5AD] mb-2">
              {result.bmi}
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-2">
              {result.category}
            </div>
            <p className="text-gray-600">
              {result.description}
            </p>
          </div>
          
          {/* BMI Scale */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-center">BMI Scale Reference</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="text-center p-2 bg-blue-100 rounded">
                <div className="font-medium">Underweight</div>
                <div className="text-gray-600">&lt; 18.5</div>
              </div>
              <div className="text-center p-2 bg-green-100 rounded">
                <div className="font-medium">Normal</div>
                <div className="text-gray-600">18.5 - 24.9</div>
              </div>
              <div className="text-center p-2 bg-yellow-100 rounded">
                <div className="font-medium">Overweight</div>
                <div className="text-gray-600">25 - 29.9</div>
              </div>
              <div className="text-center p-2 bg-red-100 rounded">
                <div className="font-medium">Obese</div>
                <div className="text-gray-600">&ge; 30</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
