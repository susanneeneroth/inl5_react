// 'use strict' får en varning att det inte behövs i moduler

import React from 'react'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Filmtitel</th>
                <th>Beskrivning</th>
                <th>År</th>
                <th>Ta bort</th>
            </tr>
        </thead>
       
    );
}

const TableBody = (props) => {
    const rows = props.movieData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.desc}</td>
                <td>{row.year}</td>
                <td><button className="remove-btn" onClick={() => props.removeMovie(index)}>Ta bort</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const TableContent = (props) => {
    const {movieData, removeMovie} = props;

    return (
        <table>
      <TableHead />
      <TableBody movieData={movieData} removeMovie={removeMovie} />
    </table>
    );
}

export default TableContent;