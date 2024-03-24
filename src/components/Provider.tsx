import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";


const Provider = ({children}: {children: React.ReactNode}) => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </RecoilRoot>
    )
};

export default Provider;