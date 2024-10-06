import { useNavigate } from 'react-router-dom'
import Personalization from './Personalization.tsx'

const Navbar = () => {
	const navigate = useNavigate()

	const navigateTo = (path: string) => {
		navigate(path)
	}

	const sidebarRef = document.getElementsByClassName('sidebar')

	const openSidebar = () => {
		if (sidebarRef.length > 0) {
			sidebarRef[0].classList.add('open')
		}
	}

	return (
		<div className="navbar">
			<div className="sidebar-toggle" onClick={() => openSidebar()}>
				<div className="hamburger-menu">
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
			<div className="navbar-elements">
				<div className="logo" onClick={() => navigateTo('/')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="95.52px"
						height="24px"
						viewBox="0 0 199 50"
					>
						<g
							id="Artboard"
							transform="translate(-541.000000, -78.000000)"
							fill="currentColor"
						>
							<path
								d="M568.824,127.432 C569.496,127.432 570.144,127.36 570.768,127.216 C571.392,127.072 571.872,126.952 572.208,126.856 L572.208,126.856 L572.208,108.28 L572.208,104.896 C572.208,100.808258 570.983026,97.7207242 568.533078,95.6333985 L568.284,95.428 C565.668,93.34 562.032,92.296 557.376,92.296 C554.688,92.296 552.264,92.632 550.104,93.304 C547.944,93.976 546.192,94.72 544.848,95.536 C543.84,96.16 543.108,96.82 542.652,97.516 C542.196,98.212 541.968,99.112 541.968,100.216 L541.968,100.216 L541.968,112.024 L541.968,124.048 C541.968,125.248 542.304,126.112 542.976,126.64 C543.648,127.168 544.656,127.432 546,127.432 C546.72,127.432 547.38,127.36 547.98,127.216 C548.58,127.072 549.048,126.952 549.384,126.856 L549.384,126.856 L549.383,108.28 L549.384,100.36 C550.237333,99.8906667 551.24237,99.4592593 552.399111,99.0657778 L552.84,98.92 C554.184,98.488 555.696,98.272 557.376,98.272 C559.632,98.272 561.432,98.824 562.776,99.928 C564.12,101.032 564.792,102.784 564.792,105.184 L564.792,105.184 L564.792,112.024 L564.792,124.048 C564.792,125.248 565.116,126.112 565.764,126.64 C566.412,127.168 567.432,127.432 568.824,127.432 Z M597.768,128.008 C600.504,128.008 602.904,127.72 604.968,127.144 C607.032,126.568 608.664,125.92 609.864,125.2 C610.872,124.576 611.544,123.928 611.88,123.256 C612.216,122.584 612.384,121.72 612.384,120.664 L612.384,120.664 L612.383,108.28 L612.384,96.328 C612.384,95.1184 612.10176,94.25376 611.53728,93.73408 L611.412,93.628 C610.764,93.124 609.744,92.872 608.352,92.872 C607.68,92.872 607.032,92.944 606.408,93.088 C605.784,93.232 605.304,93.352 604.968,93.448 L604.968,93.448 L604.968,111.88 L604.968,120.376 C604.344,120.76 603.432,121.132 602.232,121.492 C601.032,121.852 599.568,122.032 597.84,122.032 C595.248,122.032 593.22,121.42 591.756,120.196 C590.292,118.972 589.56,116.968 589.56,114.184 L589.56,114.184 L589.559,108.28 L589.56,96.328 C589.56,95.1184 589.27776,94.25376 588.71328,93.73408 L588.588,93.628 C587.94,93.124 586.944,92.872 585.6,92.872 C584.88,92.872 584.208,92.944 583.584,93.088 C582.96,93.232 582.48,93.352 582.144,93.448 L582.144,93.448 L582.144,111.88 L582.144,114.4 C582.144,117.52 582.768,120.088 584.016,122.104 C585.264,124.12 587.064,125.608 589.416,126.568 C591.768,127.528 594.552,128.008 597.768,128.008 Z M626.352,87.328 C627.696,87.328 628.776,86.908 629.592,86.068 C630.408,85.228 630.816,84.208 630.816,83.008 C630.816,81.76 630.408,80.728 629.592,79.912 C628.776,79.096 627.696,78.688 626.352,78.688 C625.104,78.688 624.048,79.096 623.184,79.912 C622.32,80.728 621.888,81.76 621.888,83.008 L621.888,83.008 L621.894612,83.2623878 C621.951918,84.3527959 622.381714,85.288 623.184,86.068 C624.048,86.908 625.104,87.328 626.352,87.328 Z M626.712,127.432 C627.432,127.432 628.092,127.36 628.692,127.216 C629.292,127.072 629.76,126.952 630.096,126.856 L630.096,126.856 L630.095,107.993 L630.096,96.4 C630.096,95.2352 629.81376,94.3944533 629.24928,93.87776 L629.124,93.772 C628.476,93.268 627.48,93.016 626.136,93.016 C625.416,93.016 624.744,93.076 624.12,93.196 C623.496,93.316 623.016,93.424 622.68,93.52 L622.68,93.52 L622.68,111.664 L622.68,124.048 C622.68,125.248 623.016,126.112 623.688,126.64 C624.36,127.168 625.368,127.432 626.712,127.432 Z M652.272,127.936 C654.816,127.936 656.724,127.54 657.996,126.748 C659.268,125.956 659.904,124.936 659.904,123.688 C659.904,123.064 659.772,122.5 659.508,121.996 C659.244,121.492 658.944,121.072 658.608,120.736 C657.984,121.072 657.192,121.36 656.232,121.6 C655.272,121.84 654.408,121.96 653.64,121.96 C651.816,121.96 650.4,121.6 649.392,120.88 C648.384,120.16 647.88,118.936 647.88,117.208 L647.88,117.208 L647.88,107.993 L647.88,99.928 L657.24,99.928 C657.981818,99.928 658.574876,99.7197355 659.019174,99.3032066 L659.148,99.172 C659.604,98.668 659.832,97.912 659.832,96.904 C659.832,96.328 659.748,95.776 659.58,95.248 C659.412,94.72 659.232,94.312 659.04,94.024 L659.04,94.024 L647.88,94.024 L647.88,86.824 C647.88,85.7097143 647.600633,84.8851429 647.041898,84.3502857 L646.908,84.232 C646.26,83.704 645.264,83.44 643.92,83.44 C643.2,83.44 642.528,83.512 641.904,83.656 C641.28,83.8 640.824,83.92 640.536,84.016 L640.536,84.016 L640.536,110.008 L640.536,117.64 C640.536,121.336 641.604,123.976 643.74,125.56 C645.876,127.144 648.72,127.936 652.272,127.936 Z M671.64,127.432 C672.36,127.432 673.02,127.36 673.62,127.216 C674.22,127.072 674.688,126.952 675.024,126.856 L675.024,126.856 L675.023,111.088 L675.024,100.504 C675.984,99.9367273 677.172099,99.4587107 678.588298,99.0699504 L679.02,98.956 C680.628,98.548 682.416,98.344 684.384,98.344 C685.152,98.344 685.908,98.392 686.652,98.488 C687.396,98.584 688.008,98.68 688.488,98.776 C688.728,98.392 688.932,97.96 689.1,97.48 C689.268,97 689.352,96.472 689.352,95.896 C689.352,93.544 687.264,92.368 683.088,92.368 C680.496,92.368 678.108,92.656 675.924,93.232 C673.74,93.808 671.976,94.528 670.632,95.392 C669.624,96.064 668.868,96.772 668.364,97.516 C667.86,98.26 667.608,99.208 667.608,100.36 L667.608,100.36 L667.608,111.088 L667.608,124.048 C667.608,125.248 667.944,126.112 668.616,126.64 C669.288,127.168 670.296,127.432 671.64,127.432 Z M707.784,128.008 C710.28,128.008 712.524,127.756 714.516,127.252 C716.508,126.748 718.128,126.136 719.376,125.416 C720.24,124.936 720.912,124.384 721.392,123.76 C721.872,123.136 722.112,122.272 722.112,121.168 L722.112,121.168 L722.112,104.392 C722.112,100.216 720.804,97.156 718.188,95.212 C715.572,93.268 712.032,92.296 707.568,92.296 L707.568,92.296 L706.885688,92.303875 C705.297563,92.340625 703.737,92.506 702.204,92.8 C700.452,93.136 698.904,93.616 697.56,94.24 C695.928,95.008 695.112,96.136 695.112,97.624 C695.112,98.248 695.28,98.836 695.616,99.388 C695.952,99.94 696.336,100.408 696.768,100.792 C698.16,100.12 699.756,99.52 701.556,98.992 C703.356,98.464 705.216,98.2 707.136,98.2 C709.536,98.2 711.432,98.68 712.824,99.64 C714.216,100.6 714.912,102.16 714.912,104.32 L714.912,104.32 L714.912,105.976 L704.832,106.984 C701.04,107.32 698.112,108.34 696.048,110.044 C693.984,111.748 692.952,114.184 692.952,117.352 C692.952,120.856 694.26,123.508 696.876,125.308 C699.492,127.108 703.128,128.008 707.784,128.008 Z M707.784,122.248 L707.387701,122.244211 C705.042216,122.198737 703.278316,121.744 702.096,120.88 C700.848,119.968 700.224,118.72 700.224,117.136 C700.224,115.6 700.788,114.436 701.916,113.644 C703.044,112.852 704.712,112.36 706.92,112.168 L706.92,112.168 L714.912,111.376 L714.912,120.664 C714.336,121 713.436,121.348 712.212,121.708 C710.988,122.068 709.512,122.248 707.784,122.248 L707.784,122.248 Z M736.368,127.432 C737.088,127.432 737.76,127.36 738.384,127.216 C739.008,127.072 739.464,126.952 739.752,126.856 L739.752,126.856 L739.752,112.312 L739.752,83.08 C739.752,81.832 739.428,80.956 738.78,80.452 C738.132,79.948 737.112,79.696 735.72,79.696 C735.048,79.696 734.4,79.768 733.776,79.912 C733.152,80.056 732.696,80.176 732.408,80.272 L732.408,80.272 L732.408,111.664 L732.408,124.048 C732.408,125.248 732.732,126.112 733.38,126.64 C734.028,127.168 735.024,127.432 736.368,127.432 Z"
								id="nuitral"
							></path>
						</g>
					</svg>
				</div>
				<div className="elements">
					<div className="link-elements">
						<div className="link" onClick={() => navigateTo('/')}>
							Home
						</div>
						<div className="link" onClick={() => navigateTo('/docs')}>
							Docs
						</div>
						<div className="link" onClick={() => navigateTo('/about')}>
							About
						</div>
					</div>
					<Personalization></Personalization>
				</div>
			</div>
		</div>
	)
}

export default Navbar
