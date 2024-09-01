import React from 'react'
import Boxed from '../../../shared/common/Boxed'

const EmploymentHistory = () => {
    let ExperienceData = [
        {
            title: "WordPress developer (Intern) at Fabulous Media Pvt. Ltd.",
            year: "February 2019 - August 2019"
        },
        {
            title: "Junior WordPress Developer at Fabulous Media Pvt. Ltd.",
            year: "September 2019 - March 2020"
        },
        {
            title: "Freelancer",
            year: "May 2020 - December 2020"
        },
        {
            title: "WordPress developer at Scizers IOT Pvt. Ltd.",
            year: "january 2021 - August 2021"
        },
        {
            title: "Frontend developer at Elogss Pvt. Ltd.",
            year: "September 2021 - May 2023"
        },
        {
            title: "Software Engineer at Descartes Systems India Private Limited(WCT)",
            year: "June 2024 - present"
        },
    ]
    return (
        <>
            <Boxed data={ExperienceData} />

        </>
    )
}

export default EmploymentHistory