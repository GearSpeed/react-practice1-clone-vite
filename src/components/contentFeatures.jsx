export default function ContentFeatures({emoji,title,text}){
    return (
        <article className="content-card">
            <div className="content-card-emoji">{emoji}</div>
            <h2 className="content-card-title">{title}</h2>
            <p className="content-card-text">{text}</p>            
        </article>
    )
}