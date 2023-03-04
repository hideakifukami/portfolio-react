import Email from "./img/Email.svg"
import Github from "./img/Github.svg"
import Linkedin from "./img/Linkedin.svg"
import LogoOut from "./img/logo-outline.svg"
import Hero from "./img/hero.png"
import Fruto from "./img/fruto.png"
import Financeiro from "./img/financeiro.png"
import Organo from "./img/organo.png"



export const colorData = {
    primary: "hsl(287 60% 65%)",
    primaryOp: "hsl(287 60% 65%/0.1)",
    gray: "hsl(219 14% 71%)",
    grayOp: "hsl(219 14% 71%/0.1)",
    background: "hsl(218 12% 18%)",
    white: "hsl(0 0% 100%)"
}

export const fontData = {
    fontPrimary: '"Fira Code", monospace'
}

export const mediaIcons = {
    email: {
        href: "mailto:denys.fukami@gmail.com",
        src: Email,
        alt: "email"
    },

    github: {
        href: "https://github.com/hideakifukami",
        src: Github,
        alt: "github"
    },

    linkedin: {
        href: "https://www.linkedin.com/in/hideaki-fukami/",
        src: Linkedin,
        alt: "linkedin"
    }
}

export const heroData = {    
    image: {
        src: Hero,
        alt: "Fotografia de Hideaki Fukami"
    }
}

export const ProjectData = {
    project1: {
        src: Fruto,
        alt: "Banner do projeto Fruto e Fruta",
        techs: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "Bootstrap",
            tech4: ""
        },
        name: "Landing Page - Fruto & Fruta",
        description: "Projeto de Landing Page responsiva construído com uso de Bootstrap.",
        hrefLive: "https://hideakifukami.github.io/fruto-fruta-project/",
        hrefGit: "https://github.com/hideakifukami/fruto-fruta-project",
    },

    project2: {
        src: Financeiro,
        alt: "Banner do projeto Controle Financeiro",
        techs: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "JavaScript",
            tech4: "React.JS"
        },
        name: "Controle Financeiro - React.JS",
        description: "Projeto construído com uso de React.JS, de forma responsiva e utilizando as bibliotecas react-icons e styled-components.",
        hrefLive: "https://controle-financeiro-reactjs.vercel.app/",
        hrefGit: "https://github.com/hideakifukami/controle-financeiro-reactjs",
    },

    project3: {
        src: Organo,
        alt: "Banner do projeto Organo",
        techs: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "JavaScript",
            tech4: "React.JS"
        },
        name: "Organo Project - React.JS",
        description: "Projeto elaborado com uso de React.JS para elaboração dos componentes da página de forma individual e com interação dinâmica.",
        hrefLive: "https://organo-project-hideakifukami.vercel.app/",
        hrefGit: "https://github.com/hideakifukami/organo-project",
    }
}

export const footerData = {
    hrefEmail: 'mailto:denys.fukami@gmail.com',
    email: 'denys.fukami@gmail.com',
    description: 'Web designer and front-end developer based in Brazil',
    title: 'Media',
    copyright: 'Copyright 2023. Made by Hideaki Fukami'
}

export const skillsData = {
    languages: {
        skillGroup: "Languages",
        skills: {
            item1: 'JavaScript',
            item2: 'Python',
            item3: 'Java'
        }
    },

    other: {
        skillGroup: "Other",
        skills: {
            item1: 'HTML',
            item2: 'CSS',
            item3: 'Photoshop',
            item4: 'Illustrator',
            item5: 'Figma',
            item6: 'Git'
        }
    },

    frameworks: {
        skillGroup: "Frameworks",
        skills: {
            item1: 'React',
            item2: 'Bootstrap',
            item3: 'Three.JS'
        }
    }
}