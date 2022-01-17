

export const GifGridItem = ({title, img}) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={img} alt={title}/>
        </div>
    )
};