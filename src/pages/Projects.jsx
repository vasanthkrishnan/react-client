
import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { getProject } from "../service/api"
import { toast, Toaster } from "sonner"
import AddCardComponent from "../components/AddCardComponent"
import { AlertCircle } from "lucide-react"

// const projectData = [
//   {
//       title: "Vehicle Routing Problem with Time windows",
//       tools: "Html, Css, Javascript, Mongodb",
//       duration: "3-Months",
//       id : "1"
//   },
//   {
//     title: "Vehicle Routing Problem with Time windows",
//     tools: "Html, Css, Javascript, Mongodb",
//     duration: "3-Months",  
//     id: "2"
//   },
//   {
//     title: "Vehicle Routing Problem with Time windows",
//     tools: "Html, Css, Javascript, Mongodb",
//     duration: "3-Months",
//     id: "3"
//   }
// ]
const Projects = () => {
const [projectData, setProjectData] = useState(null)
const fetchProject = async () => {
    try {
      const { data } = await getProject()
      setProjectData(data)
    } catch (error) {
        console.log(error)
        toast('Error fetching projects', {
          className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <AlertCircle />,
        });
    }
}


console.log(projectData)
useEffect(() => {
  fetchProject()
}, [])

if(!projectData || projectData.length === 0) {
  return (
    <div className="w-full h-[10%] flex justify-center items-center">
      <AddCardComponent />
    </div>
  )
}

  return (
    <>
      <div className="h-screen w-screen bg-[#efebeb] flex justify-center items-center">
        <div className="h-full w-[90%] flex flex-row flex-wrap justify-center items-center gap-8">
          < AddCardComponent  fetchProject = { fetchProject }/>
          {
            projectData.map((data, index) => (
                < ProjectCard title={ data.title } tools={ data. tools } duration={ data.desc } key={ index } id={ data._id } fetchProject = { fetchProject }/>
              ))}
        </div>
      </div>
      <Toaster richColors />
    </>
  )
}

export default Projects