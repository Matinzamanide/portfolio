interface IChildren{
    children:React.ReactNode;
}
const Container:React.FC<IChildren> = ({children}) => {
    return ( 
        <div className="w-[90%] mx-auto">{children}</div>
     );
}
 
export default Container;