import logo  from "../../assets/logo.svg"



export const Navbar = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between">
            <a className="font-semibold flex gap-2 text-lg"><img src={logo} alt="" />FinBiz</a>
            <ul className="flex gap-4 ms-5  ">
                <il>Product</il>
                <il>Pages</il>
                <il>Intergrations</il>
                <il>Blog</il>
                <il>Pricing</il>
        </ul>    
        <button className="bg-gray-300 border-2 rounded-3xl border-gray-700 py-2 px-2 shadow-md shadow-gray-500 ">Get started</button>    
    </div>
  )
}
