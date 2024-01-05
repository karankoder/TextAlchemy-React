import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Alert(props) {
    return (
        props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong> 
            </div>
        </div>
    )
}
