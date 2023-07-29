export enum Status {
    pending,
    in_progress,
    finished
}

export type Project = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    status: keyof typeof Status
}