import { projectTypes } from "@/consts/dashboard";
import { NewProjectContext } from "@/context/NewProjectContext";
import { useContext } from "react";
import Select from "react-select";

export default function TypeInput() {
  const { newProject, setNewProject } = useContext(NewProjectContext);
  return (
    <Select
      options={projectTypes}
      value={projectTypes.find((item) => item.value === newProject.type)}
      isSearchable={false}
      placeholder="Select type"
      className="bg-dropdown text-p rounded-xl border-border border-[1px] py-1 cursor-pointer"
      classNames={{
        menuList: () =>
          "bg-dropdown border-[1px] border-border rounded overflow-hidden",
        option: ({ isSelected }) =>
          `transition-colors cursor-pointer py-3 px-6 ${
            isSelected ? "bg-primary" : "hover:bg-primary"
          }`,
        valueContainer: () => "px-6",
        dropdownIndicator: () => "bg-dropdown px-6",
      }}
      unstyled
      required
      onChange={(value) =>
        value && setNewProject((prev) => ({ ...prev, type: value?.value }))
      }
    />
  );
}
