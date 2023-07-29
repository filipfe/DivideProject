import DescInput from "@/components/Dashboard/NewProject/DescInput";
import TitleInput from "@/components/Dashboard/NewProject/TitleInput";
import { Step } from "@/types/dashboard";

export const newProjectSteps: Step[] = [
    {
        Field: TitleInput,
        title: 'Title of your project'
    }, 
    {
        Field: DescInput,
        title: "A brief description of your project"
    }
]