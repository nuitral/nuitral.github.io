const Footer = () => {
	return (
		<div className="footer">
      <span className="footer-text">
        Released under the MIT License – © 2025 Nicola Centonze
      </span>
			<div className="footer-social">
				<a
					className="link"
					href="https://www.linkedin.com/in/nicolacentonze/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.99h4V24h-4V8.99zM8.5 8.99h3.8v2.05h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.67 4.79 6.14V24h-4v-7.95c0-1.9-.03-4.34-2.64-4.34-2.64 0-3.04 2.06-3.04 4.2V24h-4V8.99z" />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Footer;
