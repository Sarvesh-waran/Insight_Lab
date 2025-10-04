import ReactMarkdown from "react-markdown"
import './App.css'
export default function Footer(props) {
    return (
        <>
            <h1 className="insight-header">Insights Recomanded:</h1>
            <section className="markdown-body">
                <ReactMarkdown>{props.insight}</ReactMarkdown>
            </section>
        </>
    )
}