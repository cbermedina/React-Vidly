/** @format */

import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = (props) => {
	const { columns, onSort, sortColumn, data } = props;
	return (
		<table className="table">
			<TableHeader
				columns={columns}
				sortColumn={sortColumn}
				onSort={onSort}
			></TableHeader>
			<TableBody data={data} columns={columns}></TableBody>
		</table>
	);
};

export default Table;
