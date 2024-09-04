import React, { useState, ReactNode } from 'react'

interface TabsProps {
	children: ReactNode
}

const Tabs = ({ children }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0)

	const handleTabClick = (index: number) => {
		setActiveTab(index)
	}

	return (
		<div>
			<div className="tabs">
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement(child)) {
						return (
							<div
								className={`tab ${index === activeTab ? 'active' : ''}`}
								onClick={() => handleTabClick(index)}
							>
								{child.props.label}
							</div>
						)
					}
					return null
				})}
			</div>
			<div className="tab-content">
				{React.Children.map(children, (child, index) => {
					if (index === activeTab && React.isValidElement(child)) {
						return <div>{child.props.children}</div>
					}
					return null
				})}
			</div>
		</div>
	)
}

export default Tabs
