interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tool Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Tool Content */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {children}
      </div>

      {/* Tool Footer Info */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Free online tool by{' '}
          <span className="font-medium text-[#00B5AD]">QuickToolsHQ</span>
        </p>
      </div>
    </div>
  );
}
