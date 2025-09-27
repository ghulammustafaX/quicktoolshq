"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Wrench, Shield, AlertTriangle, Copyright, Edit, Mail } from "lucide-react";

export default function TermsOfServicePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'acceptance',
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using QuickToolsHQ, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
        'If you do not agree with any part of these terms, you may not use our website or tools.',
        'Your continued use of our services constitutes acceptance of any updates to these terms.'
      ]
    },
    {
      id: 'use-of-tools',
      icon: Wrench,
      title: 'Use of Tools',
      content: [
        'Our tools are provided free of charge for personal, educational, and professional use.',
        'You may not use our tools for any unlawful, harmful, or malicious activities.',
        'You are responsible for ensuring your use complies with applicable laws in your jurisdiction.',
        'We reserve the right to limit or restrict access to our tools if we detect abuse or misuse.'
      ]
    },
    {
      id: 'user-responsibilities',
      icon: Shield,
      title: 'User Responsibilities',
      content: [
        'You are solely responsible for the data you input into our tools and the results you obtain.',
        'You must not attempt to reverse engineer, modify, or create derivative works of our tools.',
        'You must not use our tools to process illegal, harmful, or copyrighted content without proper authorization.',
        'You are responsible for maintaining the security of your own data and devices when using our tools.'
      ]
    },
    {
      id: 'limitation-liability',
      icon: Shield,
      title: 'Limitation of Liability',
      content: [
        'QuickToolsHQ and its operators shall not be liable for any direct, indirect, incidental, or consequential damages.',
        'This includes but is not limited to damages for loss of profits, data, or other intangible losses.',
        'Our total liability, if any, shall not exceed the amount you paid for using our services (which is zero for free tools).',
        'Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.'
      ]
    },
    {
      id: 'intellectual-property',
      icon: Copyright,
      title: 'Intellectual Property',
      content: [
        'All content, design, code, and branding on QuickToolsHQ are protected by copyright and other intellectual property laws.',
        'You may not copy, modify, distribute, or create derivative works without explicit written permission.',
        'You retain ownership of any data you input into our tools, as we do not store or collect it.',
        'Our tools may use open-source libraries and components, which are governed by their respective licenses.'
      ]
    },
    {
      id: 'service-availability',
      icon: Wrench,
      title: 'Service Availability',
      content: [
        'We strive to maintain high availability but do not guarantee uninterrupted access to our tools.',
        'We may temporarily suspend or restrict access for maintenance, updates, or security reasons.',
        'We reserve the right to discontinue or modify any tool or service at any time without prior notice.',
        'We are not responsible for any inconvenience caused by service interruptions or changes.'
      ]
    },
    {
      id: 'changes-to-terms',
      icon: Edit,
      title: 'Changes to Terms',
      content: [
        'We may update these Terms of Service at any time to reflect changes in our practices or legal requirements.',
        'Updated terms will be posted on this page with a revised effective date.',
        'We will make reasonable efforts to notify users of significant changes through our website.',
        'Your continued use after changes constitutes acceptance of the updated terms.'
      ]
    },
    {
      id: 'governing-law',
      icon: FileText,
      title: 'Governing Law',
      content: [
        'These Terms of Service shall be governed by and construed in accordance with applicable laws.',
        'Any disputes arising from these terms or your use of our services will be resolved through appropriate legal channels.',
        'If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.',
        'These terms constitute the entire agreement between you and QuickToolsHQ regarding your use of our services.'
      ]
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FileText className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>
        <p className="text-gray-700 mb-4">
          Welcome to QuickToolsHQ! By using our website and tools, you agree to the following terms and conditions. 
          Please read them carefully before using our services.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 font-medium">
            Important: These terms govern your use of our free online tools. By using our services, you accept these terms in full.
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

      <div className="mt-6 text-center text-sm text-gray-500">
        Last updated: August 2025
      </div>
    </main>
  );
}