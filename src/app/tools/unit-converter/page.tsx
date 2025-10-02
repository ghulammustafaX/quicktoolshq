import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import UnitConverter from '@/components/tools/UnitConverter';

export default function UnitConverterPage() {
  return (
    <Layout>
      <ToolLayout
        title="Unit Converter"
        description="Convert between different units of measurement instantly. Supports length, weight, temperature, and volume conversions with high precision."
      >
        <UnitConverter />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free Unit Converter - Convert Measurements Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Convert between different units of measurement instantly with our free online unit converter. 
              Supports length, weight, temperature, and volume conversions with high precision. 
              Perfect for students, professionals, and anyone needing quick and accurate unit conversions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Multiple Categories</strong>
                <p className="text-sm text-gray-600">Length, weight, temperature, volume</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">High Precision</strong>
                <p className="text-sm text-gray-600">Accurate to 6 decimal places</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Global Standards</strong>
                <p className="text-sm text-gray-600">International conversion factors</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the Unit Converter
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Select conversion category</strong>
                  <p className="text-gray-600 text-sm">Choose from length, weight, temperature, or volume conversions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Enter value and units</strong>
                  <p className="text-gray-600 text-sm">Input the number and select the source and target units</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Get instant results</strong>
                  <p className="text-gray-600 text-sm">View the converted value with high precision calculations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Supported Unit Categories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Length & Distance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Metric</span>
                    <span className="font-medium">m, km, cm, mm</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Imperial</span>
                    <span className="font-medium">ft, in, yd, mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Precision</span>
                    <span className="font-medium">6 decimal places</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Weight & Mass</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Metric</span>
                    <span className="font-medium">kg, g, mg, t</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Imperial</span>
                    <span className="font-medium">lb, oz, st</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Scientific</span>
                    <span className="font-medium">High accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Common Unit Conversions
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Temperature:</strong> Convert between Celsius, Fahrenheit, and Kelvin with precise formulas. 
                Essential for cooking, weather, and scientific calculations.
              </p>
              <p className="text-gray-700">
                <strong>Length:</strong> Convert meters to feet, inches to centimeters, and more. 
                Perfect for construction, crafts, and international measurements.
              </p>
              <p className="text-gray-700">
                <strong>Weight:</strong> Convert kilograms to pounds, grams to ounces, and other mass units. 
                Useful for cooking, shipping, and fitness tracking.
              </p>
              <p className="text-gray-700">
                <strong>Volume:</strong> Convert liters to gallons, milliliters to cups, and fluid measurements. 
                Essential for recipes, chemistry, and liquid measurements.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How accurate are the conversions?</h4>
                <p className="text-gray-700 text-sm">Our unit converter uses internationally accepted conversion factors and provides results accurate to 6 decimal places, ensuring scientific-grade precision for all calculations.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Which unit types are supported?</h4>
                <p className="text-gray-700 text-sm">We support length (meters, feet, inches), weight (kilograms, pounds, ounces), temperature (Celsius, Fahrenheit, Kelvin), and volume (liters, gallons, cups) conversions.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I convert between metric and imperial?</h4>
                <p className="text-gray-700 text-sm">Yes, our converter seamlessly handles conversions between metric and imperial systems, making it perfect for international use and cross-system calculations.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Is the converter suitable for professional use?</h4>
                <p className="text-gray-700 text-sm">Absolutely. With high precision calculations and internationally accepted conversion factors, our tool is suitable for engineering, scientific, and professional applications.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-3">💡</span>
              Common Conversion Examples
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">🍳</span>
                <span className="text-gray-700">Cooking measurements (cups to milliliters, ounces to grams)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">✈️</span>
                <span className="text-gray-700">International travel (miles to kilometers, Fahrenheit to Celsius)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">🏗️</span>
                <span className="text-gray-700">Construction and engineering (feet to meters, pounds to kilograms)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-500">🔬</span>
                <span className="text-gray-700">Scientific calculations (Celsius to Kelvin, grams to ounces)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#4A5565] mb-4">Accuracy and Precision</h3>
            <p className="text-gray-700 leading-relaxed">
              All conversions use internationally accepted conversion factors and provide 
              results accurate to 6 decimal places. Temperature conversions account for 
              the different scales and zero points of each temperature system.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free Unit Converter - Length, Weight, Temperature, Volume | QuickToolsHQ',
  description: 'Convert between different units of measurement instantly. Free online unit converter for length, weight, temperature, and volume with high precision calculations.',
  keywords: 'unit converter, metric converter, imperial converter, temperature converter, celsius to fahrenheit, feet to meters, kg to pounds, measurement tool, conversion calculator, length converter, weight converter, volume converter, scientific calculator, engineering tools, measurement conversion, unit conversion tool, online converter, metric to imperial, fahrenheit to celsius, inches to cm, pounds to kg, liters to gallons',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/unit-converter',
  },
  openGraph: {
    title: 'Free Unit Converter - Convert Any Measurement Unit',
    description: 'Convert between different units of measurement instantly. Supports length, weight, temperature, and volume.',
    url: 'https://quicktoolshq.com/tools/unit-converter',
    type: 'website',
  }
};
