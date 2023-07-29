import Input from "@/components/Home/Contact/components/Input";
import { NewProjectContext } from "@/context/NewProjectContext";
import { useContext } from "react";

export default function TitleInput() {
  const { newProject, setNewProject } = useContext(NewProjectContext);
  return (
    <Input
      placeholder="Portfolio website for my company"
      maxLength={48}
      value={newProject.title}
      onChange={(e) =>
        setNewProject((prev) => ({
          ...prev,
          title: e.target.value,
        }))
      }
    />
  );
}
