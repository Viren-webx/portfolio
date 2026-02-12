import { createContext, useState } from "react"

export const DataContext = createContext([])
export const BlogContextData = createContext([])

function Context  ({children}){
    const [posts, setPosts] = useState([])
    
    const addBlogPost = (post) => {
        setPosts((prevPosts) => [...prevPosts, post])
    }

   const MyProject =[ {
    // img:"/EMSLogin.jpg",
    // img2:"/ESMAdmin.jpg",
    // img3:"/ESMEmployee.jpg",
    // ProjectName:"Employee Management System",
    // Dese:"The Employee Management System is a web-based application designed to efficiently manage and monitor employee tasks within an organization. It features two main dashboards: one for admin and one for employees. The Admin Dashboard allows administrators to assign tasks to employees, set deadlines, and track the performance of each employee by monitoring the status of their tasks—whether they are completed, pending, or incomplete. On the other hand, the Employee Dashboard enables employees to view their assigned tasks, mark them as complete or incomplete, and track how many tasks they have successfully completed. This system helps streamline communication between management and staff, improves productivity, and ensures that work is being completed on time, making it an ideal solution for workplace task management. Email for Admin(admin@me.com) Password(123) , Email for employee(e@e.com) Password(123) ",
    // link:"http://employeemsv.netlify.app",
    // Gitup:"https://github.com/Viren-webx/EmployeeMS",
    name:"Stock Management System",


   },
    {

        img:"/StockManageLogin.jpg",
        img2:"/StockManageAdmin.jpg",
        img3:"/StockManageEmployee.jpg",
        ProjectName:"Stock Management System ",
        Dese:"The Stock Management System features two dashboards: Admin and User. The Admin Dashboard allows administrators to add, update, or delete items or products, manage inventory details, monitor stock levels, and view monthly and annual reports for sales and inventory performance. The User Dashboard enables users to search for items or products and create bills for item sales, streamlining the sales process and ensuring accurate transaction records. Username for Admin(admin) Password(123) ,  Username for User(user) Password(123)   ",
        link:"https://stockmanege.netlify.app/",
        Gitup:"https://github.com/Viren-webx/StockManegeF",
        }
   
   ]

       
   


    return<>
    
    <DataContext.Provider value={MyProject} >
    <BlogContextData.Provider value={{ posts, addBlogPost }}>
    {children}
    </BlogContextData.Provider>    
    </DataContext.Provider>
    
    </>
}


export default Context