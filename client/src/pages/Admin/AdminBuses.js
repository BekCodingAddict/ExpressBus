import React from 'react';
import PageTitle from '../../component/PageTitle';
import BusForm from '../../component/BusForm';

function AdminBuses(){
    const [showBusForm, setShowBusForm]=React.useState(false);
    return (
        <div>
            <div className='d-flex justify-content-between'>
            <PageTitle title='Buses'/>
            <button className='primary-btn'
            onClick={()=>setShowBusForm(true)}
            >Add Bus</button>
            </div>

            {showBusForm && <BusForm showBusForm={showBusForm} 
            setShowBusForm={setShowBusForm} type='add'/>}
        </div>
    )
}

export default AdminBuses;