import { IoCodeWorking, IoSchool } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";


export const Experience=[
    {
        id:1,
        date:"",
        iconsSrc: <IoSchool />,
        title: "Thinkful Software Engineering Immersion Student",
        location: "Brooklyn, New York(Remote)",
        description:
        <>
       <p>-Advanced Software Engineering Immersive</p> 
       <p>Learned industry best practices and software development standards with a focus on <span className="font-bold">JavaScript ES6+, HTML5, CSS3, REACT, Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.</span></p>
       <p>Acted as an authoritative figure in weekly teams to enforce coding best practices throughout the team.</p>
       <p>Developed and deployed applications with mobile-first, user needs, and a pixel-perfect approach while learning new languages and frameworks, spending several hours per week collaborating with and learning from senior web developers in a mentor-student relationship.</p>
       </>
    },
    {
        id:2,
        date:"",
        iconsSrc: <IoCodeWorking />,
        title: "Customer Service Advisor",
        location: "Victorvile, California",
        description:
        <>
        <p>-Dealership</p>
        <p>Consulted with technicians about needed repairs and alternatives that can be offered in place of expensive repairs.</p>
        <p>Communicated with colleagues on a regular basis to ensure guests’ satisfaction was fulfilled.</p>
        <p>Resolved concerns with products or services to help with retention and drive sales.</p>
        <p>Responded to customer needs through competent customer service and prompt problem-solving.</p>
        <p>Addressed complex issues by scheduling repair appointments.</p>
        <p>Maintained and managed customer files and databases.</p>
        </>
    }

]