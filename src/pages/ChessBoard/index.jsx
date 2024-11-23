import React, { useState, useEffect,useRef } from 'react';  // eslint-disable-line no-unused-vars
import './index.css'; // You can define your CSS styles for the chessboard


function Chessboard() {

	const [selectedSquare, setSelectedSquare] = useState(null);

	// 각 칸에 대한 이벤트 핸들러
	const handleSquareClick = (row, col) => {
	setSelectedSquare({ row, col });
	console.log({ row, col });
	};
  
	// 체스판 그리기
	const renderBoard = () => {
	const board = [];
	for (let row = 0; row < 28; row++) {
		const rowCells = [];
		for (let col = 0; col < 48; col++) {
	const isEvenSquare = (row + col) % 2 === 0;
	const squareColor = isEvenSquare ? 'light' : 'dark';
	const isSelected = selectedSquare && selectedSquare.row === row && selectedSquare.col === col;
	const squareClasses = `square ${squareColor} ${isSelected ? 'selected' : ''}`;
	rowCells.push(
			<div
			key={`${row}-${col}`}
			className={squareClasses}
			onClick={() => handleSquareClick(row, col)}
			/>
		);
		}
		board.push(
		<div key={`row-${row}`} className="row">
			{rowCells}
		</div>
		);
 }
 return board;
	};
  
	return (
	<div className="justify-between h-100vh">
		{renderBoard()}
		<div className=''></div>
	</div>
	);
}
  

export default Chessboard;
