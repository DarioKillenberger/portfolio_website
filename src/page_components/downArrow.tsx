import '../css/Components.css';

function DownArrow({scrollTarget} : {scrollTarget:React.RefObject<HTMLDivElement[]>}) {
    return(
        <>
            <button className='downArrow'>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 674.2 591.91" onClick={() => scrollTarget.current !== null ? scrollTarget.current[0].scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'}): null}> 
                    <path d="M337.1,591.91a30,30,0,0,1-26-15L4,45A30,30,0,1,1,56,15L337.1,501.91,618.22,15a30,30,0,1,1,52,30L363.08,576.91A30,30,0,0,1,337.1,591.91Z" fill="#4792C2"/> 
                </svg>
            </button>
        </>
    );
};
export default DownArrow;