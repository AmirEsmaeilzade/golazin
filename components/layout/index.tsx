import Header from "./header/index";

interface OptionalMiddleName {
    children: any;
}
const Layout = ({ children }: OptionalMiddleName) => {
    return (
        <div className="">
            <Header />
            <div className="mx-10">
                {children}
            </div>
        </div>
    );
};

export default Layout;