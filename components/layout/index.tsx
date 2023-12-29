import Header from "./header/index";

interface OptionalMiddleName {
    children: any;
}
const Layout = ({ children }: OptionalMiddleName) => {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    );
};

export default Layout;