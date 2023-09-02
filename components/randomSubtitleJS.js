export default function SubTitle(props) {
    
  const stuff = props
 return (    
    <span dangerouslySetInnerHTML={{ __html:stuff }} />
)


}