import React from 'react';

const filters = () => {
    return (
        <div className="input-filter row">
            <div style={{marginRight: 'auto'}} ></div>
            <div className="align-items" >
                <label className="text-label">Fitrar</label>
                <select className="custom-select custom-select-sm btn my-2">
                    <option value="all" selected>Todas</option>
                    <option value="completed">Completadas</option>
                    <option value="active">Activas</option>
                </select>
            </div>
            <div className="align-items">
                <label className="text-label">Ordenar</label>
                <select className="custom-select custom-select-sm btn my-2">
                    <option value="added-date-asc" selected>Ascendente</option>
                    <option value="due-date-desc">Descendente</option>
                </select>
                {/*<i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>*/}
            </div>
        </div>
    );
};

export default filters;