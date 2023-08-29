import { StaticImageData } from "next/image";

export type Project = {
    title: string,
    desc: string,
    thumbnail: StaticImageData,
    link: string,
}