import React from "react";
import { Button } from "./ui/button";

const ProfessionalProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="text-4xl font-bold">AM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text">
              Abdallah Mohamed
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Full-Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-blue-50 max-w-2xl mx-auto">
              U.S. Citizen • 8+ Years Experience • Passionate about Clean
              Architecture
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></span>
            Contact Information
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800 font-medium">
                  abdallahtmohamed86@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-semibold">📞</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800 font-medium">(207) 409-7887</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-semibold">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800 font-medium">Brunswick, ME 04011</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-4"></span>
            Professional Summary
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-lg">
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
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-600 rounded-full mr-4"></span>
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Backend Development
              </h3>
              <div className="space-y-2">
                {[
                  "PHP",
                  "Laravel Framework",
                  "Python",
                  "Ruby on Rails",
                  "MySQL",
                  "PostgreSQL",
                  "REST APIs",
                  "SOAP APIs",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Frontend Development
              </h3>
              <div className="space-y-2">
                {[
                  "React.js",
                  "Vue.js",
                  "TypeScript",
                  "JavaScript",
                  "TailwindCSS",
                  "Bootstrap",
                  "HTML/CSS",
                  "AlpineJS",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Additional Skills
              </h3>
              <div className="space-y-2">
                {[
                  "OAuth/SSO/SAML",
                  "Git/GitHub",
                  "TDD",
                  "Agile Methodology",
                  "Security & Compliance",
                  "Project Management",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-4"></span>
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800">
                Programmer / Software Engineer
              </h3>
              <p className="text-blue-600 font-semibold mb-2">
                KYOCERA-AVX | October 2022 – Present
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>
                  • Developed scalable backend solutions using PHP, Laravel, SQL
                  Server, and MySQL
                </li>
                <li>
                  • Modernized legacy systems through reverse engineering and
                  cross-platform transitions
                </li>
                <li>
                  • Built REST APIs and SOAP APIs for manufacturing environments
                </li>
                <li>
                  • Specialized in Test-Driven Development (TDD) for
                  high-quality code
                </li>
                <li>
                  • Implemented secure authentication methods including OAuth
                  and SSO/SAML
                </li>
              </ul>
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
                University of Southern Maine, Portland, ME (Expected 2025)
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
            Notable Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Djib-Payroll
              </h3>
              <p className="text-gray-700">
                A custom AI-powered payroll management system designed for
                businesses in Djibouti, automating payroll processing and HR
                tasks.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                SmartyReport
              </h3>
              <p className="text-gray-700">
                A Shopify application for data analytics and reporting, helping
                e-commerce businesses make data-driven decisions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Intellink
              </h3>
              <p className="text-gray-700">
                A community platform for healthcare policy professionals to
                connect, share insights, and access premium resources.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-orange-800 mb-3">
                V-Carte
              </h3>
              <p className="text-gray-700">
                A digital business card solution for Djibouti users, providing
                access to international digital services and products.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Let's discuss how I can help bring your next project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
              Download Resume
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-400 font-semibold px-8 py-3 rounded-lg border border-blue-300">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
