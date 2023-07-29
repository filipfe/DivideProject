import { Project } from "@/types/dashboard";
import { Dispatch, SetStateAction, createContext } from "react";

export type NewProjectContextType = {
  newProject: Project;
  setNewProject: Dispatch<SetStateAction<Project>>;
};

export const NewProjectContext = createContext<NewProjectContextType>(null!);
