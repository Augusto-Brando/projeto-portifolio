window.sr = ScrollReveal({reset: true})

sr.reveal('.chamado-main', {duration: 2000})

sr.reveal('.main-image', {duration: 2000})

sr.reveal('.container', {duration: 2000})

sr.reveal('.underline-details', {duration: 3700})
sr.reveal('.underline-main', {duration: 3700})
sr.reveal('.underline-about', {duration: 3700})
sr.reveal('.underline-contato', {duration: 3700})

sr.reveal('label', {duration: 3700})

type Props = {
    title: String;
}
export const Header = ({title}: props) => { 
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )

}





