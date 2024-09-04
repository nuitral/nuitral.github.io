import { ReactNode } from 'react'

interface TabProps {
	label: string
	children: ReactNode
}

const Tab = ({ children }: TabProps) => {
	return <div>{children}</div>
}

export default Tab
