"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Shield, Lock, FileX, Server, Cookie, Globe, Users, Eye, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'no-collect',
      icon: FileX,
      title: 'Information We Do Not Collect',
      content: [
        'We do not collect, store, or share any personal information. All tool operations are performed locally in your browser, and no data is transmitted to our servers.',
        'You do not need to create an account or provide any personal details to use our tools.',
        'We do not log IP addresses, browser information, or any identifying metadata about your visits.'
      ]
    },
    {
      id: 'data-processing',
      icon: Server,
      title: 'Data Processing',
      content: [
        'All processing (calculations, conversions, file handling) is done entirely within your browser using JavaScript.',
        'Files and text you use with our tools are never uploaded to any server. They remain on your device at all times.',
        'All data is cleared from browser memory when you close the tab or navigate away from our tools.'
      ]
    },
    {
      id: 'cookies-tracking',
      icon: Cookie,
      title: 'Cookies and Tracking',
      content: [
        'We do not use cookies, local storage, session storage, or any tracking technologies to monitor your activity.',
        'We do not use Google Analytics, Facebook Pixel, or any other analytics services.',
        'Your usage of our site is completely anonymous. We have no way to identify or track individual users.'
      ]
    },
    {
      id: 'third-party',
      icon: Globe,
      title: 'Third-Party Services',
      content: [
        'QuickToolsHQ does not integrate with third-party analytics, advertising, or marketing services.',
        'While we may use CDNs for static assets, no user data or usage information is ever shared with external parties.',
        'Our tools operate independently without requiring external APIs that could compromise your privacy.'
      ]
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Security',
      content: [
        'We use modern web technologies and best practices to ensure your data remains private and secure while using our tools.',
        'All communication with our website is encrypted using HTTPS.',
        'Since no data is transmitted or stored on our servers, the risk of data breaches is eliminated.'
      ]
    },
    {
      id: 'children',
      icon: Users,
      title: "Children's Privacy",
      content: [
        'Our website and tools are suitable for users of all ages. We do not knowingly collect information from children under 13, as we do not collect any user data at all.',
        'Teachers and parents can use our tools in educational settings without privacy concerns.'
      ]
    },
    {
      id: 'changes',
      icon: Eye,
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated.',
        'We will provide advance notice of significant changes that affect your privacy.'
      ]
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-gray-700 mb-4">
          At QuickToolsHQ, your privacy is our top priority. We are dedicated to providing fast, free online tools while ensuring that your data remains secure and private. This Privacy Policy outlines how we handle your information when you use our website and tools.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-medium">
            Key Point: All our tools work entirely in your browser. We never collect, store, or transmit your data.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSections[section.id];
          
          return (
            <div key={section.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Icon className="w-5 h-5 text-blue-600 mr-3" />
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="pt-4 space-y-3">
                    {section.content.map((item, index) => (
                      <p key={index} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
      <div className="mt-8 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-semibold">Contact Us</h2>
        </div>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy or your privacy when using QuickToolsHQ, please contact us.
        </p>
        <a 
          href="mailto:hello@quicktoolshq.com" 
          className="text-blue-600 underline hover:text-blue-700"
        >
          hello@quicktoolshq.com
        </a>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Last updated: August 2025
      </div>
    </main>
  );
}