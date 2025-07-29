import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StockTicker from '../components/StockTicker';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Downloads: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const downloadCategories = {
    'Combine KYC Forms': [
      'Individual CKYC Form',
      'Non Individual CKYC Form',
      'Rights and Obligation',
      'Risk Disclosure Documents',
      'Rights And Obligations For Trading A/c'
    ],
    'Other Demat form': [
      'Multiple Nomination',
      'Account Closure Form',
      'Transposition Form',
      'Transmission Form',
      'Name Change Application',
      'Signature Change Application',
      'Email – Mobile Declaration',
      'Permitted To Trade data',
      'Demat Teriff',
      'List of Approved Securities'
    ],
    'Policies': [
      'Granting of Exposure to Clients',
      'Policy on Handling of Good Till Cancelled (GTC) Orders',
      'Combined Risk Management and Internal Control Policy',
      'RMS Manual',
      'PMLA Policy',
      'Limit Setting',
      'Policy of Inactive Accounts',
      'Pre-funded Instruments',
      'Code Modification Policy',
      'Policy on Squaring Off Client Positions',
      'Policy on Internal Shortage',
      'Policy For Voluntary Blocking of The Trading Account',
      'Policy of Outsources Activities',
      'Surveillance Policy'
    ],
    'Other Forms': [
      'FATCA Form',
      'KRA Individual Form',
      'KRA Non Individual Form',
      'C-KYC Individual Form',
      'C-KYC Non Individual Form',
      'Important Exchange Circular',
      'Important SEBI Circular'
    ],
    'Important Circulars': [
      'Important DP Circular',
      'Important Exchange Circular',
      'Important SEBI Circular'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="downloads" />
      
      {/* Hero Section with Background */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-orange-400">Download</span> Center
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-2">
              Access all important documents and forms
            </p>
          </div>
        </div>
      </section>

             {/* Stock Ticker */}
       <StockTicker />



       {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              
              {/* Documents in Vernacular Languages */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Documents in Vernacular Languages
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
                  >
                    BSE Documents
                  </a>
                  <a 
                    href="https://www.nseindia.com/trade/members-client-registration-documents" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
                  >
                    NSE Documents
                  </a>
                </div>
              </div>

              {/* Download Categories - Left Side Layout */}
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                {/* Left Side - Main Buttons */}
                <div className="lg:w-1/3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Download Categories</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {Object.keys(downloadCategories).map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleDropdown(category)}
                        className="w-full text-left p-3 sm:p-4 rounded-lg transition-colors duration-300 flex items-center justify-between text-sm sm:text-base bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <span className="font-medium truncate">{category}</span>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Content Area */}
                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      {openDropdown ? openDropdown : 'Select a category to view documents'}
                    </h3>
                    
                    {openDropdown && (
                      <div className="space-y-2 sm:space-y-3">
                        {downloadCategories[openDropdown as keyof typeof downloadCategories].map((item, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white rounded-lg shadow-sm space-y-2 sm:space-y-0">
                            <span className="text-gray-700 text-sm sm:text-base truncate">{item}</span>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs sm:text-sm transition-colors duration-200 self-start sm:self-auto">
                              Download
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {!openDropdown && (
                      <div className="text-center text-gray-500 py-6 sm:py-8">
                        <p className="text-sm sm:text-base">Click on any category from the left to view and download available documents.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Important Information
                </h3>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p>• All forms are available in PDF format for easy download and printing.</p>
                  <p>• Please ensure you fill out the correct forms for your requirements.</p>
                  <p>• For assistance with form filling, please contact our support team.</p>
                  <p>• Documents in vernacular languages are available through the links above.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Need Help?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                  <div>
                    <p><strong>Email:</strong> info@moneycareindia.co.in</p>
                    <p><strong>Phone:</strong> +91-22-6234-5678</p>
                  </div>
                  <div>
                    <p><strong>Compliance Officer:</strong> Mr. Manish Thakor</p>
                    <p><strong>Grievance ID:</strong> complaint@moneycareindia.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                 </div>
       </section>

       {/* Important Notices Marquee */}
       <section className="py-8 bg-blue-50">
         <div className="container mx-auto px-4">
           <div className="bg-white rounded-lg shadow-sm border border-yellow-200 p-4">
             <div className="flex items-center space-x-3 mb-4">
               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
               <h3 className="text-lg font-bold text-gray-900">Important Notices</h3>
             </div>
             <div className="overflow-hidden">
               <div className="animate-marquee whitespace-nowrap text-sm text-gray-700 leading-relaxed">
                 <div className="inline-block mr-8">
                   <div className="mb-4">
                     <strong className="text-red-600">ATTENTION INVESTORS:</strong> Prevent Unauthorized Transactions in your demat account. Update your Mobile Number with Us. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from CDSL on the same day.... Issued in the interest of investors.
                   </div>
                   <div className="mb-4">
                     <strong className="text-blue-800">KYC:</strong> KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (Broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
                   </div>
                   <div className="mb-4">
                     <strong className="text-blue-800">IPO:</strong> No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investors account.
                   </div>
                   <div className="mb-4">
                     <strong className="text-blue-800">IBT Trading:</strong> The Stock Exchange, Mumbai is not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc., of any of the Rules, Regulations, Bye-laws of the Stock Exchange, Mumbai, SEBI Act or any other laws in force from time to time.
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Additional Information */}
       <section className="py-6 bg-gray-50">
         <div className="container mx-auto px-4">
           <div className="bg-white p-6 rounded-lg shadow-sm">
             <div className="space-y-4">
               <p className="text-gray-800">
                 <strong>Note:</strong> This is to inform you that we do Client based trading as well as Pro-account trading.
               </p>
               <div>
                 <p className="text-gray-800 mb-2">
                   <strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       <Footer />
    </div>
  );
};

export default Downloads;