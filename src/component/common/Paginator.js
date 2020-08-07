import React, {useState} from "react";
import styles from './Paginator.module.css';

const Paginator = ({portionSize = 20, totalItemsCount, pageSize, page, onPageChanged, onPageChangedCount, ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const countPacks = [10, 20, 30, 50];

    const option = countPacks.map((c, i) => {
        return <option key={i} value={c}>{c}</option>
    });

    const onChangeCountPacks = (e) => {
        onPageChangedCount(e.currentTarget.value)
    };


    return (
        <div>
            <div>
                <select onChange={onChangeCountPacks} value={pageSize}>
                    {option}
                </select>
            </div>
            <div className={styles.paginator}>

                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
                }

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={styles.pageNumber}> <span
                            className={page === p ? styles.selectedPage : ''}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}>{p}</span></span>
                    })}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
                }
            </div>
        </div>)

};
export default Paginator
