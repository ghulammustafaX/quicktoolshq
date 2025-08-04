import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import BMICalculator from '@/components/tools/BMICalculator';

export default function BMICalculatorPage() {
  return (
    <Layout>
      <ToolLayout
        title="BMI Calculator"
        description="Calculate your Body Mass Index (BMI) to understand your weight status and health risks. Simply enter your height and weight to get instant results with health recommendations."
      >
        <BMICalculator />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free BMI Calculator - Check Your Body Mass Index Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Calculate your Body Mass Index (BMI) instantly with our free online BMI calculator. 
              Enter your height and weight to determine if you're underweight, normal weight, overweight, or obese. 
              Our BMI calculator uses the standard WHO formula trusted by healthcare professionals worldwide for accurate health assessments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Medical Grade Accuracy</strong>
                <p className="text-sm text-gray-600">WHO approved BMI formula</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Instant Results</strong>
                <p className="text-sm text-gray-600">Immediate BMI calculation</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">100% Private</strong>
                <p className="text-sm text-gray-600">No personal data stored</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the BMI Calculator
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-[#00B5AD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Select your preferred unit system</strong>
                  <p className="text-gray-600 text-sm">Choose between metric (cm/kg) or imperial (inches/lbs) measurements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-[#00B5AD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Enter your height and weight</strong>
                  <p className="text-gray-600 text-sm">Input accurate measurements for precise BMI calculation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-[#00B5AD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Get instant BMI results</strong>
                  <p className="text-gray-600 text-sm">View your BMI score, weight category, and health recommendations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Understanding BMI Categories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">BMI Weight Categories</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Underweight</span>
                    <span className="font-medium">Below 18.5</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Normal weight</span>
                    <span className="font-medium">18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Overweight</span>
                    <span className="font-medium">25.0 - 29.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Obese</span>
                    <span className="font-medium">30.0 and above</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">BMI Calculation Formula</h4>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-800">Metric System:</strong>
                    <p className="text-gray-600 text-sm">BMI = weight (kg) ÷ height² (m²)</p>
                  </div>
                  <div>
                    <strong className="text-gray-800">Imperial System:</strong>
                    <p className="text-gray-600 text-sm">BMI = (weight (lbs) ÷ height² (inches)) × 703</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Important Notes About BMI
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>BMI Limitations:</strong> BMI is a screening tool that doesn't account for muscle mass, bone density, 
                age, sex, or ethnicity. Athletes and muscular individuals may have high BMI despite being healthy.
              </p>
              <p className="text-gray-700">
                <strong>Medical Consultation:</strong> Always consult healthcare professionals for comprehensive health 
                assessments. BMI should be used alongside other health indicators.
              </p>
              <p className="text-gray-700">
                <strong>Age Considerations:</strong> BMI ranges may not apply to children, teenagers, pregnant women, 
                or adults over 65. Different standards may be more appropriate.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About BMI
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What is a healthy BMI range?</h4>
                <p className="text-gray-700 text-sm">A healthy BMI is typically between 18.5 and 24.9. However, optimal BMI can vary based on individual factors like age, muscle mass, and overall health.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How accurate is BMI for health assessment?</h4>
                <p className="text-gray-700 text-sm">BMI is a useful screening tool but has limitations. It doesn't distinguish between muscle and fat mass, so it may not accurately reflect health for very muscular or athletic individuals.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Should I use metric or imperial measurements?</h4>
                <p className="text-gray-700 text-sm">Both systems provide equally accurate results. Choose the measurement system you're most comfortable with. Our calculator handles conversions automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free BMI Calculator - Body Mass Index Calculator Online | QuickToolsHQ',
  description: 'Calculate your BMI (Body Mass Index) instantly with our free online calculator. Check if you\'re underweight, normal weight, overweight, or obese. Medical-grade BMI calculation tool with WHO standards.',
  keywords: 'BMI calculator, body mass index calculator, BMI chart, healthy weight calculator, obesity calculator, underweight calculator, weight status, health assessment tool, WHO BMI standards, free BMI tool',
  openGraph: {
    title: 'Free BMI Calculator - Calculate Body Mass Index Online',
    description: 'Free BMI calculator to check your body mass index and weight status. Instant results with health recommendations using WHO standards.',
    type: 'website',
  }
};
