import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Our Project
        </h1>
        <p className="text-xl text-gray-600">
          Learn more about our application and its features
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We aim to create beautiful, accessible UI components that can be
          easily integrated into any React application. Our focus is on
          developer experience and user experience, ensuring that both
          developers and end users have a great experience with our components.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Button
            size="small"
            shape="rounded-sm"
            onClick={() => alert("Small button clicked!")}
          >
            Small Button
          </Button>

          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => alert("Medium button clicked!")}
            className="bg-green-600 hover:bg-green-700"
          >
            Medium Button
          </Button>

          <Button
            size="large"
            shape="rounded-full"
            onClick={() => alert("Large button clicked!")}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Large Button
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Component Library
          </h3>
          <p className="text-gray-600">
            Our library includes various reusable components like Cards,
            Buttons, and Modals that follow modern design principles and are
            fully responsive.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Customization
          </h3>
          <p className="text-gray-600">
            All components are highly customizable through props and support
            theming with Tailwind CSS. You can easily adapt them to match your
            application&aposs design system.
          </p>
        </div>
      </div>
    </div>
  );
}
