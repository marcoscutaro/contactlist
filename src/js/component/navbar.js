import React from "react";
import { Modal } from "./Modal";
export const Navbar = () => {
	return (
		<div>
			<h1>contact list app</h1>
			<div className="ml-auto">
			<button type="button" data-bs-toggle="modal" data-bs-target={"#editModal-"+-1}	className="btn btn-primary"> Add</button>
			</div>
			<Modal index={-1}></Modal>
		</div>
	);
};
