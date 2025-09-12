
const Card = ({ image, title, author, price }) => {
    return (
        <div className="card">
            <div className="card-top">
                <div className="card-img">
                    <img src={image} alt={title} />
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p className="author">by {author}</p>
                </div>
            </div>

            <div className="price-content">
                ${price}
            </div>
        </div>
    )
}

export default Card
