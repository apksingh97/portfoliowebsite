import React from 'react'
import Boxed from '../../../shared/common/Boxed'

const Education = () => {
    let educationData = [
        {
            title: "Master in Computer Application form Dr. Abdul Kalam Technical University",
            year: ""
        },
        {
            title: "Bachler in Computer Application form Mahatma Gandhi Kashi Vidyapith University",
            year: ""
        },

    ]
    return (
        <>
            <Boxed data={educationData}>
            </Boxed>
        </>
    )
}

export default Education