import React, {useState} from 'react';
import './assets/css/app.scss';
import {BrowserRouter as Router, Route, Routes as BRoutes} from "react-router-dom";
import {Routes} from "./config";

function App() {
    const [open, setOpen] = useState(false)
    return (
        <Router>
            <BRoutes>
                {Object.entries(Routes).map(([_, route], index) => (
                    <Route
                        key={index.toString()}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </BRoutes>
        </Router>
        // <div className="container mt-5">
        //     <div className="flex space-between gap-2">
        //         <SearchField
        //             iconColor={'#fff'}
        //             iconWidth={'16'}
        //             iconHeight={'16'}
        //             radius={'12px 0 0 12px'}/>
        //         <Button
        //             onClick={() => setOpen(true)}
        //             radius={'12px'}
        //             variant={'primary'}
        //         >
        //             <PlusIcon
        //                 color={'#fff'}
        //             />
        //         </Button>
        //     </div>
        //     <Modal
        //         open={open}
        //         onClose={() => {
        //             setOpen(false)
        //         }}
        //         title='Ajouter une nouvelle tâche'
        //         titleColor='#0d6efd'
        //         radius={'12px'}
        //     >
        //         <div className="mt-2">
        //             <TextField
        //                 maxwidth='100%'
        //                 placeholder={'Tâche...'}
        //                 radius={'12px'}
        //                 type='text'/>
        //         </div>
        //         <div className="mt-2 flex content-end">
        //             <Button
        //                 radius={'12px'}
        //                 variant={'primary'}
        //             >
        //                 <SaveIcon
        //                     color={'#fff'}
        //                 />
        //             </Button>
        //         </div>
        //
        //     </Modal>
        // </div>
    );
}

export default App;
