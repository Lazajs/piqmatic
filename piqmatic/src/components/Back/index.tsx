import { IoIosArrowBack } from 'react-icons/io'

export default function Back (props: Partial<{ size: string, color: string, onClick: () => void, className: string }>) {
  return <IoIosArrowBack {...props} />
}
