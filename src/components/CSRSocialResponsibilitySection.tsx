'use client';

const CSRSocialResponsibilitySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Social Responsibility
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Employee Welfare Section */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Employee Welfare
            </h3>
            <p className="text-base md:text-lg text-black leading-relaxed">
              JAC fosters an employee-centric corporate culture, ensuring both material and spiritual well-being. Here, everyone can find meaning in their work and lead a fulfilling life.
            </p>
          </div>

          {/* Contribution to Society Section */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Contribution to Society
            </h3>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Through systematic reforms and alignment with social progress, JAC accurately applies energy-saving, environmental protection, and intelligent safety technologies to drive the common progress of the entire value chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRSocialResponsibilitySection;
