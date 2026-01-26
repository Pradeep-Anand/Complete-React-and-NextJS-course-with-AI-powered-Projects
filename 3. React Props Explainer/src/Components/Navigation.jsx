import { } from "react-icons/fa";
export default function Navigation() {
    const sections = [
        {
            id: "basic-props",
            label: "Basic Props",
            icon: "📦"
        },
        {
            id: "ref-props",
            label: "Ref Props",
            icon: "🔗"
        },
        {
            id: "children-props",
            label: "Children Props",
            icon: "👶🏽"
        },
        {
            id: "complex-props",
            label: "Complex Props",
            icon: "🧩"
        },
        {
            id: "theme-toggler",
            label: "Theme Toggler",
            icon: "🎨"
        },
    ]
  return (
    <nav>
      <ul className="flex justify-center text-white gap-4 my-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button className="rounded-md bg-blue-500 p-1 hover:bg-blue-500/90" href={`#${section.id}`}>
              {section.icon} {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}