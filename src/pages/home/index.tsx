// React
import React, { useState } from "react"

// Libary
import { Outlet, useNavigate } from "react-router-dom"
import { BsList, BsFillGearFill, BsLockFill, BsPersonCheckFill, BsSliders } from "react-icons/bs"
import { RiDashboardFill } from "react-icons/ri"
import { AiOutlineDropbox, AiOutlineOrderedList } from "react-icons/ai"

export default function HomeLayout() {
	// useState
	const [isOpen, setIsOpen] = useState(true)

    // Definition
	interface Imenu {
		title: string,
        path: string,
        icon: React.ReactElement
	}

	const menu: Imenu[] = [
		{
			title: "Dashboard",
            path: "/dashboard",
            icon: <RiDashboardFill />
		},
		{
			title: "Products",
            path: "/products",
            icon: <AiOutlineDropbox />
		},
		{
			title: "Category",
            path: "/category",
            icon: <BsSliders />
		},
		{
			title: "Orders",
            path: "/orders",
            icon: <AiOutlineOrderedList />
		},
		{
			title: "Login",
            path: "/login",
            icon: <BsPersonCheckFill />
		},
		{
			title: "Register",
            path: "/register",
            icon: <BsLockFill />
		},
	]

    const navigate = useNavigate();
    
    // Function

    function onHandleClickMenu(path: string){
        navigate(path)
    }

	return (
		<div className="flex flex-row">
			<div
				className={`sidebar h-screen p-5 pt-8 ${
					isOpen ? "w-72" : "w-20"
				} 
                bg-dark-purple relative transition-all duration-300  drop-shadow-xl`}
			>
				<BsList
					onClick={() => setIsOpen(!isOpen)}
					className={`${!isOpen ? "bg-dark-purple p-1 -right-8" : "right-5"} duration-300 text-white text-4xl absolute top-9  cursor-pointer`}
				/>
				<div className="inline-flex">
					<BsFillGearFill
						className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 ${
							isOpen && "rotate-[360deg]"
						} duration-700`}
					/>
					<h1
						className={`text-white origin-left font-medium text-2xl ${
							!isOpen && "scale-0"
						} duration-300`}
					>
						TailWind
					</h1>
				</div>

				<ul className="pt-2">
					{menu.map((menu: Imenu, index) => {
						return (
							<>
								<li
									className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 duration-100 hover:bg-light-white"
									key={index}
                                    onClick={() => onHandleClickMenu(menu.path)}
								>
                                    <span className="text-2xl block float-left">
                                       {menu.icon}
                                    </span>
									<span className={`text-base font-medium flex-1  ${!isOpen && "hidden"}`}>{menu.title}</span>
								</li>
							</>
						)
					})}
				</ul>
			</div>
			<div className="grow">
				<Outlet />
			</div>
		</div>
	)
}
