import { Dispatch, SetStateAction } from "react";

export enum Status {
    pending,
    in_progress,
    finished
}

export enum ProjectType {
    website,
    mobile_app,
    custom
}

export enum ProjectCategory {
    design,
    frontend,
    backend
}

export type Project = {
    id: number;
    title: string;
    description: string;
    created_at?: string;
    updated_at?: string;
    status: keyof typeof Status;
    type?: keyof typeof ProjectType;
}

export type Step = {
    title: string;
    Field: () => React.JSX.Element
}

export type ProjectTypeLabel = {
    label: string;
    value: keyof typeof ProjectType
}

export type Milestone = {
    id: number,
    description: string,
    created_at?: string,
    category: keyof typeof ProjectCategory,
    link?: string;
    project: Project;
}