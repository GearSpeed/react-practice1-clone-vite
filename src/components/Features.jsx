import ContentFeatures from './contentFeatures/'
export default function Features(){
    
    const features = [
        {emoji: '💡', title: 'Instant Server Start', text: 'On demand file serving over native ESM, no bundling required!'},
        {emoji: '⚡️', title: 'Lightning Fast HMR', text: 'Hot Module Replacement (HMR) that stays fast regardless of app size.'},
        {emoji: '🛠️', title: 'Rich Features', text: 'Out-of-the-box support for TypeScript, JSX, CSS and more.'},
        {emoji: '📦', title: 'Optimized Build', text: 'Pre-configured Rollup build with multi-page and library mode support.'},
        {emoji: '🔩', title: 'Universal Plugins', text: 'Rollup-superset plugin interface shared between dev and build.'},
        {emoji: '🔑', title: 'Fully Typed APIs', text: 'Flexible programmatic APIs with full TypeScript typing.'},
    ]
    
    return (
        <aside id="features">
            {features.map((card) =>{
                return(
                    <ContentFeatures 
                        key = {`features-${card.title}`}
                        emoji = {card.emoji}
                        title = {card.title}
                        text = {card.text}
                    />
                )
            })}
        </aside>
    )
}