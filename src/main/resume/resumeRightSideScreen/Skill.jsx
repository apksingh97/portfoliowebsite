import ProgressBar from '../../../shared/common/ProgressBar'
import { html, bootstrap, tailwind, javascript, typescript, reactjs, nextjs, vuejs, nodejs, expressjs, mongodb, mysql, java, redux, zustand, github, gitlab, bitbucket, jira } from '../../../assets'
const Skill = () => {

    const BasicStyle = [{
        title: "HTML/CSS",
        percent: '70%',
        icon: html
    },
    {
        title: "BOOTSTRAP ",
        percent: '70%',
        icon: bootstrap
    },
    {
        title: "Tailwind Css",
        percent: '70%',
        icon: tailwind
    },

    ]
    const scriptLanguage = [
        {
            title: "Javascript",
            percent: '70%',
            icon: javascript
        },
        {
            title: "Typescript",
            percent: '30%',
            icon: typescript
        },
        {
            title: "React Js",
            percent: '50%',
            icon: reactjs
        },
        {
            title: "Next Js",
            percent: '50%',
            icon: nextjs
        },
        // {
        //     title: "Vue Js",
        //     percent: '40%',
        //     icon: vuejs
        // },


    ]

    const stateManagement = [
        {
            title: "Redux",
            percent: '70%',
            icon: redux
        },
        {
            title: "Zustand",
            percent: '70%',
            icon: zustand
        },
        
    ]

    const versionControl = [
        {
            title: "Github",
            percent: '60%',
            icon: github
        },
        {
            title: "Gitlab",
            percent: '70%',
            icon: gitlab
        },
        {
            title: "Bitbucket",
            percent: '70%',
            icon: bitbucket
        },
        
    ]

    const projectManagement = [
        {
            title: "Jira",
            percent: '60%',
            icon: jira
        },
        
    ]
    const Backend = [{
        title: "Node js",
        percent: '20%',
        icon: nodejs
    },
    {
        title: "Express Js ",
        percent: '20%',
        icon: expressjs
    },
    {
        title: "Java",
        percent: '40%',
        icon: java
    },
    ]
    

    const Database = [{
        title: "Mongo Db",
        percent: '10%',
        icon: mongodb
    },
    {
        title: "MySQL",
        percent: '20%',
        icon: mysql
    },
    ]

    return (
        <>
            <div className="py-4">
                {BasicStyle.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))} 
            </div>
            <div className="py-4">
                {scriptLanguage.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
            <div className="py-4">
                {Backend.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
            <div className="py-4">
                {stateManagement.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))} 
            </div>
            <div className="py-4">
                {versionControl.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))} 
            </div>
            <div className="py-4">
                {projectManagement.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))} 
            </div>
            <div className="py-4">
                {Database.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
        </>
    )
}

export default Skill