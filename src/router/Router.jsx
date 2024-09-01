import ComingSoon from "../main/coming-soon/ComingSoon";
import Home from "../main/home/Home";
import Layout from "../main/Layout";
import NewHome from "../main/new-home/NewHome";
import NewHomeLayout from "../main/new-home/NewHomeLayout";
import Resume from "../main/resume/Resume";

const pageRoute = [
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: '',
            element: <Home />
        },
        {
            path: 'portfolio',
            element: <ComingSoon />
        },
        {
            path: 'fun',
            element: <ComingSoon />
        },

        ]
    },
    {
        path: '/new-home',
        element: <NewHomeLayout />,
        children: [
            {
                path: '',
                element: <NewHome />
            },
            // {
            //     path: 'portfolio',
            //     element: <Portfolio />,
            // },
            // {
            //     path: 'portfolio/project-1',
            //     element: <Portfolio />
            // }

        ]
    },
    {
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/thank-you',
        element: <ComingSoon text="Thank You" icon={['fas', 'check-circle']} />
    },


]
export default pageRoute;