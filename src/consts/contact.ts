import { ContactField, FAQ, FormData } from "@/types/contact";

export const FAQ_QUESTIONS: FAQ[] = [
    {
        id: 0,
        question: 'How much do I have to pay for DivideProject services?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Et fringilla egestas placerat risus est massa porttitor. Augue at dui porttitor bibendum. Tellus nisi lectus mi adipiscing praesent eu purus cras.'
    },
    {
        id: 1,
        question: 'How much do I have to pay for DivideProject services?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Et fringilla egestas placerat risus est massa porttitor. Augue at dui porttitor bibendum. Tellus nisi lectus mi adipiscing praesent eu purus cras.'
    },
    {
        id: 2,
        question: 'How much do I have to pay for DivideProject services?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Et fringilla egestas placerat risus est massa porttitor. Augue at dui porttitor bibendum. Tellus nisi lectus mi adipiscing praesent eu purus cras.'
    },
    {
        id: 3,
        question: 'How much do I have to pay for DivideProject services?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Et fringilla egestas placerat risus est massa porttitor. Augue at dui porttitor bibendum. Tellus nisi lectus mi adipiscing praesent eu purus cras.'
    },
]

export const CONTACT_FIELDS: ContactField[] = [
    {
        name: 'full_name',
        label: 'Full Name',
        isOptional: false,
    },
    {
        name: 'email',
        label: 'Email',
        isOptional: false,
    },
    {
        name: 'budget',
        label: 'Budget',
        isOptional: true,
    },
]