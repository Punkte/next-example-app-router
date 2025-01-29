
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errors?: string[]
  name: string
  isTextArea?: boolean
}
const Input = ({defaultValue, name, isTextArea = false, errors}: Props) => {
  return (
    <div className="m-4">
      {isTextArea ? (
        <textarea
          name={name}
          defaultValue={defaultValue}
          placeholder={name}  
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />) : 
        <input 
          type="text" 
          name={name}
          defaultValue={defaultValue}
          placeholder={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    }
      {errors?.map((error, index) => <p key={index}>{error}</p>)}
    </div>
  )
}

export default Input