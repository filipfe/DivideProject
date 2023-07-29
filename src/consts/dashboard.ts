import DescInput from "@/components/Dashboard/NewProject/DescInput";
import TitleInput from "@/components/Dashboard/NewProject/TitleInput";
import TypeInput from "@/components/Dashboard/NewProject/TypeInput";
import { ProjectTypeLabel, Step } from "@/types/dashboard";

export const newProjectSteps: Step[] = [
    {
        Field: TitleInput,
        title: 'Title of your project'
    }, 
    {
        Field: TypeInput,
        title: 'Type of your project',
    },
    {
        Field: DescInput,
        title: "A brief description of your project"
    },
]

export const projectTypes: ProjectTypeLabel[] = [
    {
        value: 'website',
        label: "Website"
    },
    {
        value: "mobile_app",
        label: "Mobile app",
    },
    {
        value: "custom",
        label: "Custom project"
    }
]