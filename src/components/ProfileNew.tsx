import { Button } from "./ui/button";

const Profile = () => {
  const handleDownloadResume = () => {
    // Detect mobile devices
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const resumeUrl = "./Abdallah_Mohamed_Resume_v2.pdf";

    if (isMobile) {
      // For mobile devices, especially iOS, open in new tab
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      if (isIOS) {
        // iOS specific handling
        link.download = "Abdallah_Mohamed_Resume_v2.pdf";
      }

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fallback: if download doesn't work, try window.open
      setTimeout(() => {
        window.open(resumeUrl, "_blank");
      }, 100);
    } else {
      // Desktop download
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Abdallah_Mohamed_Resume_v2.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleContactMe = () => {
    window.open("mailto:abdallahtmohamed86@gmail.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-x">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden hero-section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-purple-300/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center animate-fade-in-up">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-3xl animate-fade-in">
              <img
                src="./abdallah.jpeg"
                alt="Abdallah Mohamed"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.classList.add(
                    "bg-white/20",
                    "backdrop-blur-sm",
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  e.currentTarget.parentElement!.innerHTML =
                    '<span class="text-2xl sm:text-4xl font-bold text-white">AM</span>';
                }}
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text animate-fade-in-up animation-delay-200">
              Abdallah Mohamed
            </h1>
            <div className="animate-typing-container animate-fade-in-up animation-delay-400">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 sm:mb-6">
                Full-Stack Developer & Software Engineer
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-blue-50 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-600">
              U.S. Citizen • 8+ Years Experience • Passionate about Clean
              Architecture
            </p>

            {/* Animated CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0 animate-fade-in-up animation-delay-800 justify-center items-center">
              <Button
                className="mobile-button w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-105 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 transition-all duration-300 hover:shadow-lg text-sm sm:text-base min-h-[48px]"
                onClick={handleDownloadResume}
              >
                📄 Download Resume
              </Button>
              <Button
                className="mobile-button w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 transition-all duration-300 hover:shadow-lg text-sm sm:text-base min-h-[48px]"
                onClick={handleContactMe}
              >
                💬 Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-6 sm:mb-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-slide-in-left mobile-card">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3 sm:mr-4 animate-pulse-glow"></span>
            Contact Information
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="flex items-start sm:items-center space-x-3 hover:transform hover:scale-105 transition-all duration-300 p-3 rounded-lg hover:bg-blue-50 cursor-pointer group contact-item">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
                <span className="text-blue-600 font-semibold">📧</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  Email
                </p>
                <p className="text-sm sm:text-base text-gray-800 font-medium group-hover:text-blue-700 transition-colors duration-300 break-words">
                  abdallahtmohamed86@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start sm:items-center space-x-3 hover:transform hover:scale-105 transition-all duration-300 p-3 rounded-lg hover:bg-green-50 cursor-pointer group contact-item">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300 flex-shrink-0">
                <span className="text-green-600 font-semibold">📞</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300">
                  Phone
                </p>
                <p className="text-sm sm:text-base text-gray-800 font-medium group-hover:text-green-700 transition-colors duration-300">
                  (207) 409-7887
                </p>
              </div>
            </div>
            <div className="flex items-start sm:items-center space-x-3 hover:transform hover:scale-105 transition-all duration-300 p-3 rounded-lg hover:bg-purple-50 cursor-pointer group contact-item">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0">
                <span className="text-purple-600 font-semibold">📍</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                  Location
                </p>
                <p className="text-sm sm:text-base text-gray-800 font-medium group-hover:text-purple-700 transition-colors duration-300">
                  Brunswick, ME 04011
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-slide-in-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-4 animate-pulse-glow"></span>
            Professional Summary
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl hover:from-purple-100 hover:to-blue-100 transition-all duration-500">
            <p className="text-gray-700 leading-relaxed text-lg animate-fade-in">
              I'm a full-stack developer with over 8 years of experience
              building web applications for both small and large businesses.
              I've worked primarily with PHP, Laravel, and Python, along with
              several other languages, and have built numerous personal projects
              as well. I'm excited to join a team that values simplicity and
              clean architecture. I enjoy working on new projects as well as
              modernizing legacy systems. I have strong experience with APIs,
              security, automation, and team collaboration — especially in
              remote environments. I consistently strive to write clean,
              testable code and build software that solves real-world problems.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="professional-card rounded-2xl shadow-xl p-4 sm:p-8 mb-6 sm:mb-8 border border-gray-100 hover-lift animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="w-2 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-teal-600 rounded-full mr-3 sm:mr-4 animate-pulse-glow"></span>
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                Backend Development
              </h3>
              <div className="space-y-2">
                {[
                  "PHP",
                  "Laravel Framework",
                  "Python",
                  "C#/.NET",
                  "VB.NET",
                  "Qt C++",
                  "REST APIs",
                  "SOAP APIs",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium skill-badge hover:bg-blue-100 hover:text-blue-800 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                Frontend & Mobile
              </h3>
              <div className="space-y-2">
                {[
                  "NativePHP",
                  "Livewire 3.5+",
                  "Alpine.js",
                  "React.js",
                  "Vue.js",
                  "TypeScript",
                  "JavaScript",
                  "TailwindCSS",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium skill-badge hover:bg-green-100 hover:text-green-800 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                Databases & Cloud
              </h3>
              <div className="space-y-2">
                {[
                  "SQL Server (SQLSRV)",
                  "MySQL",
                  "PostgreSQL",
                  "SQLite",
                  "Access Database",
                  "AWS Services",
                  "Azure Services",
                  "Azure AD",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium skill-badge hover:bg-purple-100 hover:text-purple-800 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-800">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                DevOps & Systems
              </h3>
              <div className="space-y-2">
                {[
                  "Linux (Ubuntu)",
                  "TDD (Pest)",
                  "PHPStan",
                  "CI/CD (GitHub)",
                  "Git/Version Control",
                  "Agile Methodology",
                  "Stripe/PayPal",
                  "Raw SQL Reporting",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium skill-badge hover:bg-orange-100 hover:text-orange-800 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="professional-card rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover-lift animate-slide-in-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-4 animate-pulse-glow"></span>
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors duration-300">
                Programmer / Software Engineer
              </h3>
              <p className="text-blue-600 font-semibold mb-4 animate-fade-in animation-delay-200">
                KYOCERA-AVX | October 2022 – Present
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-4 hover:from-blue-100 hover:to-indigo-100 transition-all duration-500 animate-fade-in animation-delay-400">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  Key Responsibilities:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="transition-all duration-300 hover:text-gray-900 hover:translate-x-1">
                    • Reverse engineered and modernized legacy systems (VB.NET,
                    Access Database) into cross-platform applications using
                    Laravel, Qt C++, C#, .NET, and Python
                  </li>
                  <li className="transition-all duration-300 hover:text-gray-900 hover:translate-x-1">
                    • Built native mobile and desktop applications using
                    NativePHP for cross-platform deployment on iOS, Android, and
                    desktop environments
                  </li>
                  <li className="transition-all duration-300 hover:text-gray-900 hover:translate-x-1">
                    • Led cloud-native solution migration for in-house
                    applications using AWS and Azure services on Linux (Ubuntu)
                    infrastructure
                  </li>
                  <li className="transition-all duration-300 hover:text-gray-900 hover:translate-x-1">
                    • Designed and implemented secure authentication using Azure
                    AD for internal applications
                  </li>
                  <li className="transition-all duration-300 hover:text-gray-900 hover:translate-x-1">
                    • Developed REST and SOAP APIs for integrating legacy data
                    with modern web and mobile platforms
                  </li>
                  <li className="transition-all duration-300 hover:text-gray-900 hover:translate-x-1">
                    • Created AI-based tools for data extraction and automated
                    reporting using Python and OpenAI APIs
                  </li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-4 animate-fade-in animation-delay-600">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-3 rounded-lg hover:from-gray-100 hover:to-blue-100 transition-all duration-300 hover-lift">
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                    Technical Skills Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "PHP",
                      "Laravel",
                      "NativePHP",
                      "C#/.NET",
                      "Qt C++",
                      "Python",
                      "VB.NET",
                      "Azure AD",
                      "AWS",
                      "Linux",
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium skill-badge hover:bg-blue-200 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-green-50 p-3 rounded-lg hover:from-gray-100 hover:to-green-100 transition-all duration-300 hover-lift">
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                    Databases & Deployment:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SQL Server",
                      "MySQL",
                      "PostgreSQL",
                      "SQLite",
                      "Access DB",
                      "Ubuntu",
                      "Git",
                      "CI/CD",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium skill-badge hover:bg-green-200 cursor-pointer"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800">
                Freelance Web Application Developer
              </h3>
              <p className="text-green-600 font-semibold mb-2">
                2017 – Present
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>
                  • Designed custom SaaS platforms using Laravel and Livewire
                </li>
                <li>
                  • Founded Djib-Payroll, an AI-powered payroll management
                  system
                </li>
                <li>
                  • Developed Intellink community platform for healthcare
                  professionals
                </li>
                <li>• Created V-Carte digital business card platform</li>
                <li>• Built SmartyReport for Shopify data analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full mr-4"></span>
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800">
                Bachelor of Science | Computer Science and Programming
              </h3>
              <p className="text-blue-600 font-semibold">
                University of Southern Maine, Portland, ME
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800">
                Associate of Applied Science | Computer Science and Programming
              </h3>
              <p className="text-green-600 font-semibold">
                Southern Maine Community College, South Portland, ME
              </p>
            </div>
          </div>
        </div>

        {/* Notable Projects */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full mr-4"></span>
            Project Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Djib-Payroll
              </h3>
              <p className="text-gray-700 mb-4">
                Modern, AI-enhanced Human Resources and Payroll management
                platform specifically tailored for Djibouti regulations.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Employee Management & Absence Tracking</li>
                  <li>
                    • Automated Payroll Processing (CNSS & ITS calculations)
                  </li>
                  <li>• AI Assistant Features (ChatPDF integration)</li>
                  <li>• Multilingual Support (English, French, Arabic)</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Laravel 12",
                    "PHP 8.3+",
                    "Livewire 3.5+",
                    "Alpine.js",
                    "TailwindCSS",
                    "MySQL",
                    "Pest",
                    "PHPStan",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://www.djib-payroll.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                SmartyReport
              </h3>
              <p className="text-gray-700 mb-4">
                A Shopify analytics and reporting tool that gives e-commerce
                stores actionable insights for tracking sales performance,
                customer behavior, and product trends.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sales Performance Analytics</li>
                  <li>• Customer Behavior Tracking</li>
                  <li>• Product Trend Analysis</li>
                  <li>• Custom Report Generation</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-medium">
                  Laravel Framework
                </span>
              </div>
              <span className="text-green-600 font-medium">
                Shopify App Store
              </span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Intellink
              </h3>
              <p className="text-gray-700 mb-4">
                A professional networking and resource-sharing platform for
                healthcare policy experts to connect, publish resources, and
                collaborate.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Professional Networking</li>
                  <li>• Resource Publishing & Sharing</li>
                  <li>• Expert Collaboration Tools</li>
                  <li>• Healthcare Policy Focus</li>
                </ul>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {["Laravel", "Livewire"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://www.intellink.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-orange-800 mb-3">
                V-Carte
              </h3>
              <p className="text-gray-700 mb-4">
                A digital business card solution designed for users in Djibouti
                to access international digital services, featuring QR codes,
                user profiles, and secure online purchases.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Digital Business Cards with QR Codes</li>
                  <li>• User Profile Management</li>
                  <li>• Secure Online Purchase System</li>
                  <li>• International Service Access</li>
                </ul>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {["Laravel", "Livewire", "TailwindCSS"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://www.v-carte.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-4 sm:mb-6 px-2">
            Let's discuss how I can help bring your next project to life.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-2">
            <Button
              className="mobile-button w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base min-h-[48px]"
              onClick={handleDownloadResume}
            >
              📄 Download Resume
            </Button>
            <Button
              className="mobile-button w-full sm:w-auto bg-blue-500 hover:bg-blue-400 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-blue-300 text-sm sm:text-base min-h-[48px]"
              onClick={handleContactMe}
            >
              💬 Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
