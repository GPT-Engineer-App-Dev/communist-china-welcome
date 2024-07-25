import { Flag, Users, Building, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Communist China</h1>
        <p className="text-xl text-gray-600">The People's Republic of China</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 mb-4">
          Communist China, officially known as the People's Republic of China (PRC), is the world's most populous country
          and the largest communist state. Established in 1949 under the leadership of Mao Zedong, it has since undergone
          significant economic and social transformations.
        </p>
        <img src="/placeholder.svg" alt="Map of China" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-md" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-red-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Flag className="mr-2 text-red-600" /> Government
          </h3>
          <p className="text-gray-700">
            Single-party socialist republic led by the Communist Party of China (CPC).
          </p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Users className="mr-2 text-red-600" /> Population
          </h3>
          <p className="text-gray-700">
            Approximately 1.4 billion people, making it the world's most populous country.
          </p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Building className="mr-2 text-red-600" /> Capital
          </h3>
          <p className="text-gray-700">
            Beijing, one of the world's oldest cities and a center of politics and culture.
          </p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Star className="mr-2 text-red-600" /> Key Features
          </h3>
          <p className="text-gray-700">
            State-owned enterprises, rapid industrialization, and a mix of communist ideology with market-oriented reforms.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Historical Timeline</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">1949: Establishment of the People's Republic of China</li>
          <li className="mb-2">1966-1976: Cultural Revolution</li>
          <li className="mb-2">1978: Economic reforms under Deng Xiaoping</li>
          <li className="mb-2">2001: China joins the World Trade Organization</li>
          <li>2013: Belt and Road Initiative launched</li>
        </ul>
      </section>
    </div>
  );
};

export default Index;
