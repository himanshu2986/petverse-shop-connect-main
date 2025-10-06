import { PageBanner } from "@/components/PageBanner";

const RescueProgram = () => {
  return (
    <div>
      <PageBanner title="Our Street Dog Rescue Program" imageUrl="/assets/rescue 1.jpg" />
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">We Save Street Dogs</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are dedicated to rescuing street dogs, providing them with medical treatment, food, and shelter. Our goal is to help them recover and find loving homes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Treatment</h3>
            <p className="text-gray-600">
              Our team of veterinarians and volunteers provide comprehensive medical care to every rescued dog, from vaccinations to life-saving surgeries.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Food and Nutrition</h3>
            <p className="text-gray-600">
              We ensure that all our rescued dogs receive nutritious meals to help them regain their strength and health.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Adoption and Rehabilitation</h3>
            <p className="text-gray-600">
              We work on rehabilitating the dogs and finding them safe and loving forever homes through our adoption program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescueProgram;
