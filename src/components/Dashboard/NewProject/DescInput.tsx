import { NewProjectContext } from "@/context/NewProjectContext";
import { useContext } from "react";

export default function DescInput() {
  const { newProject, setNewProject } = useContext(NewProjectContext);
  return (
    <div className="relative cursor-text">
      <div className="bg-dropdown-active w-full px-6 rounded-lg pointer-events-none border-[1px] border-[rgba(108,101,131,0.32)] absolute inset-0" />
      <textarea
        className="px-6 py-3 z-10 font-medium placeholder:text-font/60 placeholder:font-normal bg-transparent border-none stroke-none outline-none relative min-h-[1.6in] w-full leading-relaxed"
        value={newProject.description}
        placeholder="A custom admin dashboard..."
        onChange={(e) =>
          setNewProject((prev) => ({ ...prev, description: e.target.value }))
        }
      />
    </div>
  );
}
