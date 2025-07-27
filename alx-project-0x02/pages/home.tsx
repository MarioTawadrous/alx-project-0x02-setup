import Card from "@/components/common/Card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Welcome to our Application
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="First Card"
          content="This is the content for the first card component with Tailwind styling. Notice the shadow on hover."
        />
        <Card
          title="Second Card"
          content="Different content for the second card showing reusability. The cards have consistent styling throughout."
        />
        <Card
          title="Third Card"
          content="Another example of the card component with unique content. The grid layout responds to different screen sizes."
        />
      </div>
    </div>
  );
}
