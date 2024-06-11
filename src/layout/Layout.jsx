import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div  style={{minHeight:"100vh"}}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;