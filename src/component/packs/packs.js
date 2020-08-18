import React, {useCallback, useEffect, useState} from "react";
import {
    addPack,
    deletePack,
    setCurrentPage,
    setPacks,
    setPageCountSuccess, setSearchPacks, setSortPacks,
    updatePack
} from "../../redux/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {CARDS, LEARN} from "../routes";
import Paginator from "../common/Paginator";
import './pack.css'
import UpdatePack from "../common/updatePack";
import Search from "../common/search";

const useSortableData = (config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    };
    return {requestSort, sortConfig};
};

const PacksPage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPacks())
    }, [])


    const {cardPacks, page, pageCount, cardPacksTotalCount,sortName} = useSelector((store) => {
        return store.packs
    });

   // сортировка
    const {requestSort, sortConfig} = useSortableData(cardPacks);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const onClickSort = (key) => {
        requestSort(key);
        let sort = sortConfig && sortConfig.direction === 'ascending' ? 1 : 0;
        dispatch(setSortPacks(sort+sortConfig.key));
        dispatch(setPacks())
    };

    // добавление колоды
    const onHandlerAddPack = useCallback((cardsPack) => {
        dispatch(addPack(cardsPack))
    }, [dispatch]);

    // удаление колоды
    const onHandlerDeletePack = useCallback((id) => {
        dispatch(deletePack(id))
    }, [dispatch]);

// изменение названия и рейтинга колоды
    const [update, setUpdate] = useState(false);
    const activatedUpdate = () => {
        setUpdate(true)
    };

    const onHandlerUpdatePack = useCallback((cardsPack, name, grade) => {
        dispatch(updatePack(cardsPack, {name: name, grade: grade}));
        setUpdate(false)
    }, [dispatch]);


// изменение страницы и количества колод на экране

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setPacks())
    };

    const onPageChangedCount = (pageCount) => {
        dispatch(setPageCountSuccess(pageCount));
        dispatch(setPacks())
    };

    //поиск
    const onSearch = (sortName) => {
        dispatch(setSearchPacks(sortName));
        dispatch(setPacks())
    };

    return (
        <div>
            <Paginator
                page={page}
                pageSize={pageCount}
                totalItemsCount={cardPacksTotalCount}
                onPageChanged={onPageChanged}
                onPageChangedCount={onPageChangedCount}
            />
            <Search  onSearch={onSearch} />

            <table>
                <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() =>onClickSort('name')}
                            className={getClassNamesFor('name')}
                        >
                            Name
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() =>onClickSort('grade')}
                            className={getClassNamesFor('grade')}
                        >
                            Grade
                        </button>
                    </th>
                    <th>
                        <button onClick={onHandlerAddPack}>Add pack</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {cardPacks.map((p, i) => {
                    return (<tr key={p._id} id={p._id}>
                        <td>{p.name}</td>
                        <td>{p.grade}</td>
                        <td>
                            <button onClick={() => onHandlerDeletePack(p._id)}>del</button>
                        </td>
                        <td>
                            {!update && <button onClick={activatedUpdate}>update</button>}
                            {update && <UpdatePack
                                p={p}
                                onClick={onHandlerUpdatePack}
                            /> }
                        </td>
                        <td><NavLink to={CARDS+'/'+p._id}>cards</NavLink></td>
                        <td><NavLink to={LEARN+'/'+p._id}>learn</NavLink></td>
                    </tr>)
                })
                }
                </tbody>
            </table>

        </div>
    )
};
export default PacksPage

/*() => onHandlerUpdatePack(p)*/