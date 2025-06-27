import { LaravelIcon } from "../icons/laravel-dark"
import { ReactIcon } from "../icons/react"
import { TailwindcssIcon } from "../icons/tailwind"
import { JavascriptIcon } from "../icons/javascript"
import { HtmlIcon } from "../icons/html"
import { CssIcon } from "../icons/css"
import { PhpDarkIcon } from "../icons/php-dark"
import { MysqlIcon } from "../icons/mysql"
import { GitIcon } from "../icons/git"
import { TypescriptIcon } from "../icons/typescript"
import { SupabaseIcon } from "../icons/supabase"
import { DockerIcon } from "../icons/docker"

export const navlinks = [
    { title: "Experiencia", path: "#experiencia" },
    { title: "Proyectos", path: "#proyectos" },
    { title: "Sobre mí", path: "#sobre-mi" },
    { title: "Tecnologías", path: "#tecnologias" },
    { title: "Contacto", path: "#contacto" },
]

export const experience = [
    {
        id: 1,
        title: "Desarrollador React Trainee",
        date: "Junio 2024 - Abril 2025",
        achieves: [
            { id: 1, description: 'Implementé funcionalidades en una aplicación de inventario llamada "matrixcell"' },
            { id: 2, description: 'Desarrollé "passk-events", una aplicación de administración de eventos en línea' },
            {
                id: 3,
                description:
                    "Aprendí TypeScript, Supabase e implementé mis conocimientos con git y scrum y gestión de proyectos",
            },
        ],
    },
    {
        id: 2,
        title: "Proyecto de grado",
        date: "Mayo 2025",
        achieves: [
            { id: 1, description: "Desarrollé una aplicación para gestionar las citas y servicios de un salón de belleza" },
            { id: 2, description: "Implementé mis conocimientos en planificación y gestión de proyectos de software" },
            { id: 3, description: "Apliqué habilidades utilizando Laravel, React, MySQL, Git, Scrum y manejo de hostings" },
        ],
    },
]

export const projects = [
    {
        id: 1,
        name: "Uñas & Mechas",
        description:
            "Sistema completo para gestionar citas y servicios de un salón de belleza. Incluye autenticación, notificaciones en tiempo real y panel administrativo.",
        image_path: "/1.png",
        technologies: [
            { name: "Laravel", icon: LaravelIcon },
            { name: "React", icon: ReactIcon },
            { name: "TypeScript", icon: TypescriptIcon },
            { name: "MySQL", icon: MysqlIcon },
        ],
        code_path: "https://github.com/Benjamin-Galan/u-as-mechas",
        demo_path: "https://xn--uasymechassalon-yqb.es/",
    },
    {
        id: 2,
        name: "Ghossip",
        description:
            "Aplicación de chat básica en tiempo real. Incluye autenticacion y manejo de contactos",
        image_path: "/2.png",
        technologies: [
            { name: "ReactJs", icon: ReactIcon },
            { name: "React", icon: ReactIcon },
            { name: "Supabase", icon: SupabaseIcon },
        ],
        code_path: "https://github.com/Benjamin-Galan/react-chat-app",
        demo_path: "https://react-chat-app-gules.vercel.app/login",
    },
    {
        id: 3,
        name: "PassK Events",
        description:
            "Plataforma de administración de eventos en línea con sistema de registro, pagos y gestión de asistentes.",
        image_path: "/passk.png",
        technologies: [
            { name: "React", icon: ReactIcon },
            { name: "TypeScript", icon: TypescriptIcon },
            { name: "Tailwind", icon: TailwindcssIcon },
            { name: "Supabase", icon: SupabaseIcon },
        ],
        code_path: "https://github.com/pubnicaragua/central-events",
        demo_path: "https://passkevents.com/auth/register",
    },
]

export const contact = {
    phone: "+505 88476321",
    email: "bgaland0108@gmail.com",
    city: "Managua, Nicaragua",
}

export const socials = {
    linkedin: "https://www.linkedin.com/in/benjam%C3%ADn-gal%C3%A1n-d%C3%ADaz-9346ba297/",
    github: "https://github.com/Benjamin-Galan",
    instagram: "https://www.instagram.com/benjidev_1/",
}

export const about =
    "Soy Benjamín Galán Díaz, Desarrollador web e ingeniero en sistemas con un año de experiencia práctica en la creación de aplicaciones web desde el frontend hasta el backend. He trabajado en proyectos reales utilizando tecnologías modernas como Laravel, React y Supabase. Apasionado por la mejora continua, la calidad del código y el aprendizaje constante. Busco contribuir al éxito del equipo con soluciones eficientes, mantenibles y escalables."

export const techStack = [
    {
        name: "HTML",
        category: "Frontend",
        icon: HtmlIcon,
    },
    {
        name: "CSS",
        category: "Frontend",
        icon: CssIcon,
    },
    {
        name: "JavaScript",
        category: "Frontend",
        icon: JavascriptIcon,
    },
    {
        name: "TypeScript",
        category: "Frontend",
        icon: TypescriptIcon,
    },
    {
        name: "React",
        category: "Frontend",
        icon: ReactIcon,
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: TailwindcssIcon,
    },
    {
        name: "PHP",
        category: "Backend",
        icon: PhpDarkIcon,
    },
    {
        name: "Laravel",
        category: "Backend",
        icon: LaravelIcon,
    },
    {
        name: "MySQL",
        category: "Database",
        icon: MysqlIcon,
    },
    {
        name: "Supabase",
        category: "Database",
        icon: SupabaseIcon,
    },
    {
        name: "Git",
        category: "Tools",
        icon: GitIcon,
    },
    {
        name: "Docker",
        category: "Tools",
        icon: DockerIcon,
    },
]
