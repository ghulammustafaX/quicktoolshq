'use client';

import { useState } from 'react';

type ConversionCategory = 'length' | 'weight' | 'temperature' | 'volume';

interface ConversionUnit {
  name: string;
  symbol: string;
  toBase: number; // multiplier to convert to base unit
  fromBase: number; // multiplier to convert from base unit
}

const conversionData = {
  length: {
    meter: { name: 'Meter', symbol: 'm', toBase: 1, fromBase: 1 },
    kilometer: { name: 'Kilometer', symbol: 'km', toBase: 1000, fromBase: 0.001 },
    centimeter: { name: 'Centimeter', symbol: 'cm', toBase: 0.01, fromBase: 100 },
    millimeter: { name: 'Millimeter', symbol: 'mm', toBase: 0.001, fromBase: 1000 },
    inch: { name: 'Inch', symbol: 'in', toBase: 0.0254, fromBase: 39.3701 },
    foot: { name: 'Foot', symbol: 'ft', toBase: 0.3048, fromBase: 3.28084 },
    yard: { name: 'Yard', symbol: 'yd', toBase: 0.9144, fromBase: 1.09361 },
    mile: { name: 'Mile', symbol: 'mi', toBase: 1609.34, fromBase: 0.000621371 }
  },
  weight: {
    kilogram: { name: 'Kilogram', symbol: 'kg', toBase: 1, fromBase: 1 },
    gram: { name: 'Gram', symbol: 'g', toBase: 0.001, fromBase: 1000 },
    pound: { name: 'Pound', symbol: 'lb', toBase: 0.453592, fromBase: 2.20462 },
    ounce: { name: 'Ounce', symbol: 'oz', toBase: 0.0283495, fromBase: 35.274 },
    ton: { name: 'Metric Ton', symbol: 't', toBase: 1000, fromBase: 0.001 },
    stone: { name: 'Stone', symbol: 'st', toBase: 6.35029, fromBase: 0.157473 }
  },
  temperature: {
    celsius: { name: 'Celsius', symbol: '°C', toBase: 1, fromBase: 1 },
    fahrenheit: { name: 'Fahrenheit', symbol: '°F', toBase: 1, fromBase: 1 },
    kelvin: { name: 'Kelvin', symbol: 'K', toBase: 1, fromBase: 1 }
  },
  volume: {
    liter: { name: 'Liter', symbol: 'L', toBase: 1, fromBase: 1 },
    milliliter: { name: 'Milliliter', symbol: 'mL', toBase: 0.001, fromBase: 1000 },
    gallon: { name: 'US Gallon', symbol: 'gal', toBase: 3.78541, fromBase: 0.264172 },
    quart: { name: 'US Quart', symbol: 'qt', toBase: 0.946353, fromBase: 1.05669 },
    pint: { name: 'US Pint', symbol: 'pt', toBase: 0.473176, fromBase: 2.11338 },
    cup: { name: 'US Cup', symbol: 'cup', toBase: 0.236588, fromBase: 4.22675 },
    fluidounce: { name: 'Fluid Ounce', symbol: 'fl oz', toBase: 0.0295735, fromBase: 33.814 }
  }
};

export default function UnitConverter() {
  const [category, setCategory] = useState<ConversionCategory>('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');

  const convertTemperature = (value: number, from: string, to: string): number => {
    let celsius: number;
    
    // Convert to Celsius first
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }
    
    // Convert from Celsius to target
    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return celsius * 9/5 + 32;
      case 'kelvin':
        return celsius + 273.15;
      default:
        return celsius;
    }
  };

  const convert = (value: string, from: string, to: string): string => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '';

    if (category === 'temperature') {
      const result = convertTemperature(numValue, from, to);
      return result.toFixed(4).replace(/\.?0+$/, '');
    }

    const units = conversionData[category] as Record<string, ConversionUnit>;
    const fromUnitData = units[from];
    const toUnitData = units[to];
    
    if (!fromUnitData || !toUnitData) return '';

    // Convert to base unit, then to target unit
    const baseValue = numValue * fromUnitData.toBase;
    const result = baseValue * toUnitData.fromBase;
    
    return result.toFixed(6).replace(/\.?0+$/, '');
  };

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    const converted = convert(value, fromUnit, toUnit);
    setToValue(converted);
  };

  const handleToValueChange = (value: string) => {
    setToValue(value);
    const converted = convert(value, toUnit, fromUnit);
    setFromValue(converted);
  };

  const handleCategoryChange = (newCategory: ConversionCategory) => {
    setCategory(newCategory);
    const units = Object.keys(conversionData[newCategory]);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    setFromValue('');
    setToValue('');
  };

  const handleUnitChange = (unit: string, isFrom: boolean) => {
    if (isFrom) {
      setFromUnit(unit);
      const converted = convert(fromValue, unit, toUnit);
      setToValue(converted);
    } else {
      setToUnit(unit);
      const converted = convert(fromValue, fromUnit, unit);
      setToValue(converted);
    }
  };

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
    setToValue(fromValue);
  };

  const currentUnits = conversionData[category] as Record<string, ConversionUnit>;

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.keys(conversionData).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat as ConversionCategory)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
              category === cat
                ? 'bg-[#00B5AD] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conversion Interface */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
          {/* From Unit */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">From</label>
            <select
              value={fromUnit}
              onChange={(e) => handleUnitChange(e.target.value, true)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
            >
              {Object.entries(currentUnits).map(([key, unit]) => (
                <option key={key} value={key}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => handleFromValueChange(e.target.value)}
              placeholder="Enter value"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="bg-[#00B5AD] hover:bg-[#009B94] text-white p-3 rounded-full transition-colors"
              title="Swap units"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          {/* To Unit */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">To</label>
            <select
              value={toUnit}
              onChange={(e) => handleUnitChange(e.target.value, false)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
            >
              {Object.entries(currentUnits).map(([key, unit]) => (
                <option key={key} value={key}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
            <input
              type="number"
              value={toValue}
              onChange={(e) => handleToValueChange(e.target.value)}
              placeholder="Result"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
            />
          </div>
        </div>

        {/* Result Display */}
        {fromValue && toValue && (
          <div className="mt-6 p-4 bg-white rounded-lg border">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800">
                {fromValue} {currentUnits[fromUnit].symbol} = {toValue} {currentUnits[toUnit].symbol}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Conversion Examples */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-center">Quick Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {category === 'length' && (
            <>
              <div className="text-center p-2 bg-white rounded">1 meter = 3.28 feet</div>
              <div className="text-center p-2 bg-white rounded">1 mile = 1.61 km</div>
              <div className="text-center p-2 bg-white rounded">1 inch = 2.54 cm</div>
            </>
          )}
          {category === 'weight' && (
            <>
              <div className="text-center p-2 bg-white rounded">1 kg = 2.20 lbs</div>
              <div className="text-center p-2 bg-white rounded">1 lb = 16 oz</div>
              <div className="text-center p-2 bg-white rounded">1 ton = 1000 kg</div>
            </>
          )}
          {category === 'temperature' && (
            <>
              <div className="text-center p-2 bg-white rounded">0°C = 32°F</div>
              <div className="text-center p-2 bg-white rounded">100°C = 212°F</div>
              <div className="text-center p-2 bg-white rounded">0K = -273.15°C</div>
            </>
          )}
          {category === 'volume' && (
            <>
              <div className="text-center p-2 bg-white rounded">1 liter = 0.26 gallons</div>
              <div className="text-center p-2 bg-white rounded">1 gallon = 4 quarts</div>
              <div className="text-center p-2 bg-white rounded">1 cup = 8 fl oz</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
