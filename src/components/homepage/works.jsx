import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./AUVIITK.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">AUV-IITK</div>
							<div className="work-subtitle">
								Junior Team Member
							</div>
							<div className="work-duration"> March 2023- Present</div>
						</div>

						<div className="work">
							<img
								src="./voxpopuli.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Vox Populi IITK </div>
							<div className="work-subtitle">
								Core Group Member
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
