function CategoryChips ({category , isChosen , onClick}){
    const {name} = category;
    return(
        <div
        onClick={onClick}
        className=
        {`${isChosen ? 'bg-amber-400  text-white' : 'bg-white' }  p-2 px-4 border m-2 
         cursor-pointer rounded-md`}>
         <h1>{name}</h1>
        </div>
    )
}

export default CategoryChips;