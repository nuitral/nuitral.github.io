interface BoxProps {
	title: string
	description: string
}

const Box = ({ title, description }: BoxProps) => {
	return (
		<div className="box">
			<div className="box-title">{title}</div>
			<div>{description}</div>
		</div>
	)
}

export default Box
