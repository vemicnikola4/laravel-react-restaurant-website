

const CreateButton = ({ children }) => {

    return (
        <button className="p-5 bg-blue-500 rounded-lg shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg cursor-pointer hover:underline"  >

            {children}
        </button>
    )

}
export default CreateButton;