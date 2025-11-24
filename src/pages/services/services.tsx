import type { Service } from "../../lib/types";
import { Link, Outlet } from "react-router-dom";
const services: Service[] = [
  {
    id: 1,
    title: "Service One",
    description: "Description for service one.",
    link: "/service-one",
  },
  {
    id: 2,
    title: "Service two",
    description: "Description for service two.",
    link: "/service-two",
  },
  {
    id: 3,
    title: "Service three",
    description: "Description for service three.",
    link: "/service-three",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-xl mx-auto py-12 space-y-6">
      <h1 className="text-4xl font-bold text-purple-800">Services Page</h1>

      {services.map((services) => (
        <div key={services.id} className="mb-6 bg-amber-500">
          <h2 className="text-2xl font-semibold text-purple-600">
            {services.title}
          </h2>
          <p>{services.description}</p>
          <Link
            to={`/services/${services.link}`}
            className="text-purple-500 hover:underline"
          >
            Voir plus
          </Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
