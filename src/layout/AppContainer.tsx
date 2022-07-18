import {IAppContainerProps} from "../types/props";

export const AppContainer = ({children} : IAppContainerProps) => {
    return (
        <>
            <div className="container mt-5">
                {children}
            </div>
        </>
    )
}